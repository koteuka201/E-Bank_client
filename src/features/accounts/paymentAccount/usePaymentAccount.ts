import { ApiTagsEnum, useApiMutation } from "@shared/api"
import { PaymentAccountArgs, PaymentAccountBody } from "./model"

export const useDepositAccount=({accountId}: PaymentAccountArgs)=>useApiMutation<PaymentAccountBody>({url: 'Core/account/card/deposit', method: 'POST', invalidateTags: [ApiTagsEnum.DebitAccount, ApiTagsEnum.MyAccounts, ApiTagsEnum.Payments], id:accountId})
export const useWithdrawAccount=({accountId}: PaymentAccountArgs)=>useApiMutation<PaymentAccountBody>({url: 'Core/account/card/withdraw', method: 'POST', invalidateTags: [ApiTagsEnum.DebitAccount, ApiTagsEnum.MyAccounts, ApiTagsEnum.Payments], id:accountId})
export const useDepositCreditAccount=({accountId}: PaymentAccountArgs)=>useApiMutation<PaymentAccountBody>({url: 'Core/account/credit/deposit', method: 'POST', invalidateTags: [ApiTagsEnum.CreditDetails, ApiTagsEnum.MyCredits], id:accountId})
export const useWithdrawCreditAccount=({accountId}: PaymentAccountArgs)=>useApiMutation<PaymentAccountBody>({url: 'Core/account/credit/withdraw', method: 'POST', invalidateTags: [ApiTagsEnum.CreditDetails, ApiTagsEnum.MyCredits], id:accountId})