export interface INavItemProps {
  clicked: () => void
  children?: React.JSX.Element | string
  className: string
  itemProps?: React.JSX.ElementAttributesProperty
  hasRenderItem: boolean
  disableClose: boolean
  itemsClassName?: string
  hasSubMenu: boolean
}

export interface IMenuLinkItemProps {
  disableClose: boolean
  clicked: () => void
  children?: React.JSX.Element | string
  itemsClassName: string
  itemProps?: React.JSX.ElementAttributesProperty
}

export interface IRenderItemProps {
  disableClose: boolean
  clicked: () => void
  children?: React.JSX.Element | string
  itemProps?: React.JSX.ElementAttributesProperty
}

export interface ISliceItemProps {
  clicked: () => void
  children?: React.JSX.Element | string
  itemsClassName: string
  className: string
  itemProps?: React.JSX.ElementAttributesProperty
}
