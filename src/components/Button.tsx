import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Prop ={
    variant:'primary' | 'secondary'| 'text',
    children:React.ReactNode,
    iconAfter?:ReactNode,
}

const Button = ({variant, children, iconAfter}:Prop & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={twMerge('rounded-full px-8 py-4 text-sm bg-[#C1ED00] text-black font-semibold flex items-center gap-2',  variant === 'secondary' && 'bg-white text-black')}>
      {children}
      <span>{iconAfter}</span>
    </button>
  )
}

export default Button
