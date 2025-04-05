import { useMemo } from "react"
import { ArrowBigLeft, ArrowBigRight, Landmark } from "lucide-react"
import { BankAccountOperationInitiator, BankAccountOperationStatus, BankAccountOperationType } from "@shared/api"
import { formatDateToRussian, FormatInitiatorToRus, FormatOperationTypeToRus } from "@shared/lib"
import { IconCircle } from "./iconCircle"

export type PaymentItemProp = {
  readonly bankAccountOperationType: BankAccountOperationType
  readonly operatingMoney: number
  readonly currentBalance: number
  readonly previousBalance: number
  readonly operationDateTime: string
  readonly bankAccountOperationInitiator: BankAccountOperationInitiator
  readonly bankAccountOperationStatus: BankAccountOperationStatus
  readonly bankAccountId: string
  readonly userId: string
}

export const PaymentItem=({
  bankAccountOperationType,
  operatingMoney,
  currentBalance, 
  previousBalance, 
  operationDateTime, 
  bankAccountOperationInitiator, 
  bankAccountOperationStatus, 
}:PaymentItemProp)=>{

  const date=useMemo(()=>{
    if(!operationDateTime) return

    return formatDateToRussian(operationDateTime)
  },[operationDateTime])

  const iconColor=useMemo(()=>{
    switch(bankAccountOperationStatus){
      case BankAccountOperationStatus.Success:
        return 'bg-main'
      case BankAccountOperationStatus.Reject:
        return 'bg-red'
    }
  },[bankAccountOperationStatus])
  
  const operationInitiator=useMemo(()=>{
    return FormatInitiatorToRus(bankAccountOperationInitiator)
  },[bankAccountOperationInitiator])

  const operationTypeIcon=useMemo(()=>{
    switch(bankAccountOperationType){
      case BankAccountOperationType.LoanRepayment:
        return <IconCircle icon={<Landmark size={20} strokeWidth={1.5} />} color={iconColor} />
      case BankAccountOperationType.Replenishment:
        return <IconCircle icon={<ArrowBigLeft fill="white" strokeWidth={0} size={26} />} color={iconColor} />
      case BankAccountOperationType.Withdrawal:
        return <IconCircle icon={<ArrowBigRight fill="white" strokeWidth={0} size={26} />} color={iconColor} />
    }
  },[iconColor,bankAccountOperationType])

  const operationTypeText=useMemo(()=>{
    return FormatOperationTypeToRus(bankAccountOperationType)
  },[bankAccountOperationType])

  const operationMoneyText=useMemo(()=>{
    switch(bankAccountOperationType){
      case BankAccountOperationType.Replenishment:
        return <div className="text-main">+{operatingMoney} ₽</div>
      default:
        return <div>-{operatingMoney} ₽</div>
    }
  },[bankAccountOperationType, operatingMoney])

  const operationStatus=useMemo(()=>{
    switch(bankAccountOperationStatus){
      case BankAccountOperationStatus.Success:
        return 'Исполнена'
      case BankAccountOperationStatus.Reject:
        return 'Отклонена'
    }
  },[bankAccountOperationStatus])
  
  const balanceTransition=useMemo(()=>{
    switch(bankAccountOperationStatus){
      case BankAccountOperationStatus.Success:
        return( 
          <div className="flex items-center gap-1 font-bold">
            <span className="text-decoration-line: line-through">{previousBalance} ₽</span>
            <span className="text-[20px]">&#8594;</span>
            <span>{currentBalance} ₽</span>
          </div>
        )
      case BankAccountOperationStatus.Reject:
        return ''
    }
  },[bankAccountOperationStatus, previousBalance, currentBalance])

  return(
    <div className="border rounded-md p-3">
      <div className="flex justify-between items-center">
        <div className="font-bold text-[19px] mb-2">{date}</div>
        <div className="font-semibold text-sm text-gray-400">Инициатор: {operationInitiator}</div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          {operationTypeIcon}
          <div>
            <div className="font-semibold text-[15px]">{operationTypeText}</div>
            <div className="font-semibold text-sm text-gray-400">{operationStatus}</div>
          </div>
        </div>
        <div className="grid items-center text-center font-bold">
          {bankAccountOperationStatus === BankAccountOperationStatus.Success ? (
            <div>
              {operationMoneyText}
            </div>
          ) : <div>{operatingMoney} ₽</div>}
          {balanceTransition}
        </div>
      </div>
    </div>
  )
}