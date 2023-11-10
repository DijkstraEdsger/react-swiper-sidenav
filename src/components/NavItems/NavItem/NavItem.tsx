import React from 'react'
import './NavItem.scss'
import { INavItemProps, IMenuLinkItemProps, IRenderItemProps, ISliceItemProps } from 'Interfaces/NavItem'

const MenuItem = ({ disableClose, clicked, children, itemsClassName, itemProps }: IMenuLinkItemProps) => (
  <a
    onClick={disableClose ? undefined : clicked}
    className={`MenuItem ${itemsClassName}`}
    {...(itemProps || {})}
    role='menuitem'
  >
    <div>{children}</div>
  </a>
)

const RenderItem = ({ clicked, children, disableClose }: IRenderItemProps) => (
  <div role='menuitem' onClick={disableClose ? undefined : clicked || undefined}>
    {children}
  </div>
)

const SliceMenuItem = ({ clicked, children, itemsClassName, className, itemProps }: ISliceItemProps) => (
  <div
    role='menuitem'
    aria-haspopup='true'
    {...(itemProps || {})}
    onClick={clicked || undefined}
    className={`MenuItem RightArrow ${itemsClassName} ${className}`}
  >
    <div>{children}</div>
  </div>
)

const NavItem = ({
  child,
  clicked,
  // clickedLink,
  children,
  className,
  itemProps,
  hasRenderItem = false,
  disableClose = false,
  itemsClassName = '',
}: INavItemProps) => {
  let item = hasRenderItem ? (
    <RenderItem clicked={clicked} disableClose={disableClose}>
      {children}
    </RenderItem>
  ) : (
    <MenuItem disableClose={disableClose} clicked={clicked} itemsClassName={itemsClassName} itemProps={itemProps}>
      {children}
    </MenuItem>
  )

  if (child !== -1) {
    item = hasRenderItem ? (
      <RenderItem clicked={clicked} disableClose={disableClose}>
        {children}
      </RenderItem>
    ) : (
      <SliceMenuItem clicked={clicked} itemsClassName={itemsClassName} className={className} itemProps={itemProps}>
        {children}
      </SliceMenuItem>
    )
  }

  return <li className='NavItem'>{item}</li>
}

export default NavItem
