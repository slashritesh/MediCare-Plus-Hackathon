import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

const MaxwidthWrapper = ({className,children}:{className:string,children:ReactNode}) => {
  return (
    <div className={cn("mx-20",className)}>
        {children}
    </div>
  )
}

export default MaxwidthWrapper