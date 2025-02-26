import { HTMLAttributes, PropsWithChildren } from 'react'
import cn from 'classnames'
import styles from './index.module.scss'
import { AsideBlock } from './asideBlock'
import { LogOutButton } from '@features/logout'

export type BaseLayoutProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const BaseLayout=({children}:BaseLayoutProps)=>{
  return(
    <div className={cn('', styles['display'])}>
        <aside className='w-100 justify-self-end mr-[90px]'>
          <AsideBlock />
        </aside>
        <main>
          {children}        
        </main>
        <aside className='w-100 justify-self-start ml-[90px]'>
          <LogOutButton />
        </aside>
    </div>
  )
}