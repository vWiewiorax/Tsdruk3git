export const COMPANY_NAME = 'TSdruk'
export const PHONE = '796 584 933'
export const EMAIL = 'tomasz.strzepka@gmail.com'
export const ADDRESS = 'Krzemienica 614, 37-127 Krzemienica'
export const HOURS_WEEKDAY = '8:00 – 16:00'
export const HOURS_SATURDAY = '10:00 – 14:00'

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
  { href: '/#cennik', label: 'Cennik' },
  { href: '/#galeria', label: 'Galeria' },
  { href: '/#opinie', label: 'Opinie' },
  { href: '/#kontakt', label: 'Kontakt' },
]

export const FOOTER_LINKS: NavItem[] = [
  ...NAV_LINKS,
  { href: '/privacy', label: 'Polityka prywatności' },
]
