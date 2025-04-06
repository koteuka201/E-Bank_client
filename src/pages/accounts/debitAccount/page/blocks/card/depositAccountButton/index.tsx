import { useCallback } from "react"
import { PaymentAccountBody, PaymentButton, useDepositAccount } from "@features/accounts"
import { Button, Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@shared/components"
import { useSwitch } from "@shared/lib"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { CircleFadingPlus } from "lucide-react"

export type DepositAccountButtonProps={
  readonly accountId: string
  readonly currencyType: string | undefined
}

export const DepositAccountButton=({accountId, currencyType}: DepositAccountButtonProps)=>{
  
  const {control, handleSubmit, reset, formState: {errors}}=useForm<PaymentAccountBody>()
  const {mutate: deposit, isPending}=useDepositAccount({accountId})

  const [isOpen, , ,handleClose, handleOpen]=useSwitch()
  
  const onClose=useCallback(()=>{
    reset()
    handleClose()
  },[reset, handleClose])

  const onSubmit: SubmitHandler<PaymentAccountBody>=useCallback((data)=>{
    if(data.money==undefined || data.currencyType==undefined) return
    deposit({data}, {onSuccess: onClose})
  },[deposit, onClose])

  return(
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <PaymentButton onClick={handleOpen} icon={<CircleFadingPlus size={28} />} text="Пополнить, счёт карты" />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Пополнение счёта
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2">
          <div>
            <Label htmlFor="currencyType">
              Валюта
            </Label>
            <Controller 
              defaultValue={currencyType ? currencyType : 'RUB'}
              name="currencyType"
              control={control}
              rules={{required: "Это обязательное поле",
                
              }}
              render={({field})=>(
                <Select onValueChange={field.onChange} {...field}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={'RUB'}>RUB</SelectItem>
                    <SelectItem value={'EUR'}>EUR</SelectItem>
                    <SelectItem value={'USD'}>USD</SelectItem>
                  </SelectContent>
                </Select>
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
            <Button isLoading={isPending} type="submit" variant={'main'}>
              Пополнить
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}