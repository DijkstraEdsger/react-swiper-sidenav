export interface INavItemProps {
  clicked: () => void
  children?: React.JSX.Element | string
  className: string
  itemProps?: React.HTMLAttributes<HTMLElement>
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
  itemProps?: React.HTMLAttributes<HTMLElement>
}

export interface IRenderItemProps {
  disableClose: boolean
  clicked: () => void
  children?: React.JSX.Element | string
  itemProps?: React.HTMLAttributes<HTMLElement>
}

export interface ISliceItemProps {
  clicked: () => void
  children?: React.JSX.Element | string
  itemsClassName: string
  className: string
  itemProps?: React.HTMLAttributes<HTMLElement>
}
