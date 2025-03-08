import { ApiTagsEnum, useUserApiQuery } from "@shared/api";
import { GetUsersRequestArgs, GetUsersResponse } from './model';

export const useGetUsersFeed=(params: GetUsersRequestArgs)=>useUserApiQuery<GetUsersResponse>([ApiTagsEnum.Clients],'/user/User/GetAllUsers', params)