import { useMutation, useQuery } from "@tanstack/react-query"
import { api } from "./api"
import { MutationOptions } from "../mutationOptionsType"
import { ApiTagsEnum } from "@shared/api"


export const useApiQuery = <R>(key: ApiTagsEnum[], url: string, params?: Record<string, any>) => {
  return useQuery<R>({
    queryKey: key,
    queryFn: async () => {
      const response = await api.get<R>(url, { params })
      return response.data
    },
  })
}

export const useApiMutation = ({ url, method }: MutationOptions) => {
  return useMutation({
    mutationFn: async ({ data, headers, params }: { 
      data?: any
      headers?: any
      params?: Record<string, any>
    }) => {
      const response = await api({
        url,
        method,
        data,
        headers,
        params,
      })
      return response.data
    }
  })
}