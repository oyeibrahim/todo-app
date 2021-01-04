import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

function TodoItem(props) {
    return (
        <View style={styles.item}>
            <Text>{props.item.text}</Text>
            <TouchableOpacity onPress={() => { props.pressHandler(props.item.key) }}>
                <MaterialIcons name='delete' size={18} color='#333' />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        margin: 16,
        padding: 16,
        borderColor: 'darkseagreen',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        backgroundColor: 'darkseagreen',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default TodoItem
