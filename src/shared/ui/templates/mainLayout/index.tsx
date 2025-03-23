import { HTMLAttributes, PropsWithChildren, useEffect } from 'react'
import cn from 'classnames'
import styles from './index.module.scss'
import { AsideBlock } from './asideBlock'
import { LogOutButton } from '@features/logout'

export type BaseLayoutProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const BaseLayout=({children}:BaseLayoutProps)=>{

  const isDark =
    document.documentElement.classList.contains("dark") ||
      localStorage.getItem("theme") === "dark"

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [isDark])

  return(
    <div className={cn('', styles['display'])}>
        <aside className='w-100 justify-self-end mr-[90px]'>
          <AsideBlock />
        </aside>
        <main className=''>
          {children}        
        </main>
        <aside className='w-100 justify-self-start ml-[90px]'>
          <LogOutButton />
        </aside>
    </div>
  )
}