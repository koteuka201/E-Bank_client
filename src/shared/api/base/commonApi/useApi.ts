import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { api } from "./api"
import { MutationOptions } from "../mutationOptionsType"
import { ApiTagsEnum } from "@shared/api"
import { AxiosRequestConfig } from "axios"


export const useApiQuery = <R>(key: ApiTagsEnum[], url: string, params?: Record<string, any>) => {
  return useQuery<R>({
    queryKey: key,
    queryFn: async () => {
      const response = await api.get<R>(url, { params })
      return response.data
    },
  })
}

export const useApiMutation = <TData = unknown, TResponse = any>(
  { url, method, invalidateTags }: MutationOptions
) => {
  const queryClient = useQueryClient()

  return useMutation<TResponse, Error, { data: TData; headers?: any; params?: Record<string, any> }>({
    mutationFn: async ({ data, headers, params }) => {
      const config: AxiosRequestConfig<TData> = {
        url,
        method,
        data,
        headers,
        params,
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