import React from 'react'
import './BackArrow.scss'
import { IBackArrowProps } from 'Interfaces/BackArrow'

const BackArrow: React.FC<IBackArrowProps> = ({ onClick, className = '', children, tabIndex }) => (
  <li>
    <a onClick={onClick} className={`BackArrow ${className}`} tabIndex={tabIndex}>
      {children}
    </a>
  </li>
)

export default BackArrow
