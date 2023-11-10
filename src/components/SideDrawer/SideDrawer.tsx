import React from 'react'
import './SideDrawer.scss'
import NavItems from 'components/NavItems/NavItems'
import { ISideDrawerProps } from 'Interfaces/SideDrawer'
import useSideDrawer from './useSideDrawer'

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
  const { positions, className, cssPosition, slideForward, slideBackward } = useSideDrawer({
    navItems,
    variant,
    placement,
    open,
  })

  const getPreProcessedNavItems = () =>
    navItems?.map((itemsGroup: any, index) => {
      if (positions?.length > 0) {
        return (
          <NavItems
            posX={positions[itemsGroup.posXIndex]}
            key={index}
            className={itemsGroup.classes?.container}
            items={itemsGroup}
            forward={(child) => slideForward(index, child)}
            backward={() => slideBackward(itemsGroup?.parent, itemsGroup?.current)}
            index={index}
            clickedLink={clickedLink}
          />
        )
      }

      return null
    })

  return (
    <nav
      className={className}
      {...(navProps || {})}
      style={{
        zIndex: zIndex || 500,
        ...style,
        position: cssPosition,
      }}
    >
      {menuHead || null}
      {getPreProcessedNavItems()}
    </nav>
  )
}

export default SideDrawer
