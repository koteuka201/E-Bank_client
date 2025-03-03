import { BankAccount, Card } from "@shared/api"

export type GetMyAccountsRequestArgs={
  userId: string
}

export type GetMyAccountsResponse={
  debitCardBankAccounts: AccountAndCard[]
  creditCardBankAccounts: AccountAndCard[]
}

export type AccountAndCard={
  bankAccount: BankAccount
  card: Card
}

