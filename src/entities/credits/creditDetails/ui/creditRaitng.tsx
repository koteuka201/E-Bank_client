import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, Progress } from "@shared/components"
import { Spinner } from "@shared/ui"
import { AlertCircle, CreditCard, TrendingUp, User } from "lucide-react"
import { useGetCreditRaiting, useGetMyCreditRaiting } from "../api"
import { useSwitch } from "@shared/lib"

export type CreditRaitingModalProps={
  readonly raitingType: 'my' | 'other' 
  readonly userId?: string
}

export const CreditRaitingModal=({raitingType, userId}:CreditRaitingModalProps)=>{
  const [isOpen, , ,handleClose, handleOpen]=useSwitch()
  const {data: creditInfo, isLoading ,isFetching}= 
  raitingType === "other" && userId 
    ? useGetCreditRaiting({UserId: userId})
    : useGetMyCreditRaiting()

  const getCreditScoreColor = (score: number) => {
    if (score >= 70) return "text-green-500"
    if (score >= 40) return "text-amber-500"
    return "text-red"
  }

  const getCreditScoreProgressColor = (score: number) => {
    if (score >= 70) return "bg-green-500"
    if (score >= 40) return "bg-amber-500"
    return "bg-red"
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <div onClick={handleOpen} className="text-gray-400 dark:text-muted-foreground underline cursor-pointer">
        Посмотреть кредитную характеристику
      </div>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Кредитная информация</DialogTitle>
          <DialogDescription>Текущий кредитный статус и история</DialogDescription>
        </DialogHeader>
        {isLoading || isFetching ? (
          <div className="flex justify-center">
            <Spinner />
          </div>
        ) : !creditInfo ? (
          <div className="flex justify-center">no data...</div>
        ): (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-muted-foreground" />
                  <h3 className="font-medium">Кредитный рейтинг</h3>
                </div>
                <div className={`text-2xl font-bold ${getCreditScoreColor(creditInfo.creditScore)}`}>
                  {creditInfo.creditScore}
                </div>
              </div>
              <Progress
                // value={(creditInfo.creditScore / 85) * 10}
                value={(creditInfo.creditScore)}
                className={`h-2 ${getCreditScoreProgressColor(creditInfo.creditScore)}`}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Низкий (20)</span>
                <span>Пониженный (40)</span>
                <span>Хороший (70)</span>
                <span>Отличный (90+)</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Характеристика вашего рейтинга</p>
                  <p className="font-medium">{creditInfo.ratingDescription}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                <CreditCard className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Всего кредитов</p>
                  <p className="text-lg font-medium">{creditInfo.totalCredits}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                <AlertCircle
                  className={`h-5 w-5 ${creditInfo.overduePayments > 0 ? "text-red-500" : "text-muted-foreground"}`}
                />
                <div>
                  <p className="text-sm text-muted-foreground">Просроченные платежи</p>
                  <p className={`text-lg font-medium ${creditInfo.overduePayments > 0 ? "text-red-500" : ""}`}>
                    {creditInfo.overduePayments}
                  </p>
                </div>
              </div>
            </div>
            {raitingType==="other" &&
            <div className="pt-2 border-t border-border">
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <User className="h-3 w-3" />
                ID пользователя: {creditInfo.userId} 
              </p>
            </div>}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}