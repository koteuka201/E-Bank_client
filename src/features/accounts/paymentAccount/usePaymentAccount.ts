import { ApiTagsEnum, useApiMutation } from "@shared/api"
import { PaymentAccountArgs, PaymentAccountBody } from "./model"

export const useDepositAccount=({accountId}: PaymentAccountArgs)=>useApiMutation<PaymentAccountBody>({url: 'Core/account/card/deposit', method: 'PATCH', invalidateTags: [ApiTagsEnum.DebitAccount], id:accountId})
export const useWithdrawAccount=({accountId}: PaymentAccountArgs)=>useApiMutation<PaymentAccountBody>({url: 'Core/account/card/withdraw', method: 'PATCH', invalidateTags: [ApiTagsEnum.DebitAccount], id:accountId})