export type Transaction = {
  merchant: string
  date: string
  amount: number
  type: string
  details?: string
}

export type AccountDetails = {
  balance: number
  transactions: Transaction[]
  currentBalance: number
}
