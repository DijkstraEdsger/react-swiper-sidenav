import React from 'react'
import './NavItems.scss'
import { INavItemsProps } from 'Interfaces/NavItems'
import BackArrow from 'components/BackArrow/BackArrow'
import HeadItem from 'components/SideDrawer/HeadItem/HeadItem'
import NavItem from './NavItem/NavItem'
import useNavItems from './useNavItems'
import { INavItemProps } from 'Interfaces/NavItem'

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
  const { navClassName, tabIndex, renderLink, getNavItemProps, onKeyDownLink, onKeyDownForward, onKeyDownBack } =
    useNavItems({
      className,
      posX,
      isDrawerOpen,
      clickedLink,
      forward,
      backward,
    })

  return (
    <ul className={navClassName} style={{ left: posX }} role='menu'>
      {items?.current !== 0 && (
        <BackArrow onClick={backward} className={items?.classes?.back} tabIndex={tabIndex} onKeyDown={onKeyDownBack}>
          {items?.parentName}
        </BackArrow>
      )}
      {index !== 0 && <HeadItem className={items?.classes?.head}>{items?.headName}</HeadItem>}
      {items?.navItemsChildren.map((navItem: any, i: number) => {
        const navItemProps: INavItemProps = getNavItemProps(navItem)
        navItemProps.itemProps = {
          ...navItem.itemProps,
          tabIndex,
          onKeyDown:
            navItem.child === -1
              ? onKeyDownLink
              : (e: React.KeyboardEvent<HTMLLIElement>) => onKeyDownForward(e, navItem.child),
        }

        return (
          <NavItem key={i + index} itemsClassName={items?.classes?.items} {...navItemProps} renderLink={renderLink}>
            {navItem.renderItem || (navItemProps.itemProps?.children ?? navItem.name)}
          </NavItem>
        )
      })}
    </ul>
  )
}

export default NavItems
