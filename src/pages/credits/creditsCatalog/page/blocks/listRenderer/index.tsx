import { TariffInfo } from "@shared/api"
import { CreditItem } from "./creditItem"

export type ListRendererProps={
  credits: TariffInfo[]
}

export const ListRenderer=({credits}:ListRendererProps)=>{
  
  if(credits.length == 0){
    return(
    <div className="text-center font-semibold text-lg">
      Еще нет ни одного созданного кредита.
    </div>
    )
  }
  
  return(
    <div className="grid gap-1.5">
      {credits.map((credit, index)=>(
        <CreditItem
          key={index}
          id={credit.id}
          name={credit.name}
          creditLimit={credit.creditLimit}
          interestRate={credit.interestRate}
          minimumPayment={credit.minimumPayment}
          paymentType={credit.paymentType}
        />
      ))}
    </div>
  )
}