import { ApiTagsEnum, useApiQuery } from "@shared/api";
import { GetDebitAccountDetailsRequestArgs, GetDebitAccountDetailsResponse } from "./model";

export const useGetDebitAccountDetails=({accountId}: GetDebitAccountDetailsRequestArgs)=>useApiQuery<GetDebitAccountDetailsResponse>([ApiTagsEnum.DebitAccount], `/Core/account/card/${accountId}/details`)