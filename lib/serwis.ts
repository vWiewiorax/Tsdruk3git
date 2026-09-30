export interface Brand {
  slug: string
  name: string
}

export const PRINTER_BRANDS: Brand[] = [
  { slug: 'ricoh', name: 'Ricoh' },
  { slug: 'sharp', name: 'Sharp' },
  { slug: 'panasonic', name: 'Panasonic' },
  { slug: 'oki', name: 'OKI' },
  { slug: 'canon', name: 'Canon' },
  { slug: 'konica-minolta', name: 'Konica Minolta' },
  { slug: 'samsung', name: 'Samsung' },
  { slug: 'kyocera', name: 'Kyocera' },
  { slug: 'xerox', name: 'Xerox' },
  { slug: 'brother', name: 'Brother' },
  { slug: 'epson', name: 'Epson' },
  { slug: 'hp', name: 'HP' },
]

export const COPIER_BRANDS: Brand[] = [
  { slug: 'canon', name: 'Canon' },
  { slug: 'konica-minolta', name: 'Konica Minolta' },
  { slug: 'sharp', name: 'Sharp' },
  { slug: 'kyocera', name: 'Kyocera' },
  { slug: 'hp', name: 'HP' },
  { slug: 'ricoh', name: 'Ricoh' },
  { slug: 'lexmark', name: 'Lexmark' },
  { slug: 'xerox', name: 'Xerox' },
  { slug: 'triumph-adler', name: 'Triumph-Adler' },
  { slug: 'brother', name: 'Brother' },
  { slug: 'samsung', name: 'Samsung' },
  { slug: 'develop', name: 'Develop' },
  { slug: 'olivetti', name: 'Olivetti' },
]

export type SerwisKind = 'drukarki' | 'kserokopiarki'

export const SERWIS_KINDS: Record<
  SerwisKind,
  { label: string; brands: Brand[]; deviceGenitive: string }
> = {
  drukarki: {
    label: 'Serwis drukarek',
    brands: PRINTER_BRANDS,
    deviceGenitive: 'drukarek',
  },
  kserokopiarki: {
    label: 'Serwis kserokopiarek',
    brands: COPIER_BRANDS,
    deviceGenitive: 'kserokopiarek',
  },
}

export interface SerwisSection {
  heading: string
  paragraphs: string[]
}

export interface SerwisConfig {
  kind: SerwisKind
  badge: string
  title: string
  subtitle: string
  benefitsTitle: string
  benefits: string[]
  sections: SerwisSection[]
  offerTitle: string
  offerList: string[]
  offerHighlight: string
  trustHeading: string
  trustParagraphs: string[]
  brandsTitle: string
  metaTitle: string
  metaDescription: string
}

export const SERWIS_DRUKARKI: SerwisConfig = {
  kind: 'drukarki',
  badge: 'Serwis drukarek',
  title: 'Serwis drukarek',
  subtitle:
    'Pogwarancyjna naprawa, konserwacja i przeglądy drukarek wszystkich marek. Szybka diagnostyka i naprawa w serwisie.',
  benefitsTitle: 'Naszym klientom zapewniam:',
  benefits: [
    'profesjonalny serwis pogwarancyjny drukarek,',
    'przeglądy okresowe i konserwacje,',
    'szybki czas reakcji na zgłoszenie serwisowe oraz krótki czas realizacji,',
    'naprawy w serwisie lub na miejscu u Klienta po wcześniejszym uzgodnieniu,',
    'urządzenie zastępcze na czas naprawy,',
    'pomoc i szkolenie w zakresie obsługi sprzętu,',
    'wyjątkowo atrakcyjne ceny w przypadku stałych umów serwisowych oraz stałej współpracy,',
    'doradztwo oraz pomoc w zakresie zakupu nowego sprzętu,',
    'pomoc w doborze i zamówieniu części zamiennych oraz materiałów eksploatacyjnych.',
  ],
  sections: [
    {
      heading: 'Profesjonalny serwis drukarek, skanerów i urządzeń wielofunkcyjnych',
      paragraphs: [
        'Jeśli szukasz sprawdzonego i szybkiego serwisu drukarek w okolicy, dobrze trafiłeś. Oferuję pełną pogwarancyjną obsługę serwisową obejmującą naprawy, konserwacje oraz przeglądy techniczne. Serwisuję drukarki atramentowe i laserowe, kserokopiarki, urządzenia wielofunkcyjne oraz skanery. Mocną stroną jest szybka reakcja na zgłoszenie, a naprawę wykonuję przede wszystkim w serwisie. W razie potrzeby odbieram sprzęt od Klienta po wcześniejszym uzgodnieniu i zapewniam urządzenie zastępcze na czas naprawy.',
      ],
    },
    {
      heading: 'Dlaczego warto wybrać mój serwis drukarek?',
      paragraphs: [
        'Moi Klienci mogą liczyć na fachową diagnozę, sprawną naprawę i pomoc w doborze części zamiennych oraz materiałów eksploatacyjnych. Dzięki dużemu doświadczeniu oraz nowoczesnym narzędziom serwisowym skutecznie eliminuję każdą usterkę, od drobnych awarii po skomplikowane uszkodzenia podzespołów. Regularnie wykonuję przeglądy i konserwacje, które znacząco przedłużają żywotność sprzętu biurowego i minimalizują ryzyko kosztownych napraw. Klienci biznesowi mogą liczyć na atrakcyjne warunki stałej współpracy oraz priorytetową obsługę.',
      ],
    },
    {
      heading: 'Serwis drukarek Łańcut, Rzeszów i okolice',
      paragraphs: [
        'Serwis mieści się w Krzemienicy koło Łańcuta, a dogodny dojazd sprawia, że oddanie sprzętu do serwisu jest wyjątkowo wygodne. Obsługuję jednak nie tylko najbliższą okolicę, ale także całe Podkarpacie, m.in.: Rzeszów, Łańcut, Przeworsk, Jarosław, Przemyśl, Leżajsk, Lubaczów, Nowa Dęba, Mielec, Tarnobrzeg, Dębica, Ropczyce, Kolbuszowa i Brzostek. Dojazd do Klienta jest możliwy w miarę możliwości, po wcześniejszym uzgodnieniu.',
      ],
    },
  ],
  offerTitle: 'Co zyskujesz, wybierając mój serwis drukarek?',
  offerList: [
    'Pogwarancyjne naprawy drukarek, skanerów, kopiarek i urządzeń wielofunkcyjnych.',
    'Szybką diagnostykę i natychmiastową reakcję na zgłoszenie serwisowe.',
    'Naprawy w serwisie lub na miejscu po uzgodnieniu, sprzęt zastępczy na czas naprawy.',
    'Doradztwo w zakresie obsługi i zakupu nowego sprzętu biurowego.',
    'Atrakcyjne warunki przy stałej współpracy i umowach serwisowych.',
  ],
  offerHighlight: '',
  trustHeading: 'Profesjonalizm i zaufanie Klientów',
  trustParagraphs: [
    'Serwis drukarek TSdruk to gwarancja jakości, terminowości i profesjonalnego podejścia. Każde zgłoszenie traktuję priorytetowo, a moim celem jest zapewnienie Klientom komfortu pracy i pełnej sprawności urządzeń biurowych. Dzięki doświadczeniu i indywidualnemu podejściu pomagam nie tylko w naprawach, ale również w wyborze optymalnych rozwiązań dla firm i użytkowników prywatnych.',
  ],
  brandsTitle: 'Zajmuję się także serwisem drukarek producentów:',
  metaTitle: 'Serwis drukarek, naprawa pogwarancyjna | Łańcut, Rzeszów',
  metaDescription:
    'Profesjonalny pogwarancyjny serwis drukarek atramentowych i laserowych: naprawy, przeglądy, konserwacje, możliwy dojazd do klienta po uzgodnieniu. HP, Canon, Epson, Brother, Kyocera, Ricoh i inne marki. Łańcut, Rzeszów i całe Podkarpacie.',
}

export const SERWIS_KSEROKOPIARKI: SerwisConfig = {
  kind: 'kserokopiarki',
  badge: 'Serwis kserokopiarek',
  title: 'Serwis kserokopiarek',
  subtitle:
    'Pogwarancyjna naprawa, konserwacja i wsparcie techniczne kserokopiarek oraz urządzeń wielofunkcyjnych dla firm, instytucji i klientów indywidualnych.',
  benefitsTitle: 'Naszym klientom zapewniam:',
  benefits: [
    'profesjonalny serwis pogwarancyjny kserokopiarek,',
    'przeglądy okresowe i konserwacje urządzeń,',
    'szybki czas reakcji na zgłoszenie serwisowe oraz krótkie terminy realizacji,',
    'naprawy w serwisie lub na miejscu u Klienta po wcześniejszym uzgodnieniu,',
    'urządzenie zastępcze na czas naprawy,',
    'pomoc i szkolenie w zakresie obsługi kserokopiarek,',
    'wyjątkowo atrakcyjne ceny w przypadku stałych umów serwisowych oraz długofalowej współpracy,',
    'doradztwo oraz pomoc w zakresie zakupu nowego sprzętu biurowego,',
    'pomoc w doborze i zamówieniu części zamiennych oraz materiałów eksploatacyjnych do każdej kserokopiarki.',
  ],
  sections: [
    {
      heading: 'Serwis kserokopiarek, naprawa, konserwacja i wsparcie techniczne',
      paragraphs: [
        'Mój serwis kserokopiarek oferuje pełną pogwarancyjną obsługę urządzeń biurowych. Zajmuję się naprawą, przeglądami oraz konserwacją sprzętu, co pozwala utrzymać go w doskonałej kondycji i uniknąć kosztownych awarii. Obsługuję nowoczesne urządzenia cyfrowe, a także starsze modele kserokopiarek, zapewniając pełną funkcjonalność w codziennej pracy biura. Moim priorytetem jest szybka reakcja na zgłoszenie serwisowe. Naprawę realizuję w serwisie, a w razie potrzeby, po wcześniejszym uzgodnieniu, odbieram sprzęt od Klienta i zapewniam urządzenie zastępcze.',
      ],
    },
    {
      heading: 'Dlaczego warto powierzyć mi serwis kserokopiarek?',
      paragraphs: [
        'Mam wieloletnie doświadczenie w serwisowaniu urządzeń biurowych oraz nowoczesne zaplecze techniczne, które umożliwia szybką i precyzyjną diagnozę usterek. Wykonuję regulacje i wymianę podzespołów, regenerację części oraz stosuję tylko sprawdzone materiały eksploatacyjne. Regularne przeglądy techniczne i konserwacje kserokopiarek pozwalają przedłużyć ich żywotność, zwiększyć wydajność i ograniczyć ryzyko kosztownych przestojów w pracy biura. Klientom biznesowym proponuję stałe umowy serwisowe, które gwarantują priorytetowe terminy obsługi, atrakcyjne ceny i indywidualne podejście.',
      ],
    },
    {
      heading: 'Serwis kserokopiarek Łańcut, Rzeszów i obsługa okolicznych miast',
      paragraphs: [
        'Siedziba serwisu znajduje się w Krzemienicy koło Łańcuta, a dogodny dojazd ułatwia przekazanie sprzętu. Obsługuję jednak nie tylko najbliższą okolicę, ale także całe Podkarpacie, m.in.: Rzeszów, Łańcut, Przeworsk, Jarosław, Przemyśl, Leżajsk, Lubaczów, Nowa Dęba, Mielec, Tarnobrzeg, Dębica, Ropczyce, Kolbuszowa i Brzostek. Dojazd do Klienta jest możliwy w miarę możliwości, po wcześniejszym uzgodnieniu.',
      ],
    },
  ],
  offerTitle: 'Moja oferta serwisowa obejmuje:',
  offerList: [
    'Pogwarancyjne naprawy kserokopiarek oraz urządzeń wielofunkcyjnych.',
    'Szybką diagnostykę i natychmiastową reakcję na zgłoszenia.',
    'Konserwacje, czyszczenie i regulację podzespołów.',
    'Montaż i wymianę części zamiennych oraz materiałów eksploatacyjnych.',
    'Sprzęt zastępczy na czas naprawy.',
    'Profesjonalne doradztwo i szkolenia w zakresie obsługi urządzeń.',
    'Atrakcyjne warunki cenowe dla Klientów ze stałą umową serwisową.',
  ],
  offerHighlight:
    'Naprawiam i konserwuję kserokopiarki firm: Canon, Konica Minolta, Sharp, Kyocera, HP, Ricoh, Lexmark, Xerox, Triumph-Adler, Brother.',
  trustHeading: 'Profesjonalizm i partnerskie podejście do Klienta',
  trustParagraphs: [
    'Serwis kserokopiarek TSdruk to gwarancja rzetelności, terminowości i fachowej pomocy. Zajmuję się serwisowaniem urządzeń biurowych od ponad 20 lat i nieustannie podnoszę swoje kwalifikacje, aby sprostać wymaganiom rynku i nowoczesnych technologii biurowych. Zaufanie Klientów to dla mnie priorytet, dlatego dbam nie tylko o skuteczną naprawę, ale również o doradztwo w wyborze najlepszych rozwiązań sprzętowych. Dzięki temu Twoje biuro może działać sprawnie i bez zakłóceń.',
    'Mój profesjonalny serwis kserokopiarek obsługuje urządzenia wielu znanych producentów, zapewniając kompleksową naprawę, konserwację i pełne wsparcie techniczne. Dzięki wieloletniemu doświadczeniu skutecznie serwisuję zarówno najnowsze modele, jak i starsze urządzenia, dbając o ich niezawodność i długą żywotność. Poniżej przedstawiam listę marek kserokopiarek, które naprawiam w ramach mojej oferty.',
  ],
  brandsTitle: 'Serwisuję kserokopiarki producentów:',
  metaTitle: 'Serwis kserokopiarek, naprawa, konserwacja, wsparcie | Łańcut, Rzeszów',
  metaDescription:
    'Kompleksowy pogwarancyjny serwis kserokopiarek dla firm i instytucji: naprawy, przeglądy, konserwacje, wymiana części, sprzęt zastępczy. Canon, Konica Minolta, Sharp, Kyocera, Ricoh i inne. Łańcut, Rzeszów, Podkarpacie.',
}

export const PRINTER_BRAND_ISSUES = [
  'zacięcia papieru oraz problemy z jego poborem,',
  'zużyte lub uszkodzone rolki podające i separatory,',
  'zatkane głowice drukujące i zeschnięty tusz (drukarki atramentowe),',
  'zużyty bęben, listwa laserowa lub jednostka utrwalania (drukarki laserowe),',
  'smugi, plamy i nierówny wydruk,',
  'komunikaty o błędach oraz problemy z komunikacją z komputerem,',
  'konfiguracja druku sieciowego i połączenia Wi-Fi.',
]

export const COPIER_BRAND_ISSUES = [
  'problemy z podawaniem i zacinaniem papieru,',
  'zużycie bębna, paska transferowego lub jednostki utrwalania,',
  'błędy systemowe i komunikaty serwisowe,',
  'smugi, smary i słaba jakość kopii,',
  'regulacja i kalibracja mechanizmów skanujących,',
  'wymiana materiałów eksploatacyjnych i części zamiennych,',
  'konfiguracja funkcji sieciowych i skanowania.',
]

export const SERVICE_AREA_CITIES =
  'Rzeszów, Łańcut, Przeworsk, Jarosław, Przemyśl, Leżajsk, Lubaczów, Nowa Dęba, Mielec, Tarnobrzeg, Dębica, Ropczyce, Kolbuszowa i Brzostek'
