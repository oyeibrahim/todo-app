import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

function AppHeader() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My ToDos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        padding: 38,
        backgroundColor: 'coral'
    },
    title: {
        textAlign: 'center',
        color: 'whitesmoke',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default AppHeader
