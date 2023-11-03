import React from 'react'
import './NavItems.scss'
import { INavItemsProps } from 'Interfaces/NavItems'

const NavItems: React.FC<INavItemsProps> = ({ className = '', posX, children }) => {
  return (
    <ul className={`NavItems ${className}`} style={{ left: posX }}>
      {children}
    </ul>
  )
}

export default NavItems
