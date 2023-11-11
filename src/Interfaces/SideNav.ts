import { Placement, Variant } from './SideDrawer'

export interface ISideNavProps {
  navItems: never[]
  onClose: () => void
  open: boolean
  zIndex: number
  children: React.ReactNode
  placement: Placement
  hideBackdrop: boolean
  variant: Variant
  style: React.CSSProperties
  navProps: React.JSX.ElementAttributesProperty
  spreadCssClasses: boolean
}
