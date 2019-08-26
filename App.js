/* eslint-disable prettier/prettier */
import React, { useState } from "react"
import { StyleSheet, View, Text, TextInput, Button } from "react-native"

const App = () => {
  const [enteredGoal, setEnteredGoal] = useState("")

  const goalInputHandler = (enteredText) => {
    goalInputHandler(enteredText)
  }

  const addGoalHandler = () => {
    console.log(enteredGoal)
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input} 
          onChangeText={goalInputHandler}
          value={enteredGoal} />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10
  }
})

export default App
