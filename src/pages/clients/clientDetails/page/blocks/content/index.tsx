import { UserRole } from "@shared/api"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Card } from "@shared/components"
import { formatDateToRussian } from "@shared/lib"
import { BlockUserButton } from "@widgets/users"
import { useMemo } from "react"
import { AccountsList } from "../accountsList"
import { CreditsList } from "../creditsList"

export type ContentProps={
  id: string
  email: string | undefined | null
  userName: string | undefined
  isManuallyBlocked: boolean
  role: UserRole
  patronymic: string | null | undefined
  birthDate: string | null | undefined
  phoneNumber: string | null | undefined
}

export const Content=({
  id,
  email,
  userName,
  isManuallyBlocked,
  role,
  birthDate,
  phoneNumber
}: ContentProps)=>{
  
  const roleText=useMemo(()=>{
    switch(role){
      case UserRole.Client:
        return 'Клиент'
      case UserRole.Employee:
        return 'Сотрудник'
    }
  },[role])

  return(
    <>
      <Card className="p-4 pb-3 mt-6 font-semibold">
        <div className="flex justify-between items-center">
          <span className="text-lg">
            {userName}
            <div className="inline-block rounded-lg text-[12px] bg-bgMain dark:bg-bgMainDark py-0.5 px-2.5 ms-2">{roleText}</div>
          </span>
          {isManuallyBlocked===false ? (
            <BlockUserButton id={id} />
          ) : (
            <span className="text-red">Заблокирован</span>
          )}
        </div>
        <div className="flex justify-between items-center">
          {email}
          <div>
            {phoneNumber!=undefined && <div>{phoneNumber}</div>}
            {birthDate!=undefined && <div>Дата рождения: {formatDateToRussian(birthDate, true)}</div>}
          </div>
        </div>
      </Card>
      {role===UserRole.Client &&
        <Card className="py-2 px-3 mt-4 bg-white">
          <Accordion type="single" defaultValue="item-1" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Дебетовые счета</AccordionTrigger>
            <AccordionContent>
              <AccountsList id={id} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Кредиты</AccordionTrigger>
            <AccordionContent>
              <CreditsList id={id} />
            </AccordionContent>
          </AccordionItem>
          </Accordion>
        </Card>
      }
    </>
  )
}