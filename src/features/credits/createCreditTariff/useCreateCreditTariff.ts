import { ApiTagsEnum } from "@shared/api";
import { useCreditApiMutation } from "@shared/api/base/creditApi";
import { CreateTariffBody } from "./model";

export const useCreateCreditTariff=()=>useCreditApiMutation<CreateTariffBody>({url: `credit/Credit/CreateTariff`, method: 'POST', invalidateTags: [ApiTagsEnum.CreditsCatalog]})