import { ApiTagsEnum } from "@shared/api";
import { useCreditApiMutation } from "@shared/api/base/creditApi";
import { GetCreditBody } from "./model";

export const useGetCredit=()=>useCreditApiMutation<GetCreditBody>({url: `credit/Credit/RequestCredit`, method: 'POST', invalidateTags: [ApiTagsEnum.MyCredits, ApiTagsEnum.CreditDetails]})