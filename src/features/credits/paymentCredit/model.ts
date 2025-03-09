export type PaymentCreditBody={
  currencyType: string
  money: number
}
export type PaymentCreditForm={
  paymentFrom: 'Credit' | 'DebitCard'
} &PaymentCreditBody

export type PaymentCreditArgs={
  creditId: string
}