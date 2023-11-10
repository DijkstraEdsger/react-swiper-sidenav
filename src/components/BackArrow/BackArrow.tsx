import React from 'react'
import './BackArrow.scss'
import { IBackArrowProps } from 'Interfaces/BackArrow'

const BackArrow: React.FC<IBackArrowProps> = ({ onClick, className = '', children, tabIndex, onKeyDown }) => (
  <li>
    <a onClick={onClick} className={`BackArrow ${className}`} tabIndex={tabIndex} onKeyDown={onKeyDown}>
      {children}
    </a>
  </li>
)

export default BackArrow
