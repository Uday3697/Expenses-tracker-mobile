import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context'
import { getDateMinusDays } from '../util/date'

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date()
    const date7DaysAgo = getDateMinusDays(today, 7)
    return expense.date > date7DaysAgo && (expense.date <=today);
  })
  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod={"last seven days"} fallbackText={'No expenses registered Last seven days'} />
  )
}

export default RecentExpenses

const styles = StyleSheet.create({})