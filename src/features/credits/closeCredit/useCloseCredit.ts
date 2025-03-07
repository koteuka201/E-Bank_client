import { ApiTagsEnum } from "@shared/api";
import { useCreditApiMutation } from "@shared/api/base/creditApi";
import { CloseCreditArgs } from "./model";

export const useCloseCredit=({creditId}: CloseCreditArgs)=>useCreditApiMutation({url: `credit/Credit/${creditId}/close`, method: 'POST', invalidateTags: [ApiTagsEnum.MyCredits, ApiTagsEnum.CreditDetails]})