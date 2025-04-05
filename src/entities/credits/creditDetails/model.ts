import { CreditDetails, CreditRaiting, PaymentOperation } from "@shared/api"

export type GetCreditDetailsRequestArgs={
  CreditId: string
}
export type GetOverduePaymentsRequestArgs={
  params: {
    CreditId: string
    addSuccessPayments?: boolean | undefined
  }
}

export type GetCreditRaitingRequestArgs={
  UserId: string
}

export type GetCreditDetailsResponse=CreditDetails
export type GetCreditOverduePaymentsResponse=PaymentOperation[]
export type GetCreditRaitingResponse=CreditRaiting