import { ApiTagsEnum, useUserApiMutation } from "@shared/api";
import { BlockUserBody } from "./model";

export const useBlockUser=({id, isBlocked}: BlockUserBody)=>useUserApiMutation({url: `user/User/${id}/block`, method: 'POST', invalidateTags: [ApiTagsEnum.Clients, ApiTagsEnum.ClientProfile],params: {isBlocked}})