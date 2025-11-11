import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

const ShopBtn = ({text, className}: {text:string, className?:string}) => {
  return (
    <Button className={cn('rounded-full text-white font-semibold bg-red-500 hover:bg-red-600', className)}>{text}</Button>
  )
}

export default ShopBtn