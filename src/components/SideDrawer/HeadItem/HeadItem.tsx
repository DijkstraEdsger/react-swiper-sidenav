import React from 'react'
import './HeadItem.scss'
import { IHeadItemProps } from 'Interfaces/HeadItem'

const HeadItem = ({ className = '', children }: IHeadItemProps) => {
  return (
    <li className={`HeadItem ${className}`}>
      <div>{children}</div>
    </li>
  )
}

export default HeadItem
