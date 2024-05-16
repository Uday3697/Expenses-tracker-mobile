import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'


const Dummy_EXPENSES = [
    {
        id: 'e1',
        description:'a pair of shoes',
        amount :3424.4534,
        date:new Date('2024-04-13')
    },
    {
        id: 'e2',
        description:'a pair of shoes',
        amount :3424.4534,
        date:new Date('2024-04-12')
    },
    {
        id: 'e3',
        description:'a pair sleeprs',
        amount :342.4534,
        date:new Date('2024-04-11')
    },
    {
        id: 'e4',
        description:'book',
        amount :544.4534,
        date:new Date('2024-04-1')
    },
]





const ExpensesOutput = ({ expenses, expensesPeriod }) => {
    return (
        <View>
            <ExpensesSummary expenses={Dummy_EXPENSES} expensesPeriod={expensesPeriod} />
            <ExpensesList />
        </View>
    )
}

export default ExpensesOutput

const styles = StyleSheet.create({})