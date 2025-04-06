import { useGetMyProfile, useGetUserConfig } from "@entities/clients"
import { CreateConfigBody, useCreateUserConfig } from "@features/users/createUserConfig"
import { ParseConfig } from "../functions/parseConfig"

export const defaultUserConfig:CreateConfigBody={
  device: 'browser',
  config: '{"theme": "light", "hidenAccountsId": []}'
}

export const UseCreateDefaultConfigOrGetParsed=()=>{
  const {data: profile}=useGetMyProfile()
  const {data: config, isError}=useGetUserConfig({params: {device: 'browser'}, id: profile?.id || ''})
  if(!profile){
    return ParseConfig(config?.config || defaultUserConfig.config)
  }
  const {mutate}=useCreateUserConfig(profile.id)
  
  if(isError){
    mutate({data: defaultUserConfig})
    return ParseConfig(defaultUserConfig.config)
  }
  
  return ParseConfig(config?.config || defaultUserConfig.config)
}