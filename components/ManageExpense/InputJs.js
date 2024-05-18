import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputJs = ({label,keyboardType}) => {
  return (
    <View>
      <Text>Label</Text>
      <TextInput  keyboardType='keyboardType'/>
    </View>
  )
}

export default InputJs

const styles = StyleSheet.create({})