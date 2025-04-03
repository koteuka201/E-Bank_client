import { ApiTagsEnum, useApiMutation } from "@shared/api";
import { CloseAccountBody } from "./model";

export const useCloseAccount=({accountId}: CloseAccountBody)=>useApiMutation({url: `Core/account/card/${accountId}/close`, method: 'POST', invalidateTags: [ApiTagsEnum.MyAccounts, ApiTagsEnum.DebitAccount]})