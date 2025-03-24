import { useMemo } from "react"
import { WithdrawCreditButton } from "../withdrawCreditButton"
import { DepositCreditButton } from "../depositCreditButton"
import { formatDateToRussian } from "@shared/lib"
import { CloseCreditButton } from "../closeCredit"
import { PaymentType, UserRole } from "@shared/api"
import { useGetMyProfile } from "@entities/clients"
import { Card } from "@shared/components"

export type ContentProps={
  readonly id: string
  readonly createDateTime: string
  readonly accountNumber: string
  readonly isFrozen: boolean
  readonly currencyType: string | undefined
  readonly balance: number
  readonly debt: number
  readonly creditLimit: number
  readonly minimumPayment: number
  readonly tariffName: string | undefined
  readonly interestRate: number
  readonly paymentType: string
}

export const Content=({
  id,
  createDateTime,
  accountNumber,
  isFrozen,
  currencyType,
  balance,
  debt,
  creditLimit,
  tariffName,
  interestRate,
  paymentType,
  minimumPayment
}:ContentProps)=>{

  const {data}=useGetMyProfile()

  const currencySign=useMemo(()=>{
    if(currencyType) return '₽'
    return '₽'
  },[currencyType])

  const dateText=useMemo(()=>{
    return formatDateToRussian(createDateTime, true)
  },[createDateTime])

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
    <Card className="p-4 pb-3 mt-6 font-semibold ">
      <div className="flex justify-between">
        <span className="text-lg">{tariffName} {isFrozen === true && <span className="text-red">(закрыт)</span>}</span>
        <div className="rounded-lg bg-bgMain dark:bg-bgMainDark py-1 px-2.5">{interestRate}%</div>
      </div>
      <div className="inline-block rounded-lg text-sm bg-bgMain py-0.5 px-2.5">
        Взят {dateText}
      </div>
      <div className="flex justify-between mt-2">
        <div className="text-[16px]">Кредитный лимит: {creditLimit} {currencySign}</div>
        <div className="text-gray">{paymentTypeText}</div>
      </div>
      <div className="flex justify-between text-gray-400 text-sm mt-2">
        <span>Название кредитного счёта </span>
        <span>{accountNumber}</span>
      </div>
      <div className="bg-bgMain rounded-[12px] px-4 py-3 flex justify-between">
        <div className="text-lg">
          <div>Остаток долга: {debt} {currencySign}</div>
          <div className="mt-2">Баланс: {balance} {currencySign}</div>
          <div className="mt-2">Мин. платеж: {minimumPayment} {currencySign}</div>
        </div>
        <div className="grid">
          {isFrozen!==true && data?.role===UserRole.Client &&
            <>
              <div className="flex gap-2">
                <WithdrawCreditButton creditId={id} balance={balance} />
                <DepositCreditButton creditId={id} />
              </div>
              <CloseCreditButton canBeClosed={debt===0} creditId={id} />
            </>
          }
        </div>
      </div>
    </Card>
  )
}