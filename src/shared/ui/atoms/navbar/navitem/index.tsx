import React from "react"
import cn from "classnames"
import { ClassNameProps } from "@shared/lib"
import { Link } from "react-router-dom"

export type NavItemProps = {
  readonly label: string
  readonly icon: React.ReactNode
  readonly to: string
  readonly isHilight: boolean | undefined
} & ClassNameProps

export const NavItem = ({ label, to,icon, className, isHilight }: NavItemProps) => {
  return (
    <Link to={to} className={cn("flex opacity-40 gap-1.5 font-semibold hover:opacity-100 transition-opacity align-middle", className,{
      'opacity-100': isHilight
    })}>
      {icon}
      {label}
    </Link>
  )
}