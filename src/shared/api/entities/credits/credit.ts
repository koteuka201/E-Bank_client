import { BankAccountType } from "../accounts"
import { TariffBrief } from "./tariffBrief"

export type Credit={
  id: string
  isFrozen: boolean
  currencyType: string | undefined
  balance: number
  debt: number
  bankAccountType: BankAccountType
  ownerId: string | undefined
  tariff: TariffBrief
}