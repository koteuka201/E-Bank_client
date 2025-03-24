import { LogOut } from "lucide-react"
import { useHandleClick } from "./useHandleClick"
import { useGetMyProfile } from "@entities/clients"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@shared/components"
import { useMemo } from "react"
import { UserRole } from "@shared/api"
import { ThemeToggle } from "@features/themeToggle"

export const LogOutButton=()=>{
  const handleClick=useHandleClick()

  const {data}=useGetMyProfile()

  const roleText=useMemo(()=>{
    switch(data?.role){
      case UserRole.Client:
        return 'Клиент'
      case UserRole.Employee:
        return 'Сотрудник'
    }
    return
  },[data?.role])

  return(
    <div className="flex gap-2 items-center">
      <ThemeToggle />
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="p-0 no-underline">
          <AccordionTrigger className="p-0 no-underline">{data?.userName}</AccordionTrigger>
          <AccordionContent className="p-0 no-underline text-center">
            <div>{data?.email}</div>
            <div>{roleText}</div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="cursor-pointer flex gap-1 font-semibold" onClick={handleClick}>
        <LogOut />
      </div>
    </div>
  )
}