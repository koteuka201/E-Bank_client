import { generateLinkWithId } from "@shared/lib";
import { APP_START_URL } from "./base";

export const CREDITS_START_URL=`${APP_START_URL}/credits`
export const CREDIT_START_URL=`${APP_START_URL}/credit`

export const CREDITS_CATALOG_PAGE_URL=`${CREDITS_START_URL}/catalog`
export const MY_CREDITS_PAGE_URL=`${CREDITS_START_URL}/my`

export const GENERATE_BANK_CREDIT_DEATILS_PAGE_URL=(id?: string | number | undefined)=>
  generateLinkWithId(MY_CREDITS_PAGE_URL, CREDIT_START_URL, null , id)