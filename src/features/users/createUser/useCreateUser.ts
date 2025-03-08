import { ApiTagsEnum, useUserApiMutation } from "@shared/api";
import { CreateUserBody } from "./model";

export const useCreateUser=()=>useUserApiMutation<CreateUserBody>({url: `user/User/register`, method: 'POST', invalidateTags: [ApiTagsEnum.Clients]})