import React from 'react'
import SideDrawer from '../SideDrawer/SideDrawer'
import Backdrop from '../Backdrop/Backdrop'
import { ISideNavProps } from 'Interfaces/SideNav'
import './SideNav.scss'
import useSideNav from './useSideNav'

const SideNav = ({
  navItems,
  onClose,
  open,
  zIndex,
  children,
  placement,
  hideBackdrop = false,
  variant = 'temporary',
  style = {},
  navProps,
  spreadCssClasses = true,
}: ISideNavProps) => {
  const { preProcessedNavItems, className, showBackdrop, openSideDrawer } = useSideNav({
    navItems,
    variant,
    hideBackdrop,
    open,
    spreadCssClasses,
  })

  return (
    <div className={className}>
      {showBackdrop && <Backdrop clicked={onClose} show={open} zIndex={zIndex} />}
      <SideDrawer
        open={openSideDrawer}
        navItems={preProcessedNavItems as never[]}
        clickedLink={variant === 'temporary' ? onClose : undefined}
        menuHead={children}
        placement={placement}
        zIndex={zIndex}
        variant={variant}
        style={style}
        navProps={navProps}
      />
    </div>
  )
}

export default SideNav
