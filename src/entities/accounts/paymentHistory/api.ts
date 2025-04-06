import { ApiTagsEnum, PaymentOperation, useApiQuery } from "@shared/api";
import { GetAccountsPaymentsHistoryRequestArgs, GetAccountsPaymentsHistoryResponse } from "./model";
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
import { useEffect, useRef, useState } from 'react'

export const useGetAccountsPaymentsHistory=(params: GetAccountsPaymentsHistoryRequestArgs)=>useApiQuery<GetAccountsPaymentsHistoryResponse>([ApiTagsEnum.Payments], '/Core/accounts/history', params)
export const useGetMyAccountsPaymentsHistory=(params: GetAccountsPaymentsHistoryRequestArgs)=>useApiQuery<GetAccountsPaymentsHistoryResponse>([ApiTagsEnum.Payments], '/Core/accounts/history/my', params)


export const useOperationsSignalR = (accountId: string) => {
  const connectionRef = useRef<signalR.HubConnection | null>(null)
  const [operations, setOperations] = useState<GetAccountsPaymentsHistoryResponse>()

  useEffect(() => {
    const connection = new HubConnectionBuilder()
      .withUrl(`https://your-domain.com/core-hub?accountId=${accountId}`, {
        accessTokenFactory: () => localStorage.getItem('token') || ''
      })
      .configureLogging(LogLevel.Information)
      .withAutomaticReconnect()
      .build()

    connectionRef.current = connection

    connection.on('OperationCreated', (operation: PaymentOperation) => {
      setOperations(prev => {
        if (!prev) return undefined

        return {
          ...prev,
          bankAccountOperations: [...prev.bankAccountOperations, operation]
        }
      })
    })

    connection
      .start()
      .then(() => console.log('✅ SignalR connected'))
      .catch(err => console.error('❌ SignalR error:', err))

    return () => {
      connection.stop()
    }
  }, [accountId])

  return operations
}
