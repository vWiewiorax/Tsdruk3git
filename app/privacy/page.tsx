"use client"
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <header className="top">
        <div className="nav">
          <div className="brand">TSdruk</div>
          <Link className="back" href="/">
            ← Wróć do strony głównej
          </Link>
        </div>
      </header>

      <main>
        <span className="kicker">Prywatność</span>
        <h1>Polityka prywatności</h1>
        <p className="updated">Ostatnia aktualizacja: 6 lipca 2026</p>

        <section className="block">
          <h2>1. Administrator danych</h2>
          <p>
            Administratorem danych w rozumieniu RODO w odniesieniu do danych
            zbieranych za pośrednictwem strony <strong>tsdruk.pl</strong> jest
            Tomasz Strzępka, prowadzący działalność pod nazwą TSdruk, z
            siedzibą pod adresem Krzemienica 614, 37-127 Krzemienica. Kontakt
            w sprawach związanych z ochroną danych: telefonicznie pod numerem
            796 584 933 lub e-mailowo poprzez formularz kontaktowy dostępny na
            stronie.
          </p>
        </section>

        <section className="block">
          <h2>2. Jakie dane zbieramy</h2>
          <p>Dane osobowe przetwarzane są w dwóch przypadkach:</p>
          <ul>
            <li>
              <strong>Formularz zgłoszenia usterki</strong> — imię i
              nazwisko, numer telefonu, adres e-mail (opcjonalnie), model
              drukarki, opis problemu oraz ewentualne załączone zdjęcia lub
              pliki. Dane te są przetwarzane wyłącznie w celu kontaktu i
              realizacji usługi serwisowej.
            </li>
            <li>
              <strong>Analityka odwiedzin strony</strong> — poprzez usługę
              Vercel Web Analytics, opisaną szczegółowo poniżej.
            </li>
          </ul>
        </section>

        <section className="block">
          <h2>3. Vercel Web Analytics — co dokładnie gromadzi</h2>
          <p>
            Strona korzysta z narzędzia <strong>Vercel Web Analytics</strong>,
            dostarczanego przez Vercel Inc., w celu zbierania zagregowanych
            statystyk odwiedzin (np. liczby odsłon, popularnych podstron,
            źródeł ruchu). Poniżej znajduje się pełny zakres informacji, jakie
            to narzędzie może zapisywać przy każdym zdarzeniu (np. odsłonie
            strony).
          </p>

          <table>
            <tbody>
              <tr>
                <th>Zbierana wartość</th>
                <th>Przykład</th>
              </tr>
              <tr>
                <td>Znacznik czasu zdarzenia</td>
                <td>2026-07-06 09:06:30</td>
              </tr>
              <tr>
                <td>Adres URL odwiedzonej podstrony</td>
                <td>/cennik</td>
              </tr>
              <tr>
                <td>Ścieżka dynamiczna (wzorzec adresu)</td>
                <td>/blog/[slug]</td>
              </tr>
              <tr>
                <td>Strona odsyłająca (referrer)</td>
                <td>google.com</td>
              </tr>
              <tr>
                <td>Parametry zapytania (filtrowane)</td>
                <td>?ref=facebook</td>
              </tr>
              <tr>
                <td>Przybliżona geolokalizacja</td>
                <td>Polska, Podkarpackie, Rzeszów</td>
              </tr>
              <tr>
                <td>System operacyjny i wersja</td>
                <td>Android 14</td>
              </tr>
              <tr>
                <td>Przeglądarka i wersja</td>
                <td>Chrome 126</td>
              </tr>
              <tr>
                <td>Typ urządzenia</td>
                <td>Mobile / Desktop / Tablet</td>
              </tr>
              <tr>
                <td>Wersja skryptu Web Analytics</td>
                <td>1.x</td>
              </tr>
            </tbody>
          </table>

          <div className="note">
            Vercel Web Analytics nie wykorzystuje plików cookies. Odwiedzający
            jest identyfikowany za pomocą losowego skrótu (hasha)
            generowanego na podstawie przychodzącego żądania — hash ten jest
            ważny maksymalnie 24 godziny i jest automatycznie kasowany, więc
            nie pozwala śledzić tej samej osoby pomiędzy różnymi dniami ani
            pomiędzy różnymi stronami internetowymi.
          </div>

          <p>Najważniejsze zasady działania tego narzędzia:</p>
          <ul>
            <li>
              Dane są zbierane w formie <strong>zanonimizowanej i
              zagregowanej</strong> — Vercel deklaruje, że nie pozwalają one
              zidentyfikować ani ponownie zidentyfikować konkretnej osoby
              odwiedzającej stronę.
            </li>
            <li>
              Nie są zbierane trwałe identyfikatory pozwalające śledzić
              użytkownika między różnymi witrynami.
            </li>
            <li>
              Adres IP odwiedzającego nie jest zapisywany razem z danymi
              zdarzenia — na jego podstawie generowany jest jedynie
              tymczasowy, dobowy hash oraz przybliżona lokalizacja
              (kraj/region/miasto).
            </li>
            <li>
              Historia sesji nie jest przechowywana trwale — dane sesyjne są
              kasowane po 24 godzinach.
            </li>
            <li>
              Narzędzie nie liczy ruchu pochodzącego od botów i
              zautomatyzowanych procesów.
            </li>
          </ul>

          <p>
            Administrator serwisu nie ma dostępu do żadnych danych, które
            pozwalałyby zidentyfikować konkretną osobę odwiedzającą stronę —
            w panelu Vercel widoczne są wyłącznie zbiorcze statystyki (np.
            liczba odwiedzin danej podstrony, kraj/miasto odwiedzających, typ
            urządzenia), a nie dane pojedynczych osób.
          </p>

          <p>
            Szczegółowy, oficjalny opis zasad działania i zgodności z RODO
            tego narzędzia znajduje się w dokumentacji dostawcy:{" "}
            <a
              href="https://vercel.com/docs/analytics/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              vercel.com/docs/analytics/privacy-policy
            </a>
            . Ogólna polityka prywatności firmy Vercel Inc. dostępna jest pod
            adresem{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              vercel.com/legal/privacy-policy
            </a>
            .
          </p>
        </section>

        <section className="block">
          <h2>4. Cel i podstawa prawna przetwarzania</h2>
          <ul>
            <li>
              <strong>Formularz zgłoszenia usterki</strong> — podstawą
              prawną jest podjęcie działań przed zawarciem umowy oraz jej
              wykonanie (art. 6 ust. 1 lit. b RODO), a w zakresie danych
              kontaktowych podanych dobrowolnie — zgoda (art. 6 ust. 1 lit. a
              RODO).
            </li>
            <li>
              <strong>Analityka Vercel</strong> — podstawą prawną jest
              prawnie uzasadniony interes administratora (art. 6 ust. 1 lit. f
              RODO), polegający na poznaniu ruchu na stronie i poprawie jej
              działania, przy czym dane te mają charakter zanonimizowany i
              zagregowany.
            </li>
          </ul>
        </section>

        <section className="block">
          <h2>5. Okres przechowywania danych</h2>
          <ul>
            <li>
              Dane z formularza zgłoszeniowego przechowywane są przez czas
              niezbędny do realizacji naprawy oraz obsługi ewentualnej
              reklamacji, a następnie przez okres wynikający z przepisów
              podatkowych i cywilnych.
            </li>
            <li>
              Dane analityczne z Vercel Web Analytics przechowywane są w
              formie zagregowanej; dane sesyjne pozwalające na dobowe
              rozróżnienie odwiedzających są automatycznie usuwane po 24
              godzinach.
            </li>
          </ul>
        </section>

        <section className="block">
          <h2>6. Odbiorcy danych</h2>
          <p>
            Dane analityczne przetwarzane są przez Vercel Inc. (dostawcę
            infrastruktury hostingowej i narzędzia analitycznego), który w tym
            zakresie działa jako podmiot przetwarzający. Dane z formularza
            kontaktowego nie są przekazywane podmiotom trzecim, poza
            dostawcami usług niezbędnych do obsługi strony i poczty e-mail.
          </p>
        </section>

        <section className="block">
          <h2>7. Twoje prawa</h2>
          <p>Osobie, której dane dotyczą, przysługuje prawo do:</p>
          <ul>
            <li>dostępu do swoich danych oraz otrzymania ich kopii,</li>
            <li>sprostowania (poprawiania) danych,</li>
            <li>usunięcia danych lub ograniczenia ich przetwarzania,</li>
            <li>wniesienia sprzeciwu wobec przetwarzania,</li>
            <li>przenoszenia danych,</li>
            <li>
              wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych
              (UODO).
            </li>
          </ul>
          <p>
            W celu realizacji powyższych praw prosimy o kontakt telefoniczny
            lub e-mailowy podany na stronie głównej.
          </p>
        </section>

        <section className="block">
          <h2>8. Zmiany polityki prywatności</h2>
          <p>
            Niniejsza polityka może być okresowo aktualizowana, np. w związku
            ze zmianą przepisów prawa lub zakresu wykorzystywanych narzędzi.
            Aktualna wersja zawsze dostępna jest pod tym adresem.
          </p>
        </section>
      </main>

      <footer>
        TSdruk · © 2026 · Krzemienica 614, 37-127 Krzemienica ·{" "}
        <Link href="/">tsdruk.pl</Link>
      </footer>

      <style jsx global>{`
        :root {
          --ink: #12213a;
          --ink-soft: #4b5a72;
          --line: #e4e8ef;
          --bg: #ffffff;
          --bg-soft: #f6f8fb;
          --accent: #1f5eff;
          --accent-soft: #eaf0ff;
          --radius: 14px;
        }
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif;
          color: var(--ink);
          background: var(--bg);
          line-height: 1.65;
        }
        a {
          color: var(--accent);
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>

      <style jsx>{`
        header.top {
          position: sticky;
          top: 0;
          z-index: 10;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(6px);
          border-bottom: 1px solid var(--line);
        }
        .nav {
          max-width: 1080px;
          margin: 0 auto;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .brand {
          font-weight: 700;
          font-size: 1.05rem;
          letter-spacing: 0.2px;
        }
        .nav :global(.back) {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--ink-soft);
        }
        .nav :global(.back:hover) {
          color: var(--accent);
        }

        main {
          max-width: 840px;
          margin: 0 auto;
          padding: 56px 24px 96px;
        }

        .kicker {
          display: inline-block;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--accent);
          background: var(--accent-soft);
          padding: 4px 12px;
          border-radius: 999px;
          margin-bottom: 14px;
        }
        h1 {
          font-size: 2.1rem;
          margin: 0 0 10px;
          letter-spacing: -0.01em;
        }
        .updated {
          color: var(--ink-soft);
          font-size: 0.92rem;
          margin-bottom: 40px;
        }

        section.block {
          margin-bottom: 40px;
        }
        h2 {
          font-size: 1.25rem;
          margin: 0 0 12px;
          letter-spacing: -0.01em;
        }
        p {
          color: var(--ink-soft);
          margin: 0 0 14px;
        }
        ul {
          margin: 0 0 14px;
          padding-left: 20px;
          color: var(--ink-soft);
        }
        li {
          margin-bottom: 6px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          background: var(--bg-soft);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          overflow: hidden;
          margin-bottom: 16px;
          font-size: 0.93rem;
        }
        th,
        td {
          text-align: left;
          padding: 10px 14px;
          border-bottom: 1px solid var(--line);
        }
        th {
          background: #eef2f8;
          font-weight: 700;
          color: var(--ink);
        }
        tr:last-child td {
          border-bottom: none;
        }
        td {
          color: var(--ink-soft);
        }

        .note {
          border-left: 3px solid var(--accent);
          background: var(--accent-soft);
          padding: 14px 18px;
          border-radius: 0 10px 10px 0;
          font-size: 0.93rem;
          color: var(--ink);
          margin-bottom: 16px;
        }

        footer {
          border-top: 1px solid var(--line);
          padding: 28px 24px;
          text-align: center;
          color: var(--ink-soft);
          font-size: 0.85rem;
        }

        @media (max-width: 600px) {
          h1 {
            font-size: 1.7rem;
          }
          main {
            padding: 40px 18px 72px;
          }
        }
      `}</style>
    </>
  );
}