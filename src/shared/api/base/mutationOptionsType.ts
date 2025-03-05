import { ApiTagsEnum } from "./apiTagsEnum"

export type MutationOptions = {
  url: string
  method: 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  invalidateTags?: ApiTagsEnum[]
  params?: any
  id?: string
  urlAfter?: string
}