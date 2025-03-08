export type LoginBody={
  email: string
  password: string
}

export type LoginResponse={
  token: string
  expires: string
}