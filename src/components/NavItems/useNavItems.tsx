import { INavItemProps } from 'Interfaces/NavItem'
import { useMemo } from 'react'

type NavItemsProps = {
  className: string
  posX: string
  isDrawerOpen: boolean
  clickedLink: () => void
  forward: (child: number) => void
}

type NavItemsReturn = {
  navClassName: string
  tabIndex: number
  getNavItemProps: (navItem: any) => any
}

const useNavItems = ({ clickedLink, forward, className, posX, isDrawerOpen }: NavItemsProps): NavItemsReturn => {
  const navClassName = useMemo(() => `NavItems ${className}`, [className])
  const tabIndex = useMemo(() => (isDrawerOpen && posX === '0' ? 0 : -1), [isDrawerOpen, posX])

  const getNavItemProps = (navItem: any): INavItemProps => {
    return {
      hasSubMenu: navItem.child !== -1,
      clicked: navItem.child === -1 ? clickedLink : () => forward(navItem.child),
      hasRenderItem: !!navItem.renderItem,
      disableClose: navItem.disableClose,
      className: navItem.className,
    }
  }

  return { navClassName, tabIndex, getNavItemProps }
}

export default useNavItems
