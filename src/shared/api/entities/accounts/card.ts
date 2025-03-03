import { ObjectCMDateTime } from "@shared/lib"
import { CardCategory } from "./cardCategory"
import { CardType } from "./cardType"

export type Card={
  id: string
  cardNumber: number
  cardCategory: CardCategory
  cardType: CardType
} & ObjectCMDateTime