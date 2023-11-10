import React, { useEffect, useState } from 'react'
import './SideDrawer.scss'
import NavItems from 'components/NavItems/NavItems'
import NavItem from 'components/NavItems/NavItem/NavItem'
import BackArrow from 'components/BackArrow/BackArrow'
import HeadItem from './HeadItem/HeadItem'
import { ISideDrawerProps } from 'Interfaces/SideDrawer'

const SideDrawer = ({
  navItems,
  open,
  clickedLink,
  placement,
  zIndex,
  menuHead,
  variant = 'temporary',
  style = {},
  navProps,
}: ISideDrawerProps) => {
  const [state, setState] = useState({
    positions: new Array<string>(),
  })

  useEffect(() => {
    if (navItems) {
      const initialPositions = navItems.map((_: any, index: number) => (index === 0 ? '0' : '100%'))
      setState({ positions: initialPositions })
    }
  }, [navItems])

  const slideForwardHandler = (parent: number, child: number) => {
    const m = [...state.positions]
    m[parent] = '-100%'
    m[child] = '0'
    setState((prevState) => ({
      ...prevState,
      positions: m,
    }))
  }

  const slideBackward = (parent: number, current: number) => {
    const m = [...state.positions]
    m[parent] = '0'
    m[current] = '100%'
    setState((prevState) => ({
      ...prevState,
      positions: m,
    }))
  }

  const getPreProcessedNavItems = () =>
    navItems?.map((itemsGroup: any, index) => {
      if (state.positions && state.positions.length > 0) {
        return (
          <NavItems posX={state.positions[itemsGroup.posXIndex]} key={index} className={itemsGroup.classes?.container}>
            {itemsGroup.current ? (
              <BackArrow
                onClick={() => slideBackward(itemsGroup.parent, itemsGroup.current)}
                className={itemsGroup.classes?.back}
              >
                {itemsGroup.parentName}
              </BackArrow>
            ) : null}
            {index !== 0 ? <HeadItem className={itemsGroup.classes?.head}>{itemsGroup.headName}</HeadItem> : null}
            {itemsGroup.navItemsChildren.map((navItem: any, i: number) => {
              return (
                <NavItem
                  key={i + index}
                  child={navItem.child}
                  clicked={() => slideForwardHandler(index, navItem.child)}
                  clickedLink={clickedLink}
                  hasRenderItem={!!navItem.renderItem}
                  itemProps={navItem.itemProps}
                  disableClose={navItem.disableClose}
                  className={navItem.className}
                  itemsClassName={itemsGroup.classes?.items}
                >
                  {navItem.renderItem || navItem.name}
                </NavItem>
              )
            })}
          </NavItems>
        )
      }

      return null
    })

  const getClassesSideDrawer = () => {
    let classesSideDrawer = ['SideDrawer', 'SideDrawerLeft', 'CloseLeft']

    if (placement === 'right') {
      classesSideDrawer = ['SideDrawer', 'SideDrawerRight', 'CloseRight']
    }

    if (open) {
      classesSideDrawer = ['SideDrawer', 'SideDrawerLeft', 'Open']

      if (placement === 'right') {
        classesSideDrawer = ['SideDrawer', 'SideDrawerRight', 'Open']
      }
    }

    return classesSideDrawer
  }

  return (
    <nav
      className={getClassesSideDrawer().join(' ')}
      {...(navProps || {})}
      style={{
        zIndex: zIndex || 500,
        ...style,
        position: variant === 'permanent' ? 'inherit' : 'fixed',
      }}
    >
      {menuHead || null}
      {getPreProcessedNavItems()}
    </nav>
  )
}

export default SideDrawer
