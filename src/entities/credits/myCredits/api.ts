import { useCreditApiQuery } from "@shared/api/base/creditApi";
import { GetMyCreditsRequestArgs, GetMyCreditsResponse } from "./model";
import { ApiTagsEnum } from "@shared/api";

export const useGetMyCredits=()=>useCreditApiQuery<GetMyCreditsResponse>([ApiTagsEnum.MyCredits], `/credit/Credit/GetMyCredits`)
export const useGetCreditById=({UserId}: GetMyCreditsRequestArgs)=>useCreditApiQuery<GetMyCreditsResponse>([ApiTagsEnum.MyCredits], `/credit/Credit/${UserId}/GetAllCredits`)