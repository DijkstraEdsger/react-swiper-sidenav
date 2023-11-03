export type Variant = 'temporary' | 'persistent' | 'permanent'
export type Placement = 'left' | 'right'

export interface ISideDrawerProps {
  navItems: never[]
  positions: string[]
  open: boolean
  clickedLink: any
  placement: Placement
  zIndex: any
  menuHead: React.JSX.Element
  variant: Variant
  style: React.CSSProperties
}
