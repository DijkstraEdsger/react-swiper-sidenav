import React from 'react'
import './NavItems.scss'
import { INavItemsProps } from 'Interfaces/NavItems'

const NavItems = ({ className = '', posX, children }: INavItemsProps) => {
  return (
    <ul className={`NavItems ${className}`} style={{ left: posX }}>
      {children}
    </ul>
  )
}

export default NavItems
