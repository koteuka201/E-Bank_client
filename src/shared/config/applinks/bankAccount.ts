import { generateLinkWithId } from "@shared/lib";
import { APP_START_URL } from "./base";

export const BANK_ACCOUNT_START_URL=`${APP_START_URL}/account`

export const BANK_ACCOUNTS_START_URL=`${APP_START_URL}/accounts`

export const MY_BANK_ACCOUNTS_PAGE_URL=`${BANK_ACCOUNTS_START_URL}/my`

export const GENERATE_BANK_ACCOUNT_PAGE_URL=(id?: string | number | undefined)=>
  generateLinkWithId(MY_BANK_ACCOUNTS_PAGE_URL, BANK_ACCOUNT_START_URL, null, id)

export const CLIENT_BANK_ACCOUNTS_PAGE_URL=`${BANK_ACCOUNTS_START_URL}/client:id`

export const BANK_ACCOUNT_HISTORY_PAGE_URL=`${BANK_ACCOUNT_START_URL}:id/account`