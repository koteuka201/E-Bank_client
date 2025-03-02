import { useContext } from "react"

export const useFilterContext = <T,>(context: React.Context<{ filters: T; setFilters: (newFilters: Partial<T>) => void } | undefined>) => {
  return useContext(context)
}
