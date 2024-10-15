import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

const MaxWidthWarpper = ({children,className}:{children:ReactNode,className?:string}) => {
  return (
    <section className={cn(className,"mx-20")}>
      {children}  
    </section>
  )
}

export default MaxWidthWarpper