import { ApiTagsEnum, PaymentOperation, useApiQuery } from "@shared/api";
import { GetAccountsPaymentsHistoryRequestArgs, GetAccountsPaymentsHistoryResponse } from "./model";
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
import { useEffect, useRef, useState } from 'react'

export const useGetAccountsPaymentsHistory=(params: GetAccountsPaymentsHistoryRequestArgs)=>useApiQuery<GetAccountsPaymentsHistoryResponse>([ApiTagsEnum.Payments], '/Core/accounts/history', params)
export const useGetMyAccountsPaymentsHistory2=(params: GetAccountsPaymentsHistoryRequestArgs)=>useApiQuery<GetAccountsPaymentsHistoryResponse>([ApiTagsEnum.Payments], '/Core/accounts/history/my', params)


export const useOperationsSocket = (accountId: string) => {
  const connectionRef = useRef<signalR.HubConnection | null>(null)
  const [operations, setOperations] = useState<GetAccountsPaymentsHistoryResponse>()

  useEffect(() => {
    const connection = new HubConnectionBuilder()
      .withUrl(`http://158.160.18.15:5001/Core/accounts/history?BankAccountsIds=${accountId}`, {
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
      .then(() => console.log('SignalR connected'))
      .catch(err => console.error('SignalR error:', err))

    return () => {
      connection.stop()
    }
  }, [accountId])

  return operations
}
export const useGetMyAccountsPaymentsHistory = (accountId: string, type: 'my'| 'other') => {
  const connectionRef = useRef<signalR.HubConnection | null>(null)
  const [operations, setOperations] = useState<GetAccountsPaymentsHistoryResponse>()
  
  const commonHistory = useGetAccountsPaymentsHistory({
    UsersIds: undefined,
    BankAccountsIds: [accountId],
    OperationDateTime: undefined,
    BankAccountOperationInitiator: undefined,
    BankAccountOperationStatus: undefined,
    BankAccountType: undefined
  })
  const myHistory = useGetMyAccountsPaymentsHistory2({
    UsersIds: undefined,
    BankAccountsIds: [accountId],
    OperationDateTime: undefined,
    BankAccountOperationInitiator: undefined,
    BankAccountOperationStatus: undefined,
    BankAccountType: undefined
  })
  const { data, refetch } =
    type === "my"
      ? myHistory
      : commonHistory
  // const {data, refetch}=useGetMyAccountsPaymentsHistory2({
  //   UsersIds: undefined,
  //   BankAccountsIds: [accountId],
  //   OperationDateTime: undefined,
  //   BankAccountOperationInitiator: undefined,
  //   BankAccountOperationStatus: undefined,
  //   BankAccountType: undefined
  // })

  useEffect(() => {
    if(data){
      setOperations(data)
    }
    const connection = new HubConnectionBuilder()
      .withUrl(`http://158.160.18.15:5001/core-hub`, {
        accessTokenFactory: () => { 
          return localStorage.getItem('token') || ''}
      })
      .configureLogging(LogLevel.Information)
      .withAutomaticReconnect()
      .build()

    connectionRef.current = connection

    connection.on('OperationCreated', async(operationStr: string) => {      
      const operation: PaymentOperation = JSON.parse(operationStr)
      console.log(operation)
      // setOperations(prev => {
      //   console.log('setOper')
      //   if (!prev) return {bankAccountOperations: [operation]}
      //   return {
      //     ...prev,
      //     bankAccountOperations: [...prev.bankAccountOperations, operation]
      //   }
      // })
      const{data}=await refetch()
      setOperations(data)
    })

    connection
      .start()
      .then(() => console.log('Success'))
      .catch(err => console.error('EErr:', err))

    return () => {
      connection.stop()
    }
  }, [data])

  console.log(operations)
  return {
    data: operations
  }
}
