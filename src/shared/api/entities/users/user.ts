import { UserRole } from "./userRole"

export type UserShortInfo={
  id: string
  email: string | undefined | null
  userName: string | undefined
  isManuallyBlocked: boolean
  role: UserRole
}
export type UserFullInfo={
  patronymic: string | null | undefined
  birthDate: string | null | undefined
  phoneNumber: string | null | undefined
} & UserShortInfo