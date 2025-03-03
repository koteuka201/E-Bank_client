import { AccountAndCard } from "@entities/accounts"
import { AccountItem } from "./accountItem/accountItem"

export type BankAccountsRendererProps={
  readonly accounts: AccountAndCard[]
}

export const BankAccountsRenderer=({accounts}:BankAccountsRendererProps)=>{
  
  if(accounts.length == 0){
    return(
      <div className="text-center font-semibold text-lg">
        У вас еще нет ни одного открытого продукта в этой категории.
        <span className="underline text-blue-400 cursor-pointer">Приступим?</span>
      </div>
    )
  }
  
  return(
    <div>
      {accounts.map((account)=>(
        <AccountItem account={account} />
      ))}
    </div>
  )
}