import { useMemo } from 'react'

type NavItemsProps = {
  className: string
  clickedLink: () => void
  forward: (child: number) => void
}

type NavItemsReturn = {
  navClassName: string
  getNavItemProps: (navItem: any) => any
}

const useNavItems = ({ clickedLink, forward, className }: NavItemsProps): NavItemsReturn => {
  const navClassName = useMemo(() => `NavItems ${className}`, [className])

  const getNavItemProps = (navItem: any) => {
    return {
      hasSubMenu: navItem.child !== -1,
      clicked: navItem.child === -1 ? clickedLink : () => forward(navItem.child),
      hasRenderItem: !!navItem.renderItem,
      itemProps: navItem.itemProps,
      disableClose: navItem.disableClose,
      className: navItem.className,
    }
  }

  return { navClassName, getNavItemProps }
}

export default useNavItems
