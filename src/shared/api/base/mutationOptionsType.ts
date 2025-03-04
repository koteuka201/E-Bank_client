import { ApiTagsEnum } from "./apiTagsEnum"

export type MutationOptions = {
  url: string
  method: 'POST' | 'PUT' | 'DELETE'
  invalidateTags?: ApiTagsEnum[]
}