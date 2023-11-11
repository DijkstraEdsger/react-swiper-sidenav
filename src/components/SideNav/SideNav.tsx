import React from 'react'
import SideDrawer from '../SideDrawer/SideDrawer'
import Backdrop from '../Backdrop/Backdrop'
import './SideNav.scss'
import useSideNav from './useSideNav'

export type Variant = 'temporary' | 'persistent' | 'permanent'
export type Placement = 'left' | 'right'

export interface ISideNavProps {
  navItems: never[]
  onClose: () => void
  open: boolean
  zIndex: number
  children: React.JSX.Element
  placement: Placement
  hideBackdrop: boolean
  variant: Variant
  style: React.CSSProperties
  navProps: React.JSX.ElementAttributesProperty
  spreadCssClasses: boolean
}

const SideNav: React.FC<ISideNavProps> = ({
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
