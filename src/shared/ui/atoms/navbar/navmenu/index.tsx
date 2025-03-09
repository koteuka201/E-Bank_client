import cn from "classnames"
import { useLocation } from "react-router-dom"
import { House, CreditCard,SquareChartGantt, UserCog, Users } from "lucide-react"
import { ClassNameProps } from "@shared/lib"
import { CATALOG_PAGE_URL, CLIENTS_PAGE_URL, CREDITS_CATALOG_PAGE_URL, MY_BANK_ACCOUNTS_PAGE_URL, MY_CREDITS_PAGE_URL, STAFF_PAGE_URL, WELCOME_PAGE_URL } from "@shared/config"

import { NavItem } from "../navitem"
import { useGetMyProfile } from "@entities/clients"
import { UserRole } from "@shared/api"



export type NavMenuProps=ClassNameProps

export const NavMenu=({className}: NavMenuProps)=>{
  const location=useLocation()
  const {data}=useGetMyProfile()
  
  return (
    <nav className={cn("flex flex-col gap-5 w-100 mt-[50px] ps-[2px]", className)}>
      <NavItem label='Главная' to={WELCOME_PAGE_URL} icon={<House size={22} />} isHighLight={location.pathname==WELCOME_PAGE_URL} />
      {data?.role===UserRole.Client ? (
        <>
          <NavItem label='Счета' to={MY_BANK_ACCOUNTS_PAGE_URL} icon={<CreditCard size={22} />} isHighLight={location.pathname==MY_BANK_ACCOUNTS_PAGE_URL} />
          <NavItem label='Кредиты' to={MY_CREDITS_PAGE_URL} icon={<SquareChartGantt size={22} />} isHighLight={location.pathname==MY_CREDITS_PAGE_URL} />
        </>
      ) : (
        <>
          <NavItem label='Кредиты' to={CREDITS_CATALOG_PAGE_URL} icon={<SquareChartGantt size={22} />} isHighLight={location.pathname==CATALOG_PAGE_URL} />
          <NavItem label='Клиенты' to={CLIENTS_PAGE_URL} icon={<Users size={22} />} isHighLight={location.pathname==CLIENTS_PAGE_URL} />
          <NavItem label='Сотрудники' to={STAFF_PAGE_URL} icon={<UserCog size={22} />} isHighLight={location.pathname==STAFF_PAGE_URL} />
        </>
      )}
      
    </nav>
  )
}