import cn from "classnames"
import { CircleCheckBig } from "lucide-react"

import { CardCategory } from "@shared/api"
import { StringOrNull } from "@shared/lib"
import styles from './index.module.scss'

export type CardItemProps={
  readonly accountName: StringOrNull
  readonly cardNumber: StringOrNull
  readonly cardCategory: CardCategory
}

export const CardItem=({accountName, cardCategory, cardNumber}:CardItemProps)=>{

  return(
    <div className={cn('p-3 rounded-[18px] col-span-4 col-start-4', styles[cardCategory])}>
      <CircleCheckBig strokeWidth={2.8} size={28} color="white" />
      <div className="font-semibold text-white mt-[70px]">
        <div>{accountName}</div>
        <div>{cardNumber?.replace(/(\d{4})(\d{4})(\d{2})/, '$1 $2 $3')}</div>
      </div>
    </div>
  )
}