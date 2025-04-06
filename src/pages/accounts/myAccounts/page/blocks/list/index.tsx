import { useGetMyAccounts } from "@entities/accounts"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Card } from "@shared/components"
import { Spinner } from "@shared/ui"
import { BankAccountsRenderer } from "../bankAccountsRenderer"

export const List=()=>{
  
  const {data, isError, isLoading, isFetching}=useGetMyAccounts()

  if(isLoading || isFetching){
    return(
      <div className="flex justify-center mt-10">
        <Spinner />
      </div>
    )
  }

  if(isError || data=== undefined){
    return(
      <div className="text-center font-semibold text-lg mt-10">Не удалось загрузить ваши счета. Перезагрузите страницу или попробуйте позже!</div>
    )
  }

  return(
    <Card className="py-2 px-3 mt-4">
      <Accordion type="single" defaultValue="item-1" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Дебетовые продукты</AccordionTrigger>
        <AccordionContent>
          <BankAccountsRenderer accounts={data?.cardBankAccounts} />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Кредитные продукты</AccordionTrigger>
        <AccordionContent>
          В разработке
        </AccordionContent>
      </AccordionItem>
      </Accordion>
    </Card>
  )
}