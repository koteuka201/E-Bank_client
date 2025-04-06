export type Config={
  userId: string
  config: string | undefined
  device: string | undefined
} 

export type GetUserConfigResponse=Config

export type GetUserConfigRequestArgs={
  params:{
    device: string
  }
  id: string
}