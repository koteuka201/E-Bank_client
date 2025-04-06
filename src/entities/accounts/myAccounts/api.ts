import { ApiTagsEnum, useApiQuery } from "@shared/api";
import { GetMyAccountsRequestArgs, GetMyAccountsRequestParams, GetMyAccountsResponse } from './model';

export const useGetAccounts=({userId}: GetMyAccountsRequestArgs)=>useApiQuery<GetMyAccountsResponse>([ApiTagsEnum.Accounts], `/Core/user/accounts/${userId}`,undefined)
export const useGetMyAccounts=(params: GetMyAccountsRequestParams)=>useApiQuery<GetMyAccountsResponse>([ApiTagsEnum.MyAccounts], '/Core/user/accounts/my', params)