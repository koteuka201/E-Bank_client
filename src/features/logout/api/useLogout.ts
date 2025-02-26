import { useApiMutation } from "@shared/api";

export const useLogout = ()=> useApiMutation({url: '/logout', method: 'POST'})