import cn from "classnames"
import { HTMLAttributes, PropsWithChildren } from "react"
import { ClassNameProps } from "@shared/lib"

export type ContainerProps = {
  fluid?: boolean
} & PropsWithChildren<ClassNameProps & HTMLAttributes<HTMLDivElement>>

export const Container = ({ fluid, className, children }: ContainerProps) => {
  return (
    <div
      className={cn(
        fluid ? "w-full px-1 sm:px-2 lg:px-3" : "max-w-screen-xl mx-auto px-1 sm:px-2 lg:px-3",
        className
      )}
    >
      {children}
    </div>
  )
}
