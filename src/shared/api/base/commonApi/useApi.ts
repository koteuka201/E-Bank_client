import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { api } from "./api"
import { MutationOptions } from "../mutationOptionsType"
import { ApiTagsEnum } from "@shared/api"
import { AxiosRequestConfig } from "axios"
import qs from 'qs'


export const useApiQuery = <R>(key: ApiTagsEnum[], url: string, params?: Record<string, any>, id?: string) => {
  return useQuery<R>({
    queryKey: key,
    queryFn: async () => {
      const fullUrl = id ? `${url}/${id}` : url
      const response = await api.get<R>(fullUrl, { params,
        paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' }) 
       })
      return response.data
    },
  })
}

export const useApiMutation = <TData = unknown, TResponse = any>(
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
        invalidateTags.forEach(tag => queryClient.invalidateQueries({ queryKey: [tag] }))
      }
    }
  })
}