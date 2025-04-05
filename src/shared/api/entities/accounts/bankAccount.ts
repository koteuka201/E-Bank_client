import { ObjectCMDateTime } from "@shared/lib"
import { BankAccountType } from "./bankAccountType"

export type BankAccount={
  id: string
  currencyType: string | undefined
  balance: number
  bankAccountType: BankAccountType
  isFrozen: boolean
  accountName: string | undefined
} & ObjectCMDateTime