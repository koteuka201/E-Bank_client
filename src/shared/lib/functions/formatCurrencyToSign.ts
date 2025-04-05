import { CurrencyEnum } from "@shared/api";

export const FormatCurrencyToSign=(curency: CurrencyEnum | string | undefined)=>{
  switch (curency){
    case CurrencyEnum.RUB:
      return '₽'
    case CurrencyEnum.EUR:
      return '€'
    case CurrencyEnum.USD:
      return '$'
    default:
      return '₽'
  }
}