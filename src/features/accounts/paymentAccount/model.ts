export type PaymentAccountBody={
  currencyType: string
  money: number
}
export type TransferAccountBody={
  currencyType: string
  fromAccountId: string
  toAccountId: string
  amount: number
}

export type PaymentsForm={
  type: 'transfer' | 'withdraw'
  fromAccountId: string
  toAccountId: string
  amount: number
} & PaymentAccountBody

export type PaymentAccountArgs={
  accountId: string
}