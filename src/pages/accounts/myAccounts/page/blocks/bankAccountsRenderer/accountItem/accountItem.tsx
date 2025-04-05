import { BankAccountType, CardCategory, CardType } from "@shared/api"
import { FormatCurrencyToSign } from "@shared/lib"
import { RectangleHorizontal } from "lucide-react"
import { useMemo } from "react"

export type AccountItemProps={
  readonly id: string
  readonly currencyType: string | undefined
  readonly balance: number
  readonly bankAccountType: BankAccountType
  readonly isFrozen: boolean
  readonly accountName: string | undefined
  readonly closeDateTime: string | undefined
  readonly cardNumber: string | undefined
  readonly cardCategory: CardCategory
  readonly cardType: CardType
}

export const AccountItem=({
  currencyType,
  balance,
  accountName,
  cardNumber,
  cardCategory,
  cardType,
  closeDateTime
}:AccountItemProps)=>{

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

  const cardTypeText=useMemo(()=>{
    switch(cardType){
      case CardType.CreditCard:
        return 'Кредитная'
      case CardType.DebitCard:
        return 'Дебетовая'
    }
  },[cardType])

  const currencySign=useMemo(()=>{
    return FormatCurrencyToSign(currencyType)
  },[currencyType])

  return(
    <div className="border rounded-md p-3">
      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <RectangleHorizontal size={40} strokeWidth={0.5} fill={cardFill} />
          <span className="font-semibold">E-{cardCategory}</span>
          {closeDateTime!=null && <span className="text-red font-semibold"> (счёт закрыт)</span>}
        </div>
        <div className="flex font-semibold items-center">
          {cardTypeText} {cardCategory} карта
        </div>
      </div>
      <div className="mt-4">
        <div className="text-lg font-semibold">{balance} {currencySign}</div>
        <div className="text-[16px] font-medium">
          {accountName}
        </div>
        <div className="text-[16px] font-medium">{cardNumber?.replace(/(\d{4})(\d{4})(\d{2})/, '$1 $2 $3')}</div>
      </div>
    </div>
  )
}