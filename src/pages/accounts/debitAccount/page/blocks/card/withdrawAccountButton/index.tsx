import { useCallback } from "react"
import { PaymentButton, PaymentsForm, useTransferAccount, useWithdrawAccount } from "@features/accounts"
import { Button, Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@shared/components"
import { useSwitch } from "@shared/lib"
import { Controller, SubmitHandler, useForm, useWatch } from "react-hook-form"
import { CircleArrowRight } from "lucide-react"

export type WithdrawAccountButtonProps={
  readonly accountId: string
  readonly balance: number
  readonly currencyType: string | undefined
}

export const WithdrawAccountButton=({accountId, balance, currencyType}: WithdrawAccountButtonProps)=>{
  
  const {control, handleSubmit, reset, formState: {errors}}=useForm<PaymentsForm>()
  const {mutate: withdraw, isPending}=useWithdrawAccount({accountId})
  const {mutate: transfer, isPending: isPendingTransfer}=useTransferAccount()

  const [isOpen, , ,handleClose, handleOpen]=useSwitch()
  const type = useWatch({ control, name: "type", defaultValue: 'withdraw' })
  const onClose=useCallback(()=>{
    reset()
    handleClose()
  },[reset, handleClose])

  const onSubmit: SubmitHandler<PaymentsForm>=useCallback((data)=>{
    if(data.currencyType==undefined || (data.type==="withdraw" && (data.money==undefined || data.money>balance)) || (data.type==="transfer" && (data.amount==undefined || data.toAccountId==undefined))) return
    if(data.type==="transfer"){
      transfer({data:{
        currencyType: data.currencyType,
        toAccountId: data.toAccountId,
        amount: data.amount,
        fromAccountId: accountId
      }}, {onSuccess: onClose})
    } else{
      withdraw({data}, {onSuccess: onClose})
    }
  },[withdraw, onClose, balance])

  return(
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <PaymentButton onClick={handleOpen} icon={<CircleArrowRight size={28} />} text="Снять/перевести, со счёта карты" />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Снятие со счёта
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2">
          <div>
            <Label htmlFor="paymentFrom">
              Тип операции
            </Label>
            <Controller 
              defaultValue={'withdraw'}
              name="type"
              control={control}
              rules={{required: "Это обязательное поле"}}
              render={({field})=>(
                <Select onValueChange={field.onChange} {...field}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={'withdraw'}>Снятие</SelectItem>
                    <SelectItem value={'transfer'}>Перевод</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.type && <span className="text-red text-sm">{errors.type.message}</span>}
          </div>
          <div>
            <Label htmlFor="currencyType">
              Валюта
            </Label>
            <Controller 
              defaultValue={currencyType ? currencyType : ''}
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
          {type === 'withdraw' &&
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
          }
          {type === 'transfer' && (
            <>
              <div>
                <Label htmlFor="amount">
                  Сумма
                </Label>
                <Controller 
                  defaultValue={0}
                  name="amount"
                  control={control}
                  rules={{
                    required: "Это обязательное поле",
                    min: { value: 1, message: "минимальная сумма 1"},
                    validate: value => value <= balance || "Недостаточно средств"
                  }}
                  render={({field})=>(
                    <Input 
                      {...field}
                      id="amount"
                      type="number"
                      placeholder="Введите сумму перевода"
                    />
                  )}
                />
                {errors.amount && <span className="text-red text-sm">{errors.amount.message}</span>}
              </div>
              <div>
                <Label htmlFor="toAc">
                  ID счета
                </Label>
                <Controller 
                  defaultValue={''}
                  name="toAccountId"
                  control={control}
                  rules={{required: "Это обязательное поле"}}
                  render={({field})=>(
                    <Input 
                      {...field}
                      id="toAccountId"
                      type="text"
                      placeholder="Введите id счёта"
                    />
                  )}
                />
                {errors.toAccountId && <span className="text-red text-sm">{errors.toAccountId.message}</span>}
              </div>
            </>
          )}
          <DialogFooter className="mt-4">
            <Button type="button" variant={'gray'} onClick={handleClose}>
              Отмена
            </Button>
            <Button isLoading={isPending || isPendingTransfer} type="submit" variant={'main'}>
              {type==="transfer" ? 'Перевести' : 'Снять'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}