import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { api } from "./api"
import { MutationOptions } from "../mutationOptionsType"
import { ApiTagsEnum } from "@shared/api"
import { AxiosRequestConfig } from "axios"
import qs from 'qs'


export const useUserApiQuery = <R>(key: ApiTagsEnum[], url: string, params?: Record<string, any>, id?: string, urlAfter?: string) => {
  return useQuery<R>({
    queryKey: [key,url, id, params, urlAfter],
    queryFn: async () => {
      const fullUrl = id ? (urlAfter ? `${url}/${id}/${urlAfter}` : `${url}/${id}`) : url
      const response = await api.get<R>(fullUrl, { params,
        paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' }) 
       })
      return response.data
    },
    staleTime: 600000
  })
}

export const useUserApiMutation = <TData = unknown, TResponse = any>(
  { url, method, invalidateTags, params, id, urlAfter }: MutationOptions
) => {
  const queryClient = useQueryClient()

  const fullUrl = id ? (urlAfter ? `${url}/${id}/${urlAfter}` : `${url}/${id}`) : url
  return useMutation<TResponse, Error, { data: TData; headers?: any; params?: Record<string, any> }>({
    mutationFn: async ({ data, headers, params: mutationParams  }) => {
      const config: AxiosRequestConfig<TData> = {
        url: fullUrl,
        method,
        data,
        headers,
        params: {...params, ...mutationParams},
      }
      const response = await api(config)
      return response.data
    },
    onSuccess: () => {
      if (invalidateTags?.length) {
        invalidateTags.forEach(tag => queryClient.invalidateQueries({ queryKey: [[tag]] }))
      }
    }
  })
}