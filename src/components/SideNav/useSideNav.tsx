import { useMemo } from 'react'
import { convertMenuTreeToArray } from 'utils/functions'

const useSideNav = ({ navItems, variant, hideBackdrop, open }: any) => {
  const preProcessedNavItems = useMemo(() => (navItems ? convertMenuTreeToArray(navItems) : []), [navItems])
  const className = useMemo(() => (variant === 'permanent' ? 'permanentDisplay' : 'fixedDisplay'), [variant])
  const showBackdrop = useMemo(() => !hideBackdrop && variant !== 'permanent', [hideBackdrop, variant])
  const openSideDrawer = useMemo(() => open || variant === 'permanent', [open, variant])

  return { preProcessedNavItems, className, showBackdrop, openSideDrawer }
}

export default useSideNav
