import { UserRole } from "@shared/api"

export type RegisterBody={
  userName: string
  email: string
  password: string
  role: UserRole
}

export type RegisterResponseProfile={
  id: string
  userName: string
  email: string
  birthData: string
  phoneNumber: string
  isManuallyBlocked: boolean
  role: UserRole
}