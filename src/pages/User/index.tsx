import { useRef } from 'react'

import { useAccountDetails } from '@/layouts/DefaultLayout'
import Transaction from '@/components/Transaction'

const User = () => {
  const { balance, transactions, currentBalance } = useAccountDetails()
  const runningBalance = useRef(balance)

  return (
    <main className='p-3 lg:py-8 lg:px-0'>
      <h1 className='text-2xl md:text-4xl mb-5'>Current Balance: ${currentBalance.toLocaleString()}</h1>
      <h2 className='text-1xl md:text-3xl mb-2'>Transactions:</h2>
      <ul className='space-y-4'>
        {transactions.map((transaction, index) => {
          switch (transaction.type) {
            case 'credit':
              runningBalance.current += transaction.amount
              break;
            case 'debit':
              runningBalance.current -= transaction.amount
          }

          return (
            // I know "index" is a anti-pattern, but there's no real unique key/value for each transaction
            <Transaction key={index} transaction={transaction} resultingBalance={runningBalance.current} />
          )
        })}
      </ul>
    </main>
  )
}

export default User
 