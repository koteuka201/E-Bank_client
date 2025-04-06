import { useGetMyAccounts } from "@entities/accounts"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Button, Card } from "@shared/components"
import { Spinner } from "@shared/ui"
import { BankAccountsRenderer } from "../bankAccountsRenderer"
import { UseCreateDefaultConfigOrGetParsed, useSwitch } from "@shared/lib"

export const List=()=>{
  
  const [isOpen, setIsOpen]=useSwitch()
  const {config}=UseCreateDefaultConfigOrGetParsed()
  const {data, isError, isLoading, isFetching}=useGetMyAccounts({ accountsIds: !isOpen ? config.hidenAccountsId : [] })

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
          <Button variant={"main"} className="mb-2" onClick={()=>setIsOpen(!isOpen)}>
            {!isOpen ? 
              'Показывать скрытые аккаунты'
              : 'Не показывать скрытые аккаунты'
            }
          </Button>
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