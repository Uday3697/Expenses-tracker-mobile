import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const IconButton = ({onpress,icon,color,size}) => {
    return (
        <Pressable onPress={onpress} style={({pressed})=>pressed && styles.pressed}>
            <View style={styles.buttonContainer}> 
                <Ionicons name={icon} color={color} size={size} />
            </View>
        </Pressable>
    )
}

export default IconButton

const styles = StyleSheet.create({
    buttonContainer:{
        borderRadius:24,
        padding:6,
        marginHorizontal:8,
        marginVertical:2
    },
    pressed:{
        opacity:0.75
    }
})