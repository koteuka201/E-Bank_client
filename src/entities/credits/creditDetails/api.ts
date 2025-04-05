import { useCreditApiQuery } from "@shared/api/base/creditApi";
import { GetCreditDetailsRequestArgs, GetCreditDetailsResponse, GetCreditOverduePaymentsResponse, GetCreditRaitingRequestArgs, GetCreditRaitingResponse, GetOverduePaymentsRequestArgs } from "./model";
import { ApiTagsEnum } from "@shared/api";

export const useGetCreditDetails=({CreditId}: GetCreditDetailsRequestArgs)=>useCreditApiQuery<GetCreditDetailsResponse>([ApiTagsEnum.CreditDetails], `/credit/Credit/${CreditId}/details`)
export const useGetOverduePayments=({params}: GetOverduePaymentsRequestArgs)=>useCreditApiQuery<GetCreditOverduePaymentsResponse>([ApiTagsEnum.CreditDetails], `/credit/Credit/GetOverduePayments`, params)
export const useGetMyCreditRaiting=()=>useCreditApiQuery<GetCreditRaitingResponse>([ApiTagsEnum.CreditDetails], `/credit/Credit/GetCreditRaiting/My`)
export const useGetCreditRaiting=({UserId}: GetCreditRaitingRequestArgs)=>useCreditApiQuery<GetCreditRaitingResponse>([ApiTagsEnum.CreditDetails], `/credit/Credit/GetCreditRaiting/${UserId}`)