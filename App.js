import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
import IconButton from './components/UI/IconButton'


const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator()

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton icon={'add'}
            color={tintColor}
            size={30}
            onpress={() => navigation.navigate('ManageExpense')}
          />
        ),
      })}
    >
      <BottomTabs.Screen name='RecentExpenses' component={RecentExpenses} options={{
        title: 'Recent Expenses',
        tabBarLabel: "Recent",
        tabBarIcon: ({ color, size }) => <Ionicons name='hourglass' color={color} size={size} />
      }} />
      <BottomTabs.Screen name='AllExpenses' component={AllExpenses} options={{
        title: 'All Expenses',
        tabBarLabel: "All Expenses",
        tabBarIcon: ({ color, size }) => <Ionicons name='calendar' color={color} size={size} />
      }} />
    </BottomTabs.Navigator>
  )
}


const App = () => {
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: 'white'
          }}
        >
          <Stack.Screen
            name='ExpensesOverview'
            component={ExpensesOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen name='ManageExpense' component={ManageExpenses} options={{
            title: 'Manage Expenses',
            presentation: 'modal'
          }} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  )

}

export default App;

const styles = StyleSheet.create({})