import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const MAX_MESSAGES_PER_DAY = 3;
const ONE_DAY = 24 * 60 * 60 * 1000;
const COOKIE_NAME = "contact_limit";
const MAX_FILES = 5;
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB per file — adjust to your host's limit

const ALLOWED_ORIGINS = [
  "https://tsdruk.pl",
  "https://www.tsdruk.pl",
];

function corsHeaders(origin: string) {
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export async function OPTIONS(req: NextRequest) {
  const origin = req.headers.get("origin") ?? "";
  return new NextResponse(null, { status: 204, headers: corsHeaders(origin) });
}

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin") ?? "";
  if (!ALLOWED_ORIGINS.includes(origin)) {
    return NextResponse.json({ error: "Forbidden origin" }, { status: 403, headers: corsHeaders(origin) });
  }

  try {
    const contentType = req.headers.get("content-type") ?? "";
    if (!contentType.includes("multipart/form-data")) {
      return NextResponse.json({ error: "Invalid content type" }, { status: 415, headers: corsHeaders(origin) });
    }

    const formData = await req.formData();

    const name = formData.get("name")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const email = formData.get("email")?.toString().trim() || "";
    const printerModel = formData.get("printerModel")?.toString().trim() || "";
    const problem = formData.get("problem")?.toString().trim();

    if (!name || !phone || !problem) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400, headers: corsHeaders(origin) });
    }

    // Rate limit check
    const rawCookie = req.cookies.get(COOKIE_NAME)?.value;
    let count = 0;
    let lastReset = Date.now();

    if (rawCookie) {
      try {
        const decoded = JSON.parse(Buffer.from(rawCookie, "base64").toString("utf-8"));
        count = decoded.count ?? 0;
        lastReset = decoded.lastReset ?? lastReset;
      } catch {
        count = 0;
        lastReset = Date.now();
      }
    }

    const now = Date.now();
    if (now - lastReset >= ONE_DAY) {
      count = 0;
      lastReset = now;
    }

    if (count >= MAX_MESSAGES_PER_DAY) {
      return NextResponse.json({ error: "Too many messages sent today." }, { status: 429, headers: corsHeaders(origin) });
    }

    // Collect and validate files
    const files = formData.getAll("attachment").filter((f): f is File => f instanceof File && f.size > 0);

    if (files.length > MAX_FILES) {
      return NextResponse.json({ error: `Max ${MAX_FILES} files allowed` }, { status: 400, headers: corsHeaders(origin) });
    }

    const oversized = files.find((f) => f.size > MAX_FILE_SIZE);
    if (oversized) {
      return NextResponse.json({ error: `File "${oversized.name}" exceeds 5MB limit` }, { status: 400, headers: corsHeaders(origin) });
    }

    const attachments = await Promise.all(
      files.map(async (file) => ({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
        contentType: file.type || "application/octet-stream",
      }))
    );

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const html = `
      <table>
        <tr><td><strong>Imię i nazwisko</strong></td><td>${name}</td></tr>
        <tr><td><strong>Telefon</strong></td><td>${phone}</td></tr>
        <tr><td><strong>E-mail</strong></td><td>${email || "—"}</td></tr>
        <tr><td><strong>Model drukarki</strong></td><td>${printerModel || "—"}</td></tr>
        <tr><td><strong>Opis problemu</strong></td><td>${problem}</td></tr>
      </table>
    `;

    await transporter.sendMail({
      to: "storivakontakt@gmail.com",
      subject: `Nowe zgłoszenie naprawy drukarki — TSdruk (${name})`,
      html,
      attachments,
    });

    const newCookieValue = Buffer.from(JSON.stringify({ count: count + 1, lastReset })).toString("base64");

    const res = NextResponse.json({ success: true }, { headers: corsHeaders(origin) });
    res.cookies.set(COOKIE_NAME, newCookieValue, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
    });

    return res;
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500, headers: corsHeaders(origin) });
  }
}