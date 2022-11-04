import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'

import fixture from "@/loaders/fixture"
import Transaction from '@/components/Transaction'

describe('Transaction', () => {
  it('displays properly', () => {
    const { getByText } = render(<Transaction transaction={fixture.transactions[0]} resultingBalance={3000} />)
    expect(getByText('$4.67')).toBeInTheDocument()
    expect(getByText('$3,000')).toBeInTheDocument()
  })
})
