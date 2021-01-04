import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import AddTodo from './components/AddTodo';
import AppHeader from './components/AppHeader';
import TodoItem from './components/TodoItem';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'First todo item', key: '1' },
    { text: 'Second todo item', key: '2' },
    // { text: 'Third todo item', key: '3' },
  ])

  //for telling if alert was closed
  const [alertClosed, setAlertClosed] = useState(false)

  //delete todo handler
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    })
  }

  //add new todo handler
  const submitHandler = (text) => {
    //only add new todo if text is greater than 3
    if (text.length > 3) {

      setTodos((prevTodos) => {
        // to get incrementing key so keys won't match
        let newKey = parseInt(prevTodos[prevTodos.length - 1].key) + 1
        return [...prevTodos, { text, key: newKey.toString() }]
      })

    } else {//if text not greater than 3, then alert the user

      //the onPress displays thanks message to the user after the alert is closed for
      //for 3 seconds
      Alert.alert('Error!', 'ToDos MUST be greater than 3 characters', [
        {
          text: 'I Understand',
          onPress: () => {
            setAlertClosed(true)
            setTimeout(() => {
              setAlertClosed(false)
            }, 3000);
          }
        }
      ])

    }
  }

  return (
    //using touchable to dismiss keyboard when something pressed outside
    //the input
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>

        {/* Header */}
        <AppHeader />

        <View style={styles.content}>

          {/* Form */}
          <AddTodo submitHandler={submitHandler} />

          {/* Thank user for dismissing alert */}
          {/* Only shows if alert dismissed */}
          {
            alertClosed &&
            <Text style={styles.thankText}>
              Thanks For Understanding
          </Text>
          }

          <View style={styles.list}>
            <FlatList

              // If no field "key" in the data, then we explicitly state what represents
              // the key. Below we state "id" is the "key"
              // keyExtractor={(item) => item.id}

              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}

            />
          </View>

        </View>

        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'wheat',
  },
  content: {
    padding: 30,
    flex: 1
  },
  list: {
    marginTop: 20,
    flex: 1
  },
  thankText: {
    alignSelf: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 5,
    borderRadius: 10
  }
});
