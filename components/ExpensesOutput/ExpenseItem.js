import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constants/styles'
import { getFormattedDate } from '../../util/date'

export default function ExpenseItem({ amount, date, description }) {
    return (
        <Pressable>
            <View style={styles.item}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>{description}</Text>
                    <Text style={styles.textBase} >{getFormattedDate(date)}</Text>
                </View>

                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{amount.toFixed(2)}</Text>
                </View>
            </View>

        </Pressable>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6, elevation: 3,
        shadowColor: GlobalStyles.colors.primary500,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4
    },
    textBase: {
        color: GlobalStyles.colors.primary50,

    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold'
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4, backgroundColor: "white",
        justifyContent: "center",
        borderRadius: 4,
        minWidth:80,

    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: "bold",

    }
})