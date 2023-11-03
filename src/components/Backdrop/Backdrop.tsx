import React from 'react'
import './Backdrop.scss'
import { IBackDropProps } from 'Interfaces/BackDrop'

const BackDrop = ({ show, clicked, zIndex }: IBackDropProps) => {
  let classesBackdrop = ['Backdrop', 'Invisible']
  if (show) {
    classesBackdrop = ['Backdrop', 'Visible']
  }
  return <div className={classesBackdrop.join(' ')} onClick={clicked} style={{ zIndex: zIndex ? zIndex : 500 }}></div>
}

export default BackDrop
