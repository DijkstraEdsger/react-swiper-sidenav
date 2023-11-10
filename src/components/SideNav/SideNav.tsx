import React, { useEffect, useState } from 'react'
import SideDrawer from '../SideDrawer/SideDrawer'
import Backdrop from '../Backdrop/Backdrop'
import { ISideNavProps } from 'Interfaces/SideNav'
import { menuObjectTreeToArray } from 'utils/functions'
import './SideNav.scss'

type PreProcessedNavItems = {
  preProcessedNavItems: any[]
}

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
}: ISideNavProps) => {
  const [state, setState] = useState<PreProcessedNavItems>({
    preProcessedNavItems: [],
  })

  useEffect(() => {
    if (navItems) {
      const preProcessedNavItems: any[] = []
      preProcessNavItems(preProcessedNavItems)

      setState({
        preProcessedNavItems: [...preProcessedNavItems],
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navItems])

  const preProcessNavItems = (tree: any) => {
    menuObjectTreeToArray(navItems, 0, tree, -1, '')
  }

  return (
    <div className={variant === 'permanent' ? 'permanentDisplay' : 'fixedDisplay'}>
      {!hideBackdrop && variant !== 'permanent' && <Backdrop clicked={onClose} show={open} zIndex={zIndex} />}
      <SideDrawer
        open={open || variant === 'permanent'}
        navItems={state.preProcessedNavItems as never[]}
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
