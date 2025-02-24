import cn from 'classnames'
import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

import { ClassNameProps } from '@shared/lib'

import styles from './index.module.scss'

export type CommonCardProps = PropsWithChildren<ClassNameProps & HTMLAttributes<HTMLDivElement>>

export const CommonCard = forwardRef<HTMLDivElement, CommonCardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div {...props} className={cn(className, styles['card'])} ref={ref}>
        {children}
      </div>
    )
  }
)
