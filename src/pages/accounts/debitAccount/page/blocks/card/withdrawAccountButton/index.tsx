import { useCallback } from "react"
import { PaymentAccountBody, useWithdrawAccount } from "@features/accounts"
import { Button, Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, Input, Label } from "@shared/components"
import { useSwitch } from "@shared/lib"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { PaymentButton } from "../paymentButton"
import { CircleArrowRight } from "lucide-react"

export type WithdrawAccountButtonProps={
  readonly accountId: string
  readonly balance: number
}

export const WithdrawAccountButton=({accountId, balance}: WithdrawAccountButtonProps)=>{
  
  const {control, handleSubmit, reset, formState: {errors}}=useForm<PaymentAccountBody>()
  const {mutate: withdraw}=useWithdrawAccount({accountId})

  const [isOpen, , ,handleClose, handleOpen]=useSwitch()
  
  const onClose=useCallback(()=>{
    reset()
    handleClose()
  },[reset, handleClose])

  const onSubmit: SubmitHandler<PaymentAccountBody>=useCallback((data)=>{
    if(data.money==undefined || data.currencyType==undefined || data.money>balance) return
    withdraw({data}, {onSuccess: onClose})
  },[])

  return(
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <PaymentButton onClick={handleOpen} icon={<CircleArrowRight size={28} />} text="Снять, со счёта карты" />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Снятие со счёта
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2">
          <div>
            <Label htmlFor="currencyType">
              Валюта
            </Label>
            <Controller 
              defaultValue=""
              name="currencyType"
              control={control}
              rules={{required: "Это обязательное поле"}}
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
            <Button type="submit" variant={'main'}>
              Снять
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}