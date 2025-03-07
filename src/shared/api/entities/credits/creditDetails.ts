import { Credit } from "./credit";
import { TariffInfo } from "./tariffBrief";

export type CreditDetails={
  createDateTime: string
  accountNumber: string
  tariff: TariffInfo
  creditCardId: string
  payingCardId: string
} & Omit<Credit, 'tariff'>