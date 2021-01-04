import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'

function AddTodo(props) {

    const [text, setText] = useState('');

    //input to state
    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='Enter New ToDo Item'
                value={text}
                onChangeText={changeHandler}
            />
            <Button
                onPress={() => {
                    props.submitHandler(text);
                    // to reset the input
                    changeHandler('');
                }}
                title='Add ToDo'
                color='coral'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: 'green'
    }
})

export default AddTodo
