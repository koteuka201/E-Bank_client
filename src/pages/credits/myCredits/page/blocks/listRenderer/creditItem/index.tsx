import { TariffBrief } from "@shared/api"
import { useMemo } from "react"

export type CreditItemProps={
  readonly id: string
  readonly currencyType: string | undefined
  readonly isFrozen: boolean
  readonly balance: number
  readonly debt: number
  readonly tariff: TariffBrief
}

export const CreditItem=({
  currencyType,
  isFrozen,
  balance,
  debt,
  tariff
}:CreditItemProps)=>{
  
  const currencySign=useMemo(()=>{
    if(currencyType) return '₽'
    return '₽'
  },[currencyType])

  return(
    <div className="border rounded-md p-3 font-semibold">
      <div className="flex justify-between">
        <span>{tariff.name}{isFrozen === true && <span className="text-red"> (закрыт)</span>}</span>
        <span>Ставка: {tariff.interestRate}%</span>
      </div>
      <div className="flex justify-between mt-4">
        <span>Остаток долга {debt} {currencySign}</span>
        <span>{tariff.paymentType} платеж</span>
      </div>
      <div>Баланс кредита {balance} {currencySign}</div>

    </div>
  )
}