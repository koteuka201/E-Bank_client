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
        fluid ? "w-full px-4 sm:px-6 lg:px-8" : "max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  )
}
