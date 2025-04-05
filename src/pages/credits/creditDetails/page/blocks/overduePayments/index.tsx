import { AlertCircle, Calendar, RussianRuble, User } from "lucide-react"
import { format } from "date-fns"
import { ru } from 'date-fns/locale'
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  Button,
  Card, 
  CardContent,
  Badge
} from "@shared/components"
import { FormatInitiatorToRus, FormatOperationTypeToRus, useSwitch } from "@shared/lib"
import { BankAccountOperationInitiator, BankAccountOperationStatus, BankAccountOperationType, PaymentOperation } from "@shared/api"
import { useGetOverduePayments } from "@entities/credits"

export type OverduePaymentsModalProps={
  readonly CreditId: string
}

export const OverduePaymentsModal=({CreditId}: OverduePaymentsModalProps)=>{
  const {data}=useGetOverduePayments({params:{CreditId}})
  const [isOpen, , ,handleClose, handleOpen]=useSwitch()
  const overduePayments: PaymentOperation[] = [
    {
      bankAccountOperationType: BankAccountOperationType.Replenishment,
      operatingMoney: 0,
      currentBalance: 0,
      previousBalance: 0,
      operationDateTime: "2025-04-05T07:23:42.776Z",
      bankAccountOperationInitiator: BankAccountOperationInitiator.User,
      bankAccountOperationStatus: BankAccountOperationStatus.Reject,
      bankAccountId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    },
    {
      bankAccountOperationType: BankAccountOperationType.Replenishment,
      operatingMoney: 0,
      currentBalance: 0,
      previousBalance: 0,
      operationDateTime: "2025-04-05T07:23:42.776Z",
      bankAccountOperationInitiator: BankAccountOperationInitiator.User,
      bankAccountOperationStatus: BankAccountOperationStatus.Reject,
      bankAccountId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    },
    {
      bankAccountOperationType: BankAccountOperationType.Replenishment,
      operatingMoney: 0,
      currentBalance: 0,
      previousBalance: 0,
      operationDateTime: "2025-04-05T07:23:42.776Z",
      bankAccountOperationInitiator: BankAccountOperationInitiator.User,
      bankAccountOperationStatus: BankAccountOperationStatus.Reject,
      bankAccountId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <Button onClick={handleOpen} variant="main">
        <AlertCircle className="mr-2 h-4 w-4" />
        Посмотреть просроченные платежи
      </Button>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Просроченные платежи</DialogTitle>
          <DialogDescription>Ознакомьтесь с вашими просроченными платежными операциями ниже.</DialogDescription>
        </DialogHeader>
        <div className="max-h-[60vh] overflow-y-auto pr-1">
          {overduePayments.length === 0 || data ? (
            <p className="text-center py-4 text-muted-foreground">Просроченных платежей не обнаружено.</p>
          ) : (
            overduePayments.map((payment, index) => (
              <Card key={index} className="mb-4">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">{FormatOperationTypeToRus(payment.bankAccountOperationType)}</h3>
                      <p className="text-sm text-muted-foreground">ID: {payment.bankAccountId.substring(0, 8)}...</p>
                    </div>
                    <Badge variant={payment.bankAccountOperationStatus === "Success" ? "outline" : "destructive"}>
                      {payment.bankAccountOperationStatus}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="flex items-center">
                      <RussianRuble className="h-4 w-4 mr-2 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Сумма</p>
                        <p className="font-medium">₽{payment.operatingMoney.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <RussianRuble className="h-4 w-4 mr-2 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Текущий баланс</p>
                        <p className="font-medium">₽{payment.currentBalance.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Дата</p>
                        <p className="font-medium">{format(new Date(payment.operationDateTime), "MMM d, yyyy", { locale: ru })}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Инициатор</p>
                        <p className="font-medium">{FormatInitiatorToRus(payment.bankAccountOperationInitiator)}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
        <div className="flex justify-end mt-4">
          <Button variant="outline" onClick={() => handleClose}>
            Закрыть
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

