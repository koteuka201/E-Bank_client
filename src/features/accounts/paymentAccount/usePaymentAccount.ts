import { ApiTagsEnum, useApiMutation } from "@shared/api"
import { PaymentAccountArgs, PaymentAccountBody, TransferAccountBody } from "./model"

export const useDepositAccount=({accountId}: PaymentAccountArgs)=>useApiMutation<PaymentAccountBody>({url: `Core/account/card/deposit/${accountId}`, method: 'POST', invalidateTags: [ApiTagsEnum.DebitAccount, ApiTagsEnum.MyAccounts, ApiTagsEnum.Payments]})
export const useWithdrawAccount=({accountId}: PaymentAccountArgs)=>useApiMutation<PaymentAccountBody>({url: `Core/account/card/withdraw/${accountId}`, method: 'POST', invalidateTags: [ApiTagsEnum.DebitAccount, ApiTagsEnum.MyAccounts, ApiTagsEnum.Payments]})
export const useTransferAccount=()=>useApiMutation<TransferAccountBody>({url: `Core/account/transfer`, method: 'POST', invalidateTags: [ApiTagsEnum.DebitAccount, ApiTagsEnum.MyAccounts, ApiTagsEnum.Payments]})
export const useDepositCreditAccount=({accountId}: PaymentAccountArgs)=>useApiMutation<PaymentAccountBody>({url: `Core/account/credit/deposit/${accountId}`, method: 'POST', invalidateTags: [ApiTagsEnum.CreditDetails, ApiTagsEnum.MyCredits]})
export const useWithdrawCreditAccount=({accountId}: PaymentAccountArgs)=>useApiMutation<PaymentAccountBody>({url: `Core/account/credit/withdraw/${accountId}`, method: 'POST', invalidateTags: [ApiTagsEnum.CreditDetails, ApiTagsEnum.MyCredits]})

