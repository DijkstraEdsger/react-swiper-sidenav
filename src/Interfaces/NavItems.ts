export interface INavItemsProps {
  className: string
  posX: string
  items: any
  forward: (index: number) => void
  backward: () => void
  index: number
  clickedLink: () => void
  isDrawerOpen: boolean
}
