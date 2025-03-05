import { ApiTagsEnum, useApiMutation } from "@shared/api";
import { CloseAccountBody } from "./model";

export const useCloseAccount=({accountId}: CloseAccountBody)=>useApiMutation({url: 'Core/account/card', method: 'PATCH', invalidateTags: [ApiTagsEnum.Accounts], id: accountId, urlAfter: 'close'})