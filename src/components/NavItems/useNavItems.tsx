import { INavItemProps } from 'Interfaces/NavItem'
import { useSideNavContext } from 'contexts/SideNavContext'
import { useMemo } from 'react'

type NavItemsProps = {
  className: string
  posX: string
  isDrawerOpen: boolean
  clickedLink: () => void
  forward: (child: number) => void
  backward: () => void
}

type NavItemsReturn = {
  navClassName: string
  tabIndex: number
  renderLink?: (props?: any) => React.JSX.Element
  getNavItemProps: (navItem: any) => any
  onKeyDownForward: (e: React.KeyboardEvent<HTMLLIElement>, child: number) => void
  onKeyDownBack: (e: React.KeyboardEvent<HTMLElement>) => void
  onKeyDownLink: (e: React.KeyboardEvent<HTMLLIElement>) => void
}

const useNavItems = ({
  clickedLink,
  forward,
  backward,
  className,
  posX,
  isDrawerOpen,
}: NavItemsProps): NavItemsReturn => {
  const navClassName = useMemo(() => `NavItems ${className}`, [className])
  const tabIndex = useMemo(() => (isDrawerOpen && posX === '0' ? 0 : -1), [isDrawerOpen, posX])
  const { renderLink } = useSideNavContext()

  const onKeyDownForward = (e: React.KeyboardEvent<HTMLLIElement>, child: number) => {
    const { key } = e

    if (key === 'Enter' || key === 'ArrowRight') {
      forward(child)
    }
  }

  const onKeyDownLink = (e: React.KeyboardEvent<HTMLLIElement>) => {
    const { key } = e

    if (key === 'Enter') {
      clickedLink()
    }
  }

  const onKeyDownBack = (e: React.KeyboardEvent<HTMLElement>) => {
    const { key } = e

    if (key === 'Enter' || key === 'ArrowLeft') {
      backward()
    }
  }

  const getNavItemProps = (navItem: any): INavItemProps => {
    return {
      hasSubMenu: navItem.child !== -1,
      clicked: navItem.child === -1 ? clickedLink : () => forward(navItem.child),
      hasRenderItem: !!navItem.renderItem,
      hasRenderLinkGlobal: !!renderLink,
      disableClose: navItem.disableClose,
      className: navItem.className,
    }
  }

  return { navClassName, tabIndex, renderLink, getNavItemProps, onKeyDownForward, onKeyDownBack, onKeyDownLink }
}

export default useNavItems
