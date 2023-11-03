import React from 'react'
import './BackArrow.scss'
import { IBackArrowProps } from 'Interfaces/BackArrow'

const BackArrow: React.FC<IBackArrowProps> = ({ onClick, className = '', children }) => (
  <li>
    <a onClick={onClick} className={`BackArrow ${className}`}>
      {children}
    </a>
  </li>
)

export default BackArrow
