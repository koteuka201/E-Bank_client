export type PaymentAccountBody={
  currencyType: string
  money: number
}

export type PaymentsForm={
  type: 'transfer' | 'withdraw'
} & PaymentAccountBody

export type PaymentAccountArgs={
  accountId: string
}