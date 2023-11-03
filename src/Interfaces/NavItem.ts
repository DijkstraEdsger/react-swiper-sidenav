export interface INavItemProps {
  child: number
  clicked: () => void
  clickedLink: () => void
  children: React.JSX.Element | string
  className: string
  itemProps: React.JSX.ElementAttributesProperty
  hasRenderItem: boolean
  disableClose: boolean
  itemsClassName: string
}
