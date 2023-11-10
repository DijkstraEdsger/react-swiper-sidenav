import React from 'react'
import './NavItems.scss'
import { INavItemsProps } from 'Interfaces/NavItems'
import BackArrow from 'components/BackArrow/BackArrow'
import HeadItem from 'components/SideDrawer/HeadItem/HeadItem'
import NavItem from './NavItem/NavItem'
import useNavItems from './useNavItems'

const NavItems: React.FC<INavItemsProps> = ({
  className = '',
  posX,
  items,
  forward,
  backward,
  index,
  clickedLink,
  isDrawerOpen,
}) => {
  const { navClassName, tabIndex, getNavItemProps } = useNavItems({
    className,
    posX,
    isDrawerOpen,
    clickedLink,
    forward,
  })

  return (
    <ul className={navClassName} style={{ left: posX }} role='menu'>
      {items?.current !== 0 && (
        <BackArrow onClick={backward} className={items?.classes?.back} tabIndex={tabIndex}>
          {items?.parentName}
        </BackArrow>
      )}
      {index !== 0 && <HeadItem className={items?.classes?.head}>{items?.headName}</HeadItem>}
      {items?.navItemsChildren.map((navItem: any, i: number) => {
        return (
          <NavItem
            key={i + index}
            itemsClassName={items?.classes?.items}
            {...getNavItemProps(navItem)}
            itemProps={{ ...navItem.itemProps, tabIndex }}
          >
            {navItem.renderItem || navItem.name}
          </NavItem>
        )
      })}
    </ul>
  )
}

export default NavItems
