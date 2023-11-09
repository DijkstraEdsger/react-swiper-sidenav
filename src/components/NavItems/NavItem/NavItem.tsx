import React from 'react'
import './NavItem.scss'
import { INavItemProps, IIconLinkItemProps, IRenderItemProps, ISliceItemProps } from 'Interfaces/NavItem'

const MenuItem = ({ disableClose, clickedLink, children, itemsClassName, itemProps }: IIconLinkItemProps) => (
  <a onClick={disableClose ? undefined : clickedLink} className={`MenuItem ${itemsClassName}`} {...(itemProps || {})}>
    <div>{children}</div>
  </a>
)

const RenderItem = ({ clicked, children, disableClose }: IRenderItemProps) => (
  <div role='button' onClick={disableClose ? undefined : clicked || undefined}>
    {children}
  </div>
)

const SliceMenuItem = ({ clicked, children, itemsClassName, className, itemProps }: ISliceItemProps) => (
  <button
    {...(itemProps || {})}
    onClick={clicked || undefined}
    className={`MenuItem RightArrow ${itemsClassName} ${className}`}
  >
    <div>{children}</div>
  </button>
)

const NavItem = ({
  child,
  clicked,
  clickedLink,
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
    <MenuItem
      disableClose={disableClose}
      clickedLink={clickedLink}
      itemsClassName={itemsClassName}
      itemProps={itemProps}
    >
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
