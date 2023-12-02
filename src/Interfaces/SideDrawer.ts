export type Variant = 'temporary' | 'permanent'
export type Placement = 'left' | 'right'

export interface ISideDrawerProps {
  navItems: never[]
  open: boolean
  clickedLink: any
  placement: Placement
  zIndex: any
  menuHead: React.ReactNode
  style: React.CSSProperties
  navProps?: React.HTMLAttributes<HTMLElement>
}
