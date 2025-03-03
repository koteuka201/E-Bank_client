import { useGetMyAccounts } from "@entities/accounts"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@shared/components"
import { CommonCard } from "@shared/ui"
import { BankAccountsRenderer } from "../bankAccountsRenderer"

export const List=()=>{
  
  const {data, isError}=useGetMyAccounts({userId: ''})

  if(isError || data?.creditCardBankAccounts == undefined || data?.debitCardBankAccounts == undefined){
    return(
      <div className="text-center font-semibold text-lg mt-10">Не удалось загрузить ваши счета. Перезагрузите страницу или попробуйте позже!</div>
    )
  }

  return(
    <CommonCard className="p-2 bg-white">
      <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Дебетовые продукты</AccordionTrigger>
        <AccordionContent>
          <BankAccountsRenderer accounts={data.debitCardBankAccounts} />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Кредитные продукты</AccordionTrigger>
        <AccordionContent>
          скоро
        </AccordionContent>
      </AccordionItem>
      </Accordion>
    </CommonCard>
  )
}