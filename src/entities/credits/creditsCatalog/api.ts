import { useCreditApiQuery } from "@shared/api/base/creditApi";
import { GetCreditsCatalogResponse } from "./model";
import { ApiTagsEnum } from "@shared/api";

export const useGetCreditsCatalog=()=>useCreditApiQuery<GetCreditsCatalogResponse>([ApiTagsEnum.CreditsCatalog], `/credit/Credit/GetAllTariffs`)