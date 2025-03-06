import { CardCategory } from "@shared/api"
import { StringOrNull } from "@shared/lib"
import { CommonCard } from "@shared/ui"
import { CardItem } from "./cardItem"
import { CloseAccountButton } from "./blockAccountButton"
import { useMemo } from "react"
import { RectangleHorizontal } from "lucide-react"
import { DepositAccountButton } from "./depositAccountButton"
import { WithdrawAccountButton } from "./withdrawAccountButton"
import { Button } from "@shared/components"
import { GENERATE_BANK_ACCOUNT_PAYMENTS_HISTORY_PAGE_URL } from "@shared/config"
import { Link } from "react-router-dom"

export type CardBlockProps={
  readonly id: string
  readonly currencyType: StringOrNull
  readonly balance: number
  readonly isFrozen: boolean
  readonly accountName: StringOrNull
  readonly cardNumber: StringOrNull
  readonly cardCategory: CardCategory
}

export const CardBlock=({
  id,
  currencyType,
  balance,
  isFrozen,
  accountName,
  cardNumber,
  cardCategory
}: CardBlockProps)=>{

  const cardFill=useMemo(()=>{
    switch(cardCategory){
      case CardCategory.Black:
        return '#1E1E1E'
      case CardCategory.Gold:
        return '#FFD700'
      case CardCategory.Platinum:
        return '#C0C0C0'
    }
  },[cardCategory])

  const currencySign=useMemo(()=>{
    if(currencyType) return '₽'
    return '₽'
  },[currencyType])

  return(
    <CommonCard className="p-4 pb-3 mt-6">
      <div className="flex justify-between">
        <div className="text-xl font-bold">
          {accountName}
          {isFrozen===true && <span className="text-red"> (закрыт)</span>}
        </div>
        {isFrozen===false && <CloseAccountButton accountId={id} />}
      </div>
      <div className="grid grid-cols-10 mt-6">
        <CardItem accountName={accountName} cardCategory={cardCategory} cardNumber={cardNumber} />
      </div>
      <div className="bg-bgMain rounded-[12px] px-4 py-3 flex justify-between mt-7 mx-2">
        <div className="flex items-center gap-3">
          <RectangleHorizontal size={40} strokeWidth={0.5} fill={cardFill} />
          <span className="font-bold text-[25px]">{balance} {currencySign}</span>
        </div>
        {isFrozen===false &&
          <div className="flex gap-2">
            <WithdrawAccountButton accountId={id} balance={balance} />
            <DepositAccountButton accountId={id} />
          </div>
        }
      </div>
      <Link className="grid mt-4 w-100 mx-2" to={GENERATE_BANK_ACCOUNT_PAYMENTS_HISTORY_PAGE_URL(id)}>
        <Button variant={'main'}>
          Перейти к истории операций
        </Button>
      </Link>
    </CommonCard>
  )
}