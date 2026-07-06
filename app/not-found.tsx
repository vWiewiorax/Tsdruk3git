import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
        Błąd 404
      </p>

      <h1 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">
        Ta strona nie istnieje
      </h1>

      <p className="mt-6 max-w-xl text-lg text-gray-600">
        Nie mogę znaleźć strony, której szukasz. Może została przeniesiona,
        usunięta, albo adres zawiera literówkę.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/"
          className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          Wróć na stronę główną
        </Link>

        <Link
          href="/#kontakt"
          className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50"
        >
          Zgłoś usterkę
        </Link>
      </div>

      <div className="mt-16 flex items-center gap-2 text-sm text-gray-400">
        <span>TSdruk</span>
        <span>·</span>
        <a href="tel:796584933" className="hover:text-gray-600">
          796 584 933
        </a>
      </div>
    </main>
  );
}