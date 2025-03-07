import { useCreditApiMutation } from '@shared/api/base/creditApi';
import { PaymentCreditArgs, PaymentCreditBody } from './model';
import { ApiTagsEnum } from '@shared/api';

export const useDepositCredit=({creditId}: PaymentCreditArgs)=>useCreditApiMutation<PaymentCreditBody>({url: `credit/Credit/${creditId}/deposit`, method: 'POST', invalidateTags: [ApiTagsEnum.MyCredits, ApiTagsEnum.CreditDetails]})
export const useWithdrawCredit=({creditId}: PaymentCreditArgs)=>useCreditApiMutation<PaymentCreditBody>({url: `credit/Credit/${creditId}/withdraw`, method: 'POST', invalidateTags: [ApiTagsEnum.MyCredits, ApiTagsEnum.CreditDetails]})