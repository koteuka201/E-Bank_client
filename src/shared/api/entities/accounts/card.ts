import { ObjectCMDateTime, StringOrNull } from "@shared/lib"
import { CardCategory } from "./cardCategory"
import { CardType } from "./cardType"

export type Card={
  id: string
  cardNumber: StringOrNull
  cardCategory: CardCategory
  cardType: CardType
} & ObjectCMDateTime