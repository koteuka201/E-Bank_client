import { UserRole, UserShortInfo } from "@shared/api"

export type GetUsersRequestArgs={
  role: UserRole
}

export type GetUsersResponse=UserShortInfo[]


