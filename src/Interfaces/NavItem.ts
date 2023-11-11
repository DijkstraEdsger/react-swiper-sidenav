export interface INavItemProps {
  clicked: () => void
  children: React.ReactNode
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
  children: React.ReactNode
  itemsClassName: string
  itemProps?: React.HTMLAttributes<HTMLElement>
}

export interface IRenderItemProps {
  disableClose: boolean
  clicked: () => void
  children: React.ReactNode
  itemProps?: React.HTMLAttributes<HTMLElement>
}

export interface ISliceItemProps {
  clicked: () => void
  children: React.ReactNode
  itemsClassName: string
  className: string
  itemProps?: React.HTMLAttributes<HTMLElement>
}
