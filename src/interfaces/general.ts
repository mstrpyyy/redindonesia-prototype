export interface INavbarMenu {
  name: string,
  slug: string | null,
  type?: 'largeDropdown' | 'smallDropdown' | 'link'
  menu?: INavbarMenu[]
}