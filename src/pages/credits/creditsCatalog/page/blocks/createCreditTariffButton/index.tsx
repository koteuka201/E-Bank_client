import { CirclePlus } from "lucide-react"
import { Button, Card, Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@shared/components"
import { useCallback } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { useSwitch } from "@shared/lib"
import { CreateTariffBody, useCreateCreditTariff } from "@features/credits"
import { PaymentType } from "@shared/api"

export const CreateCreditTariffButton=()=>{

  const {control, handleSubmit, reset, formState: {errors}}=useForm<CreateTariffBody>()
  const {mutate: createTariff, isPending}=useCreateCreditTariff()

  const [isOpen, , ,handleClose, handleOpen]=useSwitch()

  const onClose=useCallback(()=>{
    reset()
    handleClose()
  },[reset, handleClose])

  const onSubmit: SubmitHandler<CreateTariffBody>=useCallback((data)=>{
    if(
      data.creditLimit==undefined || 
      data.interestRate==undefined || 
      data.minimumPayment==undefined || 
      data.name==undefined || 
      data.paymentType==undefined
    ) return
    createTariff({data}, {onSuccess: onClose})
  },[createTariff, onClose])

  return(
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <div className="grid grid-cols-12 mt-4">
        <div className="col-span-3">
          <Card className="p-3 cursor-pointer" onClick={handleOpen}>
            <CirclePlus strokeWidth={1.5} size={28} />
            <div className="mt-[25px] font-semibold text-lg">Создать</div>
            <div className="text-sm text-gray-600 font-semibold">кредитный тариф</div>
          </Card>
        </div>
      </div>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Создание нового кредитного тарифа</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2">
          <div>
            <Label htmlFor="name">
              Название
            </Label>
            <Controller 
              defaultValue=""
              name="name"
              control={control}
              rules={{required: "Это обязательное поле"}}
              render={({field})=>(
                <Input 
                  {...field}
                  id="name"
                  type="text"
                  placeholder="Введите название тарифа"
                />
              )}
            />
            {errors.name && <span className="text-red text-sm">{errors.name.message}</span>}
          </div>
          <div>
            <Label htmlFor="interestRate">
              Процентная ставка
            </Label>
            <Controller 
              defaultValue={0}
              name="interestRate"
              control={control}
              rules={{required: "Это обязательное поле",
                min: { value: 0, message: "минимальная сумма 0"},
              }}
              render={({field})=>(
                <Input 
                  {...field}
                  id="interestRate"
                  type="number"
                  placeholder="Введите процентную ставку"
                />
              )}
            />
            {errors.interestRate && <span className="text-red text-sm">{errors.interestRate.message}</span>}
          </div>
          <div>
            <Label htmlFor="creditLimit">
              Кредитный лимит
            </Label>
            <Controller 
              defaultValue={0}
              name="creditLimit"
              control={control}
              rules={{required: "Это обязательное поле", min: { value: 1, message: "минимальное значение 1"}}}
              render={({field})=>(
                <Input 
                  {...field}
                  id="creditLimit"
                  type="number"
                  placeholder="Введите лимит"
                />
              )}
            />
            {errors.creditLimit && <span className="text-red text-sm">{errors.creditLimit.message}</span>}
          </div>
          <div>
            <Label htmlFor="minimumPayment">
              Минимальный платеж
            </Label>
            <Controller 
              defaultValue={0}
              name="minimumPayment"
              control={control}
              rules={{required: "Это обязательное поле",
                min: { value: 0, message: "минимальная сумма 0"},
              }}
              render={({field})=>(
                <Input 
                  {...field}
                  id="minimumPayment"
                  type="number"
                  placeholder="Введите минимальный платеж"
                />
              )}
            />
            {errors.minimumPayment && <span className="text-red text-sm">{errors.minimumPayment.message}</span>}
          </div>
          <div>
            <Label htmlFor="paymentType">
              Вид платежа
            </Label>
            <Controller 
              defaultValue={PaymentType.Daily}
              name="paymentType"
              control={control}
              rules={{required: "Это обязательное поле"}}
              render={({field})=>(
                <Select onValueChange={field.onChange} {...field}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите роль" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={PaymentType.Daily}>Ежедневный</SelectItem>
                    <SelectItem value={PaymentType.Weekly}>Еженедельный</SelectItem>
                    <SelectItem value={PaymentType.Monthly}>Ежемесячный</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.paymentType && <span className="text-red text-sm">{errors.paymentType.message}</span>}
          </div>
          <DialogFooter className="mt-4">
            <Button type="button" variant={'gray'} onClick={handleClose}>
              Отмена
            </Button>
            <Button isLoading={isPending} type="submit" variant={'main'}>
              Создать
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}