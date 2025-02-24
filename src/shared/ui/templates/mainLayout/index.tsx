import { HTMLAttributes, PropsWithChildren } from 'react'
import cn from 'classnames'
import styles from './index.module.scss'
import { AsideBlock } from './asideBlock'

export type BaseLayoutProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const BaseLayout=({children}:BaseLayoutProps)=>{
  return(
    <div className={cn('', styles['display'])}>
      {/* <div className='row'> */}
        <aside className='w-100 justify-self-end mr-[100px]'>
          <AsideBlock />
        </aside>
        <main className={styles['center']}>
          {children}
        
        </main>
      {/* </div> */}
    </div>
  )
}