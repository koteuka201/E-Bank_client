import { useCreditApiQuery } from "@shared/api/base/creditApi";
import { GetCreditDetailsRequestArgs, GetCreditDetailsResponse } from "./model";
import { ApiTagsEnum } from "@shared/api";

export const useGetCreditDetails=({CreditId}: GetCreditDetailsRequestArgs)=>useCreditApiQuery<GetCreditDetailsResponse>([ApiTagsEnum.CreditDetails], `/credit/Credit/${CreditId}/details`)