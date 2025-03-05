import { ClassNameProps } from "@shared/lib"
import { HTMLAttributes, PropsWithChildren } from "react"

export type PaymentButtonProps = {
  readonly icon: React.ReactNode
  readonly text: string
}&PropsWithChildren<ClassNameProps & HTMLAttributes<HTMLDivElement>>

export const PaymentButton=({onClick, icon, text}: PaymentButtonProps)=>{
  return(
    <div className="rounded-[12px] p-3 flex gap-3 items-center cursor-pointer bg-white" onClick={onClick}>
      {icon}
      <div className="grid font-semibold">
        <span className="text-lg">{text.split(',')[0]}</span>
        <span className="text-sm">{text.split(',')[1]}</span>
      </div>
    </div>
  )
}