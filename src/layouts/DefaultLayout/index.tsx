import { Outlet, useLoaderData, useOutletContext } from "react-router-dom"

import fixture from "@/loaders/fixture"
import Header from "@/components/Header"
import { AccountDetails } from '@/types'

const DefaultLayout = () => {
  const { avatar, name, balance, transactions } = useLoaderData() as typeof fixture
  const currentBalance = transactions.reduce((curBalance, { amount, type }) => {
    switch (type) {
      case 'credit':
        curBalance += amount
        break;
      case 'debit':
        curBalance -= amount
        break;
    }
    return curBalance
  }, balance)

  return (
    <div className="lg:max-w-4xl lg:mx-auto">
      <Header avatarURL={avatar} user={name} />
      <Outlet context={{ balance, transactions, currentBalance }} />
    </div>
  )
}

export function useAccountDetails() {
  return useOutletContext<AccountDetails>();
}

export default DefaultLayout
