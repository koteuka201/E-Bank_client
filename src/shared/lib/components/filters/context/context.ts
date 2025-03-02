import { createContext } from "react"

export const generateFiltersContext=<T>()=>{
  type FilterContextType = {
    filters: T
    setFilters: (newFilters: Partial<T>) => void
  }

  return createContext<FilterContextType | undefined>(undefined)
}