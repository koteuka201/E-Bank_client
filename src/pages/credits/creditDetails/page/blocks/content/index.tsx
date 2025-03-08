import { CommonCard } from "@shared/ui"
import { useMemo } from "react"
import { WithdrawCreditButton } from "../withdrawCreditButton"
import { DepositCreditButton } from "../depositCreditButton"
import { formatDateToRussian } from "@shared/lib"
import { CloseCreditButton } from "../closeCredit"

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
  paymentType
}:ContentProps)=>{

  const currencySign=useMemo(()=>{
    if(currencyType) return '₽'
    return '₽'
  },[currencyType])

  const dateText=useMemo(()=>{
    return formatDateToRussian(createDateTime, true)
  },[createDateTime])

  return(
    <CommonCard className="p-4 pb-3 mt-6 font-semibold ">
      <div className="flex justify-between">
        <span className="text-lg">{tariffName} {isFrozen === true && <span className="text-red">(закрыт)</span>}</span>
        <div className="rounded-lg bg-bgMain py-1 px-2.5">{interestRate}%</div>
      </div>
      <div className="inline-block rounded-lg text-sm bg-bgMain py-0.5 px-2.5">
        Взят {dateText}
      </div>
      <div className="flex justify-between mt-2">
        <div className="text-[16px]">Сумма кредита: {creditLimit} {currencySign}</div>
        <div className="text-gray">{paymentType} платеж</div>
      </div>
      <div className="flex justify-between text-gray-400 text-sm mt-2">
        <span>Уникальный номер кредитного счёта </span>
        <span>{accountNumber}</span>
      </div>
      <div className="bg-bgMain rounded-[12px] px-4 py-3 flex justify-between">
        <div className="text-lg">
          <div>Остаток долга: {debt} {currencySign}</div>
          <div className="mt-2">Баланс: {balance} {currencySign}</div>
        </div>
        <div className="grid">
          {isFrozen!==true &&
            <>
              <div className="flex gap-2">
                <WithdrawCreditButton creditId={id} balance={balance} />
                <DepositCreditButton creditId={id} />
              </div>
              <CloseCreditButton canBeClosed={debt===0} creditId={id} />
            </>
          }
          {/* roleCheck */}
        </div>
      </div>
    </CommonCard>
  )
}