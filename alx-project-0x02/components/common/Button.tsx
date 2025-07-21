import { type ButtonProps } from '@/interfaces'
import React from 'react'

const Button:React.FC<ButtonProps> = ({size,shape}) => {
  return (
    <button className={`${size} ${shape} bg-amber-500 p-3.5 m-3`}>Button</button>
  )
}

export default Button