import { ApiTagsEnum, useUserApiMutation } from "@shared/api";
import { LoginBody, LoginResponse } from "./model";

export const useLogin=()=>useUserApiMutation<LoginBody, LoginResponse>({url: `user/User/login`, method: 'POST', invalidateTags: [ApiTagsEnum.User]})