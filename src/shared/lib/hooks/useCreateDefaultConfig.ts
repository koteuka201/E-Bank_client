import { useGetMyProfile, useGetUserConfig } from "@entities/clients"
import { CreateConfigBody, useCreateUserConfig } from "@features/users/createUserConfig"
import { ParseConfig } from "../functions/parseConfig"
import { useEffect, useState } from "react"

export const defaultUserConfig:CreateConfigBody={
  device: 'browser',
  config: '{"theme": "light", "hidenAccountsId": []}'
}

export const UseCreateDefaultConfigOrGetParsed=()=>{
  const { data: profile, isLoading: profileLoading } = useGetMyProfile()
  const { data: config, isError, isLoading: configLoading } = useGetUserConfig({
    params: { device: 'browser' },
    id: profile?.id || ''
  })

  const { mutate } = useCreateUserConfig(profile?.id || '')
  const [parsed, setParsed] = useState(ParseConfig(defaultUserConfig.config))

  useEffect(() => {
    if (profile && isError) {
      mutate({ data: defaultUserConfig })
      setParsed(ParseConfig(defaultUserConfig.config))
    }

    if (profile && config?.config) {
      setParsed(ParseConfig(config.config))
    }
  }, [profile, config, isError])

  const isReady = !profileLoading && !configLoading

  return {
    config: parsed,
    isReady
  }
}