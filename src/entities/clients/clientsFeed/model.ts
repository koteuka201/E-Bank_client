import { UserRole, UserShortInfo } from "@shared/api"

export type GetUsersRequestArgs={
  userRole: UserRole
  pageSize: number
}

export type GetUsersResponse={
  users: UserShortInfo[]
  totalCount: number
  pageSize: number
  pageIndex: number
}


