import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'
import Button from '../UI/Button'

const ExpenseForm = ({ onCancel,onSubmit,submitButtonLabel,defaultValues }) => {
  const [inputValues, setInputValues] = useState({
    amount: defaultValues?defaultValues.amount.toString():'',
    date:defaultValues?defaultValues.amount.toISOString().slice(0,10):'',
    description: defaultValues?defaultValues.amount.toString():'',
  })


  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputValues((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue
      }
    })
  }
  function submitHandler() {
    const expenseData={
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description
    }
    onSubmit(expenseData)
  }


  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label='Amount'
          textInputConfig={{
            type: 'decimal-pad',
            onChangeText: inputChangeHandler.bind(this, 'amount'),
            value: inputValues.amount
          }} />
        <Input
          style={styles.rowInput}
          label='Date'
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, 'date'),
            value: inputValues.date
          }}
        />
      </View>
      <Input label='Description'
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, 'description'),
          value: inputValues.description


        }}

      />
      <View style={styles.buttonContainer}>
        <Button style={styles.button} mode={'flat'} onPress={onCancel}>Cancel</Button>
        <Button style={styles.button} onPress={submitHandler}>{submitButtonLabel}</Button>
      </View>
    </View>
  )
}

export default ExpenseForm

const styles = StyleSheet.create({
  form: {
    marginTop: 50
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  rowInput: {
    flex: 1
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: 120,
    marginHorizontal: 8
  }
})