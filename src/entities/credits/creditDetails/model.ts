import { CreditDetails } from "@shared/api"

export type GetCreditDetailsRequestArgs={
  CreditId: string
}
export type GetOverduePaymentsRequestArgs={
  params: {
    CreditId: string
    addSuccessPayments?: boolean | undefined
  }
}

export type GetCreditDetailsResponse=CreditDetails