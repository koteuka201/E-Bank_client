import { Credit } from "@shared/api"
import { Link } from "react-router-dom"
import { CreditItem } from "./creditItem"
import { GENERATE_BANK_CREDIT_DEATILS_PAGE_URL } from "@shared/config"

export type ListRendererProps={
  readonly credits: Credit[]
}

export const ListRenderer=({credits}:ListRendererProps)=>{
  
  if(credits.length == 0){
    return(
    <div className="text-center font-semibold text-lg">
      У вас еще нет ни одного оформленного кредита.
    </div>
    )
  }

  return(
    <div className="grid gap-1.5">
      {credits.map((credit, index)=>(
        <Link key={index} to={GENERATE_BANK_CREDIT_DEATILS_PAGE_URL(credit.id)}>
          <CreditItem
            id={credit.id}
            currencyType={credit.currencyType}
            isFrozen={credit.isFrozen} 
            balance={credit.balance} 
            debt={credit.debt} 
            tariff={credit.tariff}
          />
        </Link>
      ))}
    </div>
  )
}