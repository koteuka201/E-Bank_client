import { CirclePlus } from "lucide-react"
import { Button, Card, Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, Input, Label } from "@shared/components"
import { useCallback } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { CreateAccountBody, useCreateAccount } from "@features/accounts"
import { useSwitch } from "@shared/lib"

export const CreateAccountButton=()=>{

  const {control, handleSubmit, reset, formState: {errors}}=useForm<CreateAccountBody>()
  const {mutate: createAccount, isPending}=useCreateAccount()

  const [isOpen, , ,handleClose, handleOpen]=useSwitch()

  const onClose=useCallback(()=>{
    reset()
    handleClose()
  },[reset, handleClose])

  const onSubmit: SubmitHandler<CreateAccountBody>=useCallback((data)=>{
    if(data.accountName==undefined || data.currencyType==undefined) return
    createAccount({data}, {onSuccess: onClose})
  },[createAccount, onClose])

  return(
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <div className="grid grid-cols-12 mt-4">
        <div className="col-span-3">
          <Card className="p-3 cursor-pointer" onClick={handleOpen}>
            <CirclePlus strokeWidth={1.5} size={28} />
            <div className="mt-[25px] font-semibold text-lg">Оформить</div>
            <div className="text-sm text-gray-600 font-semibold">счёт</div>
          </Card>
        </div>
      </div>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Создание нового счёта</DialogTitle>
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