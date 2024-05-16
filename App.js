import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AllExpenses from './screens/AllExpenses'
import ManageExpenses from './screens/ManageExpenses'
import RecentExpenses from './screens/RecentExpenses'
import { StatusBar } from 'expo-status-bar'
import { GlobalStyles } from './constants/styles'
import { Ionicons } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator()

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator screenOptions={{
      headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      headerTintColor: "white",
      tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      tabBarActiveTintColor: GlobalStyles.colors.accent500
    }}>
      <BottomTabs.Screen name='RecentExpenses' component={RecentExpenses} options={{
        title: 'Recent Expenses',
        tabBarLabel: "Recent",
        tabBarIcon: ({ color, size }) => <Ionicons name='hourglass' color={color} />
      }} />
      <BottomTabs.Screen name='AllExpenses' component={AllExpenses} options={{
        title: 'All Expenses',
        tabBarLabel: "All Expenses",
        tabBarIcon: ({ color, size }) => <Ionicons name='calender' color={color} />
      }} />
    </BottomTabs.Navigator>
  )
}


const App = () => {
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{

        }}>
          <Stack.Screen
            name='ExpensesOverview'
            component={ExpensesOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen name='ManageExpense' component={ManageExpenses} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  )

}

export default App

const styles = StyleSheet.create({})