import { GetCreditForm, useGetCredit } from "@features/credits"
import { Button, Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@shared/components"
import { MY_CREDITS_PAGE_URL } from "@shared/config"
import { useSwitch } from "@shared/lib"
import { useCallback } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

export type GetCreditButtonProps={
  readonly id: string
  readonly creditLimit: number
}

export const GetCreditButton=({id,creditLimit}:GetCreditButtonProps)=>{
  
  const navigate=useNavigate()
  const {control, handleSubmit, reset, formState: {errors}}=useForm<GetCreditForm>()
  const {mutate: getCredit, isPending}=useGetCredit()

  const [isOpen, , ,handleClose, handleOpen]=useSwitch()
  
  const onClose=useCallback(()=>{
    reset()
    handleClose()
  },[reset, handleClose])

  const onSubmit: SubmitHandler<GetCreditForm>=useCallback((data)=>{
    if(data.amount==undefined || data.currencyType==undefined || data.accountName==undefined || data.amount>creditLimit) return
    getCredit({
      data: {
        tariffId: id,
        accountName: data.accountName,
        amount: data.amount,
        currencyType: data.currencyType
      }
    }, { 
      onSuccess: () => {
        onClose
        navigate(MY_CREDITS_PAGE_URL)
      } 
    })
  },[id, getCredit, onClose, creditLimit, navigate])

  return(
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <Button className='text-[14px]' onClick={handleOpen} size={"sm"} type="button" variant={"main"} >Оформить кредит</Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Оформление кредита
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2">
          <div>
            <Label htmlFor="currencyType">
              Валюта
            </Label>
            <Controller 
              defaultValue="RUB"
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
            <Label htmlFor="accountName">
              Название счёта
            </Label>
            <Controller 
              defaultValue=""
              name="accountName"
              control={control}
              rules={{required: "Это обязательное поле"}}
              render={({field})=>(
                <Input 
                  {...field}
                  id="accountName"
                  type="text"
                  placeholder="Введите название счёта"
                />
              )}
            />
            {errors.accountName && <span className="text-red text-sm">{errors.accountName.message}</span>}
          </div>
          <div>
            <Label htmlFor="amount">
              Сумма кредита
            </Label>
            <Controller 
              defaultValue={0}
              name="amount"
              control={control}
              rules={{
                required: "Это обязательное поле",
                min: { value: 1, message: "минимальная сумма 1"},
                validate: value => value <= creditLimit || "Превышен кредитный лимит"
              }}
              render={({field})=>(
                <Input 
                  {...field}
                  id="amount"
                  type="number"
                  placeholder="Введите сумму кредита"
                />
              )}
            />
            {errors.amount && <span className="text-red text-sm">{errors.amount.message}</span>}
          </div>
          <DialogFooter className="mt-4">
            <Button type="button" variant={'gray'} onClick={handleClose}>
              Отмена
            </Button>
            <Button isLoading={isPending} type="submit" variant={'main'}>
              Оформить
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}