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

export interface IIconLinkItemProps {
  disableClose: boolean
  clickedLink: () => void
  children: React.JSX.Element | string
  itemsClassName: string
  itemProps: React.JSX.ElementAttributesProperty
}

export interface IRenderItemProps {
  disableClose: boolean
  clicked: () => void
  children: React.JSX.Element | string
}

export interface ISliceItemProps {
  clicked: () => void
  children: React.JSX.Element | string
  itemsClassName: string
  className: string
  itemProps: React.JSX.ElementAttributesProperty
}
