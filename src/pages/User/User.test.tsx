import { describe, expect, it } from 'vitest'

import fixture from "@/loaders/fixture"
import { renderWithContext } from '@/test/utils'
import User from '@/pages/User'
import { AccountDetails }  from '@/types'

describe('User', () => {
  it('displays the words', () => {
    const { getByText } = renderWithContext<AccountDetails>({ context: {balance: fixture.balance, transactions: fixture.transactions, currentBalance: 212}, children: <User /> })
    expect(getByText('Current Balance: $212')).toBeInTheDocument()
    expect(getByText('Transactions:')).toBeInTheDocument()
    expect(getByText('$998,913.61')).toBeInTheDocument()
  })
})
