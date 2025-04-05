import { BankAccountOperationInitiator } from "@shared/api";

export const FormatInitiatorToRus=(bankAccountOperationInitiator: BankAccountOperationInitiator)=>{
  switch(bankAccountOperationInitiator){
    case BankAccountOperationInitiator.User:
      return 'Пользователь'
    case BankAccountOperationInitiator.System:
      return 'Система'
    case BankAccountOperationInitiator.Other:
    return 'Прочий инициатор'
  }
}