import { ApiTagsEnum, useApiMutation } from "@shared/api";
import { CloseAccountBody } from "./model";

export const useCloseAccount=({accountId}: CloseAccountBody)=>useApiMutation({url: 'Core/account/card', method: 'POST', invalidateTags: [ApiTagsEnum.MyAccounts, ApiTagsEnum.DebitAccount], id: accountId, urlAfter: 'close'})