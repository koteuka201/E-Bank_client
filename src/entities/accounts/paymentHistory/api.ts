import { ApiTagsEnum, useApiQuery } from "@shared/api";
import { GetAccountsPaymentsHistoryRequestArgs, GetAccountsPaymentsHistoryResponse } from "./model";

export const useGetAccountsPaymentsHistory=(params: GetAccountsPaymentsHistoryRequestArgs)=>useApiQuery<GetAccountsPaymentsHistoryResponse>([ApiTagsEnum.Payments], '/Core/accounts/history', params)
export const useGetMyAccountsPaymentsHistory=(params: GetAccountsPaymentsHistoryRequestArgs)=>useApiQuery<GetAccountsPaymentsHistoryResponse>([ApiTagsEnum.Payments], '/Core/accounts/history/my', params)