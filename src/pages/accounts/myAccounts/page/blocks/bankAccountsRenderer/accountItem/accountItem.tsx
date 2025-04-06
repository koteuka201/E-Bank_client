import { useGetMyProfile } from "@entities/clients"
import { useCreateUserConfig } from "@features/users/createUserConfig"
import { BankAccountType, CardCategory, CardType } from "@shared/api"
import { GENERATE_BANK_ACCOUNT_PAGE_URL } from "@shared/config"
import { FormatCurrencyToSign, UseCreateDefaultConfigOrGetParsed } from "@shared/lib"
import { Eye, EyeOff, RectangleHorizontal } from "lucide-react"
import { useCallback, useMemo } from "react"
import { Link } from "react-router-dom"

export type AccountItemProps={
  readonly id: string
  readonly currencyType: string | undefined
  readonly balance: number
  readonly bankAccountType: BankAccountType
  readonly isFrozen: boolean
  readonly accountName: string | undefined
  readonly closeDateTime: string | undefined | null
  readonly cardNumber: string | undefined
  readonly cardCategory: CardCategory
  readonly cardType: CardType
}

export const AccountItem=({
  id,
  currencyType,
  balance,
  accountName,
  cardNumber,
  cardCategory,
  cardType,
  closeDateTime
}:AccountItemProps)=>{

  const {data: profile}=useGetMyProfile()
  const {mutate}=useCreateUserConfig(profile?.id || '')

  const cardFill=useMemo(()=>{
    switch(cardCategory){
      case CardCategory.Black:
        return '#1E1E1E'
      case CardCategory.Gold:
        return '#FFD700'
      case CardCategory.Platinum:
        return '#C0C0C0'
    }
  },[cardCategory])

  const cardTypeText=useMemo(()=>{
    switch(cardType){
      case CardType.CreditCard:
        return 'Кредитная'
      case CardType.DebitCard:
        return 'Дебетовая'
    }
  },[cardType])

  const currencySign=useMemo(()=>{
    return FormatCurrencyToSign(currencyType)
  },[currencyType])

  const { config } = UseCreateDefaultConfigOrGetParsed()
  const isHidden = config.hidenAccountsId.includes(id)

  const handleHideClick=useCallback(()=>{
    let newHidenAcc
    if(isHidden){
      newHidenAcc=config.hidenAccountsId.filter((accountId: string)=> accountId!==id)
    } else{
      newHidenAcc=[...config.hidenAccountsId, id]
    }
    const newConfig = {
      device: 'browser',
      config: JSON.stringify({
        theme: config.theme,
        hidenAccountsId: newHidenAcc || []
      })
    }
    mutate({data: newConfig})
  },[isHidden, config])

  return(
    <div className="border rounded-md p-3">
      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <RectangleHorizontal size={40} strokeWidth={0.5} fill={cardFill} />
          <span className="font-semibold">E-{cardCategory}</span>
          {closeDateTime!=null && <span className="text-red font-semibold"> (счёт закрыт)</span>}
        </div>
        <div className="flex gap-2 font-semibold items-center">
          {cardTypeText} {cardCategory} карта
          <div onClick={handleHideClick} className="cursor-pointer">{isHidden ? <EyeOff size={18} /> : <Eye size={18} />}</div>
        </div>
      </div>
      <Link to={GENERATE_BANK_ACCOUNT_PAGE_URL('debit', id)}>
        <div className="mt-4">
          <div className="text-lg font-semibold">{balance} {currencySign}</div>
          <div className="text-[16px] font-medium">
            {accountName}
          </div>
          <div className="text-[16px] font-medium">{cardNumber?.replace(/(\d{4})(\d{4})(\d{2})/, '$1 $2 $3')}</div>
        </div>
      </Link>
    </div>
  )
}