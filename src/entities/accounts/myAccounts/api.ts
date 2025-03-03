import { ApiTagsEnum, useApiQuery } from "@shared/api";
import { GetMyAccountsRequestArgs, GetMyAccountsResponse } from './model';

export const useGetMyAccounts=(params: GetMyAccountsRequestArgs)=>useApiQuery<GetMyAccountsResponse>([ApiTagsEnum.Accounts], '/Core/user/accounts',params)