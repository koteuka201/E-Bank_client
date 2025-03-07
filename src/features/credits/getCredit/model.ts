export type GetCreditBody={
  userId: string
  tariffId: string
  amount: number
  currencyType: string
  accountName: string
}
export type GetCreditForm={
  amount: number
  currencyType: string
}