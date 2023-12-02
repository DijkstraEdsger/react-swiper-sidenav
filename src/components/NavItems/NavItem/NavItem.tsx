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

const RenderItem = ({ clicked, children, disableClose, itemProps }: IRenderItemProps) => (
  <div role='menuitem' {...(itemProps || {})} onClick={disableClose ? undefined : clicked || undefined}>
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
  clicked,
  children,
  className,
  itemProps,
  hasRenderItem = false,
  disableClose = false,
  itemsClassName = '',
  hasSubMenu = false,
  renderLink,
}: INavItemProps) => {
  let newLink = null

  if (renderLink) {
    newLink = React.cloneElement(renderLink(itemProps), {
      onClick: clicked,
      className: `MenuItem ${itemsClassName} ${className}`,
      role: 'menuitem',
    })
  }

  let item = hasRenderItem ? (
    <RenderItem clicked={clicked} disableClose={disableClose} itemProps={itemProps}>
      {children}
    </RenderItem>
  ) : (
    newLink ?? (
      <MenuItem disableClose={disableClose} clicked={clicked} itemsClassName={itemsClassName} itemProps={itemProps}>
        {children}
      </MenuItem>
    )
  )

  if (hasSubMenu) {
    item = hasRenderItem ? (
      <RenderItem clicked={clicked} disableClose={disableClose} itemProps={itemProps}>
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
