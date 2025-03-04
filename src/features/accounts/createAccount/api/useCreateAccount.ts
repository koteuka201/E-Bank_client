import { ApiTagsEnum, useApiMutation } from "@shared/api";
import { CreateAccountBody } from "./model";

export const useCreateAccount=()=>useApiMutation<CreateAccountBody>({url: 'Core/account/card/create', method: 'POST', invalidateTags: [ApiTagsEnum.Accounts]})