import React, { useEffect, useState } from 'react'
import SideDrawer from '../SideDrawer/SideDrawer'
import Backdrop from '../Backdrop/Backdrop'
import { ISideNavProps } from 'Interfaces/SideNav'
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
    dfs(navItems, 0, tree, -1, '')
  }

  const dfs = (navItem: any, currentNavItemsIndex: number, tree: any, parent: number, parentName: string) => {
    if (navItem.childrenItems) {
      const navItemsChildren: any[] = []
      tree.push(currentNavItemsIndex)

      navItem.childrenItems.forEach((navItemChild: any) => {
        let child = -1
        if (navItemChild.childrenItems) {
          child = tree.length
        }
        navItemsChildren.push({
          child: child,
          parent: currentNavItemsIndex,
          name: navItemChild.name,
          renderItem: navItemChild.renderItem,
          disableClose: navItemChild.disableClose,
          className: navItemChild.className || '',
          itemProps: navItemChild.itemProps,
        })
        dfs(navItemChild, tree.length, tree, currentNavItemsIndex, navItem.name)
      })

      tree[currentNavItemsIndex] = {
        parent: parent,
        current: currentNavItemsIndex,
        parentName: parentName,
        headName: navItem.name,
        posXIndex: currentNavItemsIndex,
        navItemsChildren: navItemsChildren,
        classes: navItem.classes,
      }
    }
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
