import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context'

const AllExpenses = () => {
  const expensesCtx= useContext(ExpensesContext)
  return (
    <ExpensesOutput expenses={expensesCtx.expenses}  expensesPeriod={'Total'} fallbackText={'no registered expenses found'}/>
  )
}

export default AllExpenses

const styles = StyleSheet.create({})