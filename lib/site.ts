export const COMPANY_NAME = 'TSdruk'
export const PHONE = '796 584 933'
export const EMAIL = 'tomasz.strzepka@gmail.com'
export const ADDRESS = 'Krzemienica 614, 37-127 Krzemienica'
export const HOURS_WEEKDAY = '8:00 - 16:00'
export const HOURS_SATURDAY = '10:00 - 14:00'

export const SITE_URL = 'https://www.tsdruk.pl'

export const SERVICE_BASE = 'Krzemienica koło Łańcuta'

export const SERVICE_AREA_CITIES = [
  'Rzeszów',
  'Łańcut',
  'Przeworsk',
  'Jarosław',
  'Przemyśl',
  'Leżajsk',
  'Lubaczów',
  'Nowa Dęba',
  'Mielec',
  'Tarnobrzeg',
  'Dębica',
  'Ropczyce',
  'Kolbuszowa',
  'Brzostek',
]

export const BRANDS = [
  'HP',
  'Canon',
  'Epson',
  'Brother',
  'Samsung',
  'Kyocera',
  'Ricoh',
  'Lexmark',
  'OKI',
  'Sharp',
  'Konica Minolta',
  'Xerox',
]

export interface NavLeaf {
  href: string
  label: string
}

export interface NavItem extends NavLeaf {
  children?: (NavLeaf & { children?: NavLeaf[] })[]
}

export const NAV_LINKS: NavItem[] = [
  { href: '/#o-mnie', label: 'O mnie' },
  { href: '/#uslugi', label: 'Usługi' },
  { href: '/serwis', label: 'Serwis' },
  { href: '/#cennik', label: 'Cennik' },
  { href: '/#galeria', label: 'Galeria' },
  { href: '/#opinie', label: 'Opinie' },
  { href: '/blog', label: 'Blog' },
  { href: '/#kontakt', label: 'Kontakt' },
]

export const FOOTER_LINKS: NavItem[] = [
  ...NAV_LINKS,
  { href: '/privacy', label: 'Polityka prywatności' },
]

export function citySlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/ł/g, 'l')
    .replace(/ś/g, 's')
    .replace(/[żź]/g, 'z')
    .replace(/ń/g, 'n')
    .replace(/ę/g, 'e')
    .replace(/ó/g, 'o')
    .replace(/ć/g, 'c')
    .replace(/ą/g, 'a')
    .replace(/\s+/g, '-')
}

export interface CityPage {
  slug: string
  name: string
  gen: string
  loc: string
}

export const CITY_PAGES: CityPage[] = [
  { slug: 'rzeszow', name: 'Rzeszów', gen: 'Rzeszowa', loc: 'Rzeszowie' },
  { slug: 'lancut', name: 'Łańcut', gen: 'Łańcuta', loc: 'Łańcucie' },
  { slug: 'przeworsk', name: 'Przeworsk', gen: 'Przeworska', loc: 'Przeworsku' },
  { slug: 'jaroslaw', name: 'Jarosław', gen: 'Jarosławia', loc: 'Jarosławiu' },
  { slug: 'przemysl', name: 'Przemyśl', gen: 'Przemyśla', loc: 'Przemyślu' },
  { slug: 'lezajsk', name: 'Leżajsk', gen: 'Leżajska', loc: 'Leżajsku' },
  { slug: 'lubaczow', name: 'Lubaczów', gen: 'Lubaczowa', loc: 'Lubaczowie' },
  { slug: 'nowa-deba', name: 'Nowa Dęba', gen: 'Nowej Dęby', loc: 'Nowej Dębie' },
  { slug: 'mielec', name: 'Mielec', gen: 'Mielca', loc: 'Mielcu' },
  { slug: 'tarnobrzeg', name: 'Tarnobrzeg', gen: 'Tarnobrzega', loc: 'Tarnobrzegu' },
  { slug: 'debica', name: 'Dębica', gen: 'Dębicy', loc: 'Dębicy' },
  { slug: 'ropczyce', name: 'Ropczyce', gen: 'Ropczyc', loc: 'Ropczycach' },
  { slug: 'kolbuszowa', name: 'Kolbuszowa', gen: 'Kolbuszowej', loc: 'Kolbuszowej' },
  { slug: 'brzostek', name: 'Brzostek', gen: 'Brzostka', loc: 'Brzostku' },
]