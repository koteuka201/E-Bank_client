export type TariffBrief={
  id: string
  name: string | undefined
  interestRate: number
  paymentType: string
}

export type TariffInfo={
  creditLimit: number
  minimumPayment: number
} & TariffBrief