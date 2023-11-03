import React from 'react'
import './Backdrop.scss'
import { IBackDropProps } from 'Interfaces/BackDrop'

const BackDrop: React.FC<IBackDropProps> = ({ show, clicked, zIndex = 500 }) => {
  const classesBackdrop = ['Backdrop', show ? 'Visible' : 'Invisible']
  return <div className={classesBackdrop.join(' ')} onClick={clicked} style={{ zIndex }}></div>
}

export default BackDrop
