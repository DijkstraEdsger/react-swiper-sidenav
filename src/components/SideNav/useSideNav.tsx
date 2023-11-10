import { Variant } from 'Interfaces/SideDrawer'
import { useMemo } from 'react'
import { convertMenuTreeToArray } from 'utils/functions'

type SideNavProps = {
  navItems: any[]
  variant: Variant
  hideBackdrop: boolean
  open: boolean
}

type SideNavReturn = {
  preProcessedNavItems: any[]
  className: string
  showBackdrop: boolean
  openSideDrawer: boolean
}

const useSideNav = ({ navItems, variant, hideBackdrop, open }: SideNavProps): SideNavReturn => {
  const preProcessedNavItems = useMemo(() => (navItems ? convertMenuTreeToArray(navItems) : []), [navItems])
  const className = useMemo(() => (variant === 'permanent' ? 'permanentDisplay' : 'fixedDisplay'), [variant])
  const showBackdrop = useMemo(() => !hideBackdrop && variant !== 'permanent', [hideBackdrop, variant])
  const openSideDrawer = useMemo(() => open || variant === 'permanent', [open, variant])

  return { preProcessedNavItems, className, showBackdrop, openSideDrawer }
}

export default useSideNav
