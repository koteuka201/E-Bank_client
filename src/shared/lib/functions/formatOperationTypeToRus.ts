import { BankAccountOperationType } from "@shared/api"

export const FormatOperationTypeToRus=(bankAccountOperationType: BankAccountOperationType)=>{
  switch(bankAccountOperationType){
    case BankAccountOperationType.LoanRepayment:
      return 'Погашение кредита'
    case BankAccountOperationType.Replenishment:
      return 'Пополнение'
    case BankAccountOperationType.Withdrawal:
      return 'Снятие'
  }
}