import { Credit } from "@shared/api"

export type GetMyCreditsRequestArgs={
  UserId: string
}

export type GetMyCreditsResponse=Credit[]