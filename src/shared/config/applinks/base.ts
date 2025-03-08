import { UserRole } from "@shared/api"
import { generateLinkWithId } from "@shared/lib"

export const APP_START_URL=''
export const CATALOG_PAGE_URL=`${APP_START_URL}/catalog`
export const WELCOME_PAGE_URL=`${APP_START_URL}/welcome`

export const CLIENTS_PAGE_URL=`${APP_START_URL}/clients/feed`
export const STAFF_PAGE_URL=`${APP_START_URL}/emploee/feed`
export const USER_PAGE_START_URL=`${APP_START_URL}/user`

export const GENERATE_USER_DETAILS_PAGE_URL=(id: string, role: UserRole)=>{
  const reserveUrl= role ===UserRole.Client ? CLIENTS_PAGE_URL : STAFF_PAGE_URL

  return generateLinkWithId(reserveUrl, USER_PAGE_START_URL, 'detailes' , id)
}

export const LOGIN_PAGE_URL = `${APP_START_URL}/login`