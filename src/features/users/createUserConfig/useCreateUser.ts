import { ApiTagsEnum, useConfigApiMutation } from "@shared/api";
import { CreateConfigBody } from "./model";

export const useCreateUserConfig=(id: string)=>useConfigApiMutation<CreateConfigBody>({url: `api/config/create/user/${id}`, method: 'POST', invalidateTags: [ApiTagsEnum.UserConfig]})