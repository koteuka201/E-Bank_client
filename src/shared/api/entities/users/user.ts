import { UserRole } from "./userRole"

export type UserShortInfo={
  id: string
  userName: string | undefined
  isManuallyBlocked: boolean
  role: UserRole
}