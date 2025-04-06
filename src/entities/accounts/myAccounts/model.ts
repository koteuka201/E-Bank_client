import { BankAccount, Card } from "@shared/api"

export type GetMyAccountsRequestArgs={
  userId: string
}
export type GetMyAccountsRequestParams={
  accountsIds?: string[]
}

export type GetMyAccountsResponse={
  cardBankAccounts: AccountAndCard[]
  creditBankAccounts: AccountAndCard[]
}

export type AccountAndCard={
  bankAccount: BankAccount
  card: Card
}

