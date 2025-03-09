import { PaymentType } from "./paymentType"

export type TariffBrief={
  id: string
  name: string | undefined
  interestRate: number
  paymentType: PaymentType
}

export type TariffInfo={
  creditLimit: number
  minimumPayment: number
} & TariffBrief