import { AccountAndCard } from "@entities/accounts"

export type AccountItemProps={
  readonly account: AccountAndCard
}

export const AccountItem=({account}:AccountItemProps)=>{
  return(
    <div>
      {account.card.cardCategory}
    </div>
  )
}