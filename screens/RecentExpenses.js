import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'

const RecentExpenses = () => {
  return (
    <ExpensesOutput expensesPeriod={"last seven days"} />
  )
}

export default RecentExpenses

const styles = StyleSheet.create({})