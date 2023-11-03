import React from 'react'
import './BackArrow.scss'
import { IBackArrowProps } from 'Interfaces/BackArrow'

const BackArrow = ({ onClick, className = '', children }: IBackArrowProps) => {
  const item = (
    <a onClick={onClick} className={`BackArrow ${className}`}>
      {children}
    </a>
  )

  return <li>{item}</li>
}

export default BackArrow
