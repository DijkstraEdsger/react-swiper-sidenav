import { Variant } from 'Interfaces/SideDrawer'
import { useMemo } from 'react'
import { preProcessNavItems } from 'utils/functions'
import { NavItems } from './SideNav'

type SideNavProps = {
  navItems: NavItems
  variant: Variant
  hideBackdrop: boolean
  open: boolean
  spreadCssClasses: boolean
}

type SideNavReturn = {
  preProcessedNavItems: any[]
  showBackdrop: boolean
  openSideDrawer: boolean
}

const useSideNav = ({ navItems, variant, hideBackdrop, open, spreadCssClasses }: SideNavProps): SideNavReturn => {
  const preProcessedNavItems = useMemo(
    () => (navItems ? preProcessNavItems(navItems, spreadCssClasses) : []),
    [navItems, spreadCssClasses],
  )
  const showBackdrop = useMemo(() => !hideBackdrop && variant !== 'permanent', [hideBackdrop, variant])
  const openSideDrawer = useMemo(() => open || variant === 'permanent', [open, variant])

  return { preProcessedNavItems, showBackdrop, openSideDrawer }
}

export default useSideNav
