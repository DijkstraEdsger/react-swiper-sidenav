import React from 'react'
import SideDrawer from '../SideDrawer/SideDrawer'
import Backdrop from '../Backdrop/Backdrop'
import useSideNav from './useSideNav'
import { SideNavProvider } from 'contexts/SideNavContext'

export type Classes = {
  container?: string
  back?: string
  head?: string
  items?: string
}

export type NavItems = {
  name?: string
  childrenItems?: NavItems[]
  itemProps?: React.AllHTMLAttributes<HTMLAnchorElement | HTMLButtonElement | HTMLLIElement> | any
  renderItem?: React.ReactNode
  disableClose?: boolean
  className?: string
  classes?: Classes
}

export type Variant = 'temporary' | 'permanent'
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
  renderLink?: (props: any) => React.JSX.Element
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
  renderLink,
}: ISideNavProps) => {
  const { preProcessedNavItems, showBackdrop, openSideDrawer } = useSideNav({
    navItems,
    variant,
    hideBackdrop,
    open,
    spreadCssClasses,
  })

  return (
    <SideNavProvider
      value={{
        renderLink,
      }}
    >
      <div>
        {showBackdrop && <Backdrop clicked={onClose} show={open} zIndex={zIndex} />}
        <SideDrawer
          open={openSideDrawer}
          navItems={preProcessedNavItems as never[]}
          clickedLink={variant === 'temporary' ? onClose : () => {}}
          menuHead={children}
          placement={placement}
          zIndex={zIndex}
          style={style}
          navProps={navProps}
        />
      </div>
    </SideNavProvider>
  )
}

export default SideNav
