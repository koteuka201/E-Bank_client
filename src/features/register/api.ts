import { ApiTagsEnum, useUserApiMutation } from "@shared/api";
import { RegisterBody, RegisterResponseProfile } from "./model";

export const useRegistration=()=>useUserApiMutation<RegisterBody, RegisterResponseProfile>({url: `user/User/register`, method: 'POST', invalidateTags: [ApiTagsEnum.User]}) 