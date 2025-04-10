import { BankAccountOperationInitiator, BankAccountOperationStatus, BankAccountType, PaymentOperation } from "@shared/api"
// import { PagedListMetaData } from "@shared/lib"

export type GetAccountsPaymentsHistoryRequestArgs={
  UsersIds: string[] | undefined
  BankAccountsIds: string[] | undefined
  OperationDateTime: string | undefined
  BankAccountOperationInitiator: BankAccountOperationInitiator | undefined
  BankAccountOperationStatus: BankAccountOperationStatus | undefined
  BankAccountType: BankAccountType | undefined
}

export type GetAccountsPaymentsHistoryResponse = {
  bankAccountOperations: PaymentOperation[]
  // metaData: PagedListMetaData
}


