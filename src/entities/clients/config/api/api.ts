import { ApiTagsEnum, useConfigApiQuery } from "@shared/api";
import { GetUserConfigRequestArgs, GetUserConfigResponse } from "./model";

export const useGetUserConfig=({id, params}: GetUserConfigRequestArgs)=>useConfigApiQuery<GetUserConfigResponse>([ApiTagsEnum.UserConfig],`/api/config/get/user/${id}`, params)