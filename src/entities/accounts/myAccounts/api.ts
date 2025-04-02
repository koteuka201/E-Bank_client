import { ApiTagsEnum, useApiQuery } from "@shared/api";
import { GetMyAccountsRequestArgs, GetMyAccountsResponse } from './model';

export const useGetAccounts=({userId}: GetMyAccountsRequestArgs)=>useApiQuery<GetMyAccountsResponse>([ApiTagsEnum.Accounts], `/Core/user/accounts/${userId}`,undefined)
export const useGetMyAccounts=()=>useApiQuery<GetMyAccountsResponse>([ApiTagsEnum.MyAccounts], '/Core/user/accounts/my')