import { ApiTagsEnum, useUserApiQuery } from "@shared/api";
import { GetUserProfileRequestArgs, GetUserProfileResponse } from './model';

export const useGetUserProfile=({id}: GetUserProfileRequestArgs)=>useUserApiQuery<GetUserProfileResponse>([ApiTagsEnum.ClientProfile],`/user/User/${id}`)
export const useGetMyProfile=()=>useUserApiQuery<GetUserProfileResponse>([ApiTagsEnum.ClientProfile],`/user/User/GetMyProfile`)