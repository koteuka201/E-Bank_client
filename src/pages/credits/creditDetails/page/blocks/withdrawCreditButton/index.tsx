import { useCallback } from "react"
import { PaymentButton, useWithdrawCreditAccount } from "@features/accounts"
import { Button, Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@shared/components"
import { useSwitch } from "@shared/lib"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { CircleArrowRight } from "lucide-react"
import { PaymentCreditForm, useWithdrawCredit } from "@features/credits"

export type WithdrawCreditButtonProps={
  readonly creditId: string
  readonly balance: number
}

export const WithdrawCreditButton=({creditId, balance}: WithdrawCreditButtonProps)=>{
  
  const {control, handleSubmit, reset, formState: {errors}}=useForm<PaymentCreditForm>()
  const {mutate: withdraw, isPending: isDepositCredit}=useWithdrawCredit({creditId: creditId})
  const {mutate: withdrawFromDebit, isPending: DepositCreditAccount}=useWithdrawCreditAccount({accountId: creditId})

  const [isOpen, , ,handleClose, handleOpen]=useSwitch()
  
  const onClose=useCallback(()=>{
    reset()
    handleClose()
  },[reset, handleClose])

  const onSubmit: SubmitHandler<PaymentCreditForm>=useCallback((data)=>{
    if(data.money==undefined || data.currencyType==undefined || data.money>balance) return
    if(data.paymentFrom==='Credit'){
      withdraw({data}, {onSuccess: onClose})
    } else{
      withdrawFromDebit({data}, {onSuccess: onClose})
    }
    
  },[withdraw,withdrawFromDebit, onClose, balance])

  return(
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <PaymentButton onClick={handleOpen} icon={<CircleArrowRight size={28} />} text="Снять, с кредитного счёта" />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Снятие с кредитного счёта
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2">
          <div>
            <Label htmlFor="paymentFrom">
              Снять на
            </Label>
            <Controller 
              defaultValue={'DebitCard'}
              name="paymentFrom"
              control={control}
              rules={{required: "Это обязательное поле"}}
              render={({field})=>(
                <Select onValueChange={field.onChange} {...field}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={'DebitCard'}>дебетовый счёт</SelectItem>
                    <SelectItem value={'Credit'}>кредитный счёт</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.paymentFrom && <span className="text-red text-sm">{errors.paymentFrom.message}</span>}
          </div>
          <div>
            <Label htmlFor="currencyType">
              Валюта
            </Label>
            <Controller 
              defaultValue="RUB"
              name="currencyType"
              control={control}
              rules={{required: "Это обязательное поле",
                pattern: {
                  value: /^[A-Z]{1,5}$/,
                  message: "Разрешены только латинские буквы в верхнем регистре (до 5 символов)"
                }
              }}
              render={({field})=>(
                <Input 
                  {...field}
                  id="currencyType"
                  type="text"
                  placeholder="Введите тип валюты"
                />
              )}
            />
            {errors.currencyType && <span className="text-red text-sm">{errors.currencyType.message}</span>}
          </div>
          <div>
            <Label htmlFor="money">
              Сумма
            </Label>
            <Controller 
              defaultValue={0}
              name="money"
              control={control}
              rules={{
                required: "Это обязательное поле",
                min: { value: 1, message: "минимальная сумма 1"},
                validate: value => value <= balance || "Недостаточно средств"
              }}
              render={({field})=>(
                <Input 
                  {...field}
                  id="money"
                  type="number"
                  placeholder="Введите сумму пополнения"
                />
              )}
            />
            {errors.money && <span className="text-red text-sm">{errors.money.message}</span>}
          </div>
          <DialogFooter className="mt-4">
            <Button type="button" variant={'gray'} onClick={handleClose}>
              Отмена
            </Button>
            <Button isLoading={DepositCreditAccount || isDepositCredit} type="submit" variant={'main'}>
              Снять
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}