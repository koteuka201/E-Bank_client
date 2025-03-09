import { PaymentType } from "@shared/api"

export type CreateTariffBody={
  name: string
  interestRate: number
  creditLimit: number
  minimumPayment: number
  paymentType: PaymentType
}