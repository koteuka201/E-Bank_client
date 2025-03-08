import { UserRole } from "@shared/api"

export type CreateUserBody={
  userName: string
  email: string
  password: string
  role: UserRole
}

export type CreateUserForm=Omit<CreateUserBody, 'role'>