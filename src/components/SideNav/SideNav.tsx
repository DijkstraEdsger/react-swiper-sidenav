import React from 'react'
import SideDrawer from '../SideDrawer/SideDrawer'
import Backdrop from '../Backdrop/Backdrop'
import './SideNav.scss'
import useSideNav from './useSideNav'

export type Classes = {
  container?: string
  back?: string
  head?: string
  items?: string
}

export type NavItems = {
  name?: string
  childrenItems?: NavItems[]
  itemProps?: React.AllHTMLAttributes<HTMLAnchorElement | HTMLButtonElement | HTMLLIElement>
  renderItem?: React.ReactNode
  disableClose?: boolean
  className?: string
  classes?: Classes
}

export type Variant = 'temporary' | 'persistent' | 'permanent'
export type Placement = 'left' | 'right'

export interface ISideNavProps {
  navItems: NavItems
  onClose: () => void
  open?: boolean
  zIndex?: number
  children?: React.ReactNode
  placement?: Placement
  hideBackdrop?: boolean
  variant?: Variant
  style?: React.CSSProperties
  navProps?: React.HTMLAttributes<HTMLElement>
  spreadCssClasses?: boolean
}

const SideNav: React.FC<ISideNavProps> = ({
  navItems,
  onClose,
  open = false,
  zIndex = 500,
  children,
  placement = 'left',
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
