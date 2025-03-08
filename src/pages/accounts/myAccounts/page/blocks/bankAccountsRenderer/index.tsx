import { AccountAndCard } from "@entities/accounts"
import { AccountItem } from "./accountItem/accountItem"
import { Link } from "react-router-dom"
import { GENERATE_BANK_ACCOUNT_PAGE_URL } from "@shared/config"

export type BankAccountsRendererProps={
  readonly accounts: AccountAndCard[]
}

export const BankAccountsRenderer=({accounts}:BankAccountsRendererProps)=>{
  
  if(accounts==undefined){
    return(
      <div 
        className="text-center font-semibold text-lg"
      >
        Не удалось загрузить ваши счета. Перезагрузите страницу или попробуйте позже!
      </div>
    )
  }

  if(accounts.length == 0){
    return(
      <div className="text-center font-semibold text-lg">
        У вас еще нет ни одного открытого продукта в этой категории.
      </div>
    )
  }
  
  return(
    <div className="grid gap-1.5">
      {accounts.map((account, index)=>(
        <Link key={index} to={GENERATE_BANK_ACCOUNT_PAGE_URL('debit',account.bankAccount.id)}>
          <AccountItem 
            id={account.bankAccount.id}
            currencyType={account.bankAccount.currencyType}
            balance={account.bankAccount.balance}
            bankAccountType={account.bankAccount.bankAccountType}
            isFrozen={account.bankAccount.isFrozen}
            accountName={account.bankAccount.accountName}
            cardNumber={account.card.cardNumber}
            cardCategory={account.card.cardCategory}
            cardType={account.card.cardType}
          />
        </Link>
      ))}
    </div>
  )
}