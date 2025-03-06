import { BankAccountOperationInitiator } from "./bankAccountOperationInitiator"
import { BankAccountOperationStatus } from "./bankAccountOperationStatus"
import { BankAccountOperationType } from "./bankAccountOperationType"

export type PaymentOperation={
  bankAccountOperationType: BankAccountOperationType
  operatingMoney: number
  currentBalance: number
  previousBalance: number
  operationDateTime: string
  bankAccountOperationInitiator: BankAccountOperationInitiator
  bankAccountOperationStatus: BankAccountOperationStatus
  bankAccountId: string
  userId: string
}