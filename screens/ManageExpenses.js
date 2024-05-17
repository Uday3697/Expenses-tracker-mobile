import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import Button from '../components/UI/Button';
import { ExpensesContext } from '../store/expenses-context';

const ManageExpenses = ({ route, navigation }) => {
  const editExpenseId = route.params?.expenseId
  const isEditing = !!editExpenseId;

  const expenseCtx=useContext(ExpensesContext)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense"
    })
  }, [navigation, isEditing])

  function deletePress() {
    expenseCtx.deleteExpense(editExpenseId)
    navigation.goBack()

  }
  function cancelHandler() {
    navigation.goBack()

  }
  function confermHandler() {
    if(isEditing){
      expenseCtx.updateExpense(editExpenseId,
        {
          description:"test!!!!!!",
          amount:162,
          date :new Date('2024,05,20'),
        }
      )

    }else {
      expenseCtx.addExpense({
        description:"test",
        amount:12,
        date :new Date('2024,05,12'),
      })
    }
    navigation.goBack()

  }


  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} mode={'flat'} onPress={cancelHandler}>Cancel</Button>
        <Button style={styles.button} onPress={confermHandler}>{isEditing ? 'update' : 'Add'}</Button>
      </View>
      {isEditing &&
        (<View style={styles.deleteCOntainer}>
          <IconButton icon='trash' color={GlobalStyles.colors.error500} size={35} onpress={deletePress} />
        </View>
        )
      }
    </View>
  )
}

export default ManageExpenses

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800
  },
  deleteCOntainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button:{
    width:120,
    marginHorizontal:8
  }
})