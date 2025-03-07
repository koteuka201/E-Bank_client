import { GetCreditButton } from "../../getCreditButton"

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
  creditLimit
}:CreditItemProps)=>{
  return(
    <div className="border rounded-md p-3 font-semibold">
      <div className="flex justify-between items-center">
        <span>{name}</span>
        <span className="rounded-lg bg-bgMain py-1 px-2.5">{interestRate}%</span>
      </div>
      <div className="flex justify-between items-center mt-3">
        <span>Кредитный лимит: {creditLimit} ₽</span>
        <span>{paymentType} платеж</span>
      </div>
      <div className="flex justify-end mt-3">
        <GetCreditButton creditLimit={creditLimit} id={id} />
        {/* roleCheck */}
      </div>
    </div>
  )
}