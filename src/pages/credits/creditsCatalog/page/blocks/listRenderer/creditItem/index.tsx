import { useMemo } from "react"
import { GetCreditButton } from "../../getCreditButton"
import { PaymentType, UserRole } from "@shared/api"
import { useGetMyProfile } from "@entities/clients"

export type CreditItemProps={
  readonly id: string
  readonly name: string | undefined
  readonly interestRate: number
  readonly minimumPayment: number
  readonly creditLimit: number
  readonly paymentType: string
}

export const CreditItem=({
  id,
  name,
  interestRate,
  paymentType,
  creditLimit,
  minimumPayment
}:CreditItemProps)=>{

  const {data}=useGetMyProfile()

  const paymentTypeText=useMemo(()=>{
    switch(paymentType){
      case PaymentType.Daily:
        return 'Ежедневный платеж'
      case PaymentType.Weekly:
        return 'Еженедельный платеж'
      case PaymentType.Monthly:
        return 'Ежемесячный платеж'
    }
    return
  },[paymentType])

  return(
    <div className="border rounded-md p-3 font-semibold">
      <div className="flex justify-between items-center">
        <span>{name}</span>
        <span className="rounded-lg bg-bgMain dark:bg-bgMainDark py-1 px-2.5">{interestRate}%</span>
      </div>
      <div className="flex justify-between items-center mt-3">
        <span>Кредитный лимит: {creditLimit} ₽</span>
        <span>{paymentTypeText}</span>
      </div>
        <span>Минимальный платеж: {minimumPayment} ₽</span>
      <div className="flex justify-end mt-3">
        {data?.role===UserRole.Client && <GetCreditButton creditLimit={creditLimit} id={id} /> }
        {/* roleCheck */}
      </div>
    </div>
  )
}