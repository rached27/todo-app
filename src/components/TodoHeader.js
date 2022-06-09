import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
  } from "react-native";
  import React, { useState } from "react";
  import { useDispatch } from "react-redux";
  import { addElement } from "../redux/actions/task";
  
  const TodoHeader = () => {
    const [todo, setTodo] = useState("");
  
    const dispatch = useDispatch();
  
    const onSubmitTask = () => {
      if (todo.trim().length === 0) {
        Alert.alert("You need to enter a task");
        setTodo("");
        return;
      }
  
      dispatch(
        addElement({
          task: todo,
        })
      );
      setTodo("");
    };
  
    return (
      <View>
        <Text
           style={styles.title}
        >
          Todo List
        </Text>
        <View
         style={styles.inputView}
        >
          <TextInput
            style={styles.textInput}
            placeholder="Add todo"
            onChangeText={setTodo}
            value={todo}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={onSubmitTask}
          >
            <Text style={styles.textButton}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default TodoHeader;
  

  const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
    },
    inputView: {
        justifyContent: "center",
        alignItems: "center",
    },
    textInput: {
        borderColor: "gray",
        borderWidth: 1,
        padding: 10,
        margin: 10,
        width: "90%",
        borderRadius: 5,
    },
    addButton: {
        backgroundColor: "black",
        padding: 10,
        margin: 10,
        width: "90%",
        borderRadius: 5,
        alignItems: "center",
    },
    textButton: {
        color: "white"
    },
  });