import { useCreditApiQuery } from "@shared/api/base/creditApi";
import { GetCreditDetailsRequestArgs, GetCreditDetailsResponse, GetOverduePaymentsRequestArgs } from "./model";
import { ApiTagsEnum } from "@shared/api";

export const useGetCreditDetails=({CreditId}: GetCreditDetailsRequestArgs)=>useCreditApiQuery<GetCreditDetailsResponse>([ApiTagsEnum.CreditDetails], `/credit/Credit/${CreditId}/details`)
export const useGetOverduePayments=({params}: GetOverduePaymentsRequestArgs)=>useCreditApiQuery<GetCreditDetailsResponse>([ApiTagsEnum.CreditDetails], `/credit/Credit/GetOverduePayments`, params)