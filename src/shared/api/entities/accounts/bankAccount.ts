import { ObjectCMDateTime, StringOrNull } from "@shared/lib"
import { BankAccountType } from "./bankAccountType"

export type BankAccount={
  id: string
  currencyType: StringOrNull
  balance: number
  bankAccountType: BankAccountType
  isFrozen: boolean
  accountName: StringOrNull
} & ObjectCMDateTime