import { Transaction as TransactionType } from '@/types'

const Transaction = ({ transaction, resultingBalance }: { transaction: TransactionType, resultingBalance: number }) => {
  return (
    <li className='border-2 p-2'>
      <ul>
        <li>
          <span className='font-bold'>Amount:</span> ${transaction.amount.toLocaleString()}
        </li>
        <li>
        <span className='font-bold'>Type:</span> {transaction.type}
        </li>
        <li>
        <span className='font-bold'>Merchant:</span> {transaction.merchant}
        </li>
        <li>
        <span className='font-bold'>Details:</span> {transaction.details || 'N/A'}
        </li>
        <li>
        <span className='font-bold'>Running Balance:</span> ${resultingBalance.toLocaleString()}
        </li>
      </ul>
    </li>
  )
}

export default Transaction
