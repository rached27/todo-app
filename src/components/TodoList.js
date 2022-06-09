import {
    StyleSheet,
    Text,
    View,
    FlatList,
  } from "react-native";
  import React, {useEffect} from "react";
  import { useSelector } from "react-redux";
  import { useDispatch } from "react-redux";
  import { getElements } from "../redux/actions/task";
  
  const TodoList = () => {
      //Get tasks
    useEffect(() => {
     dispatch(getElements());
      }, []);

    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.task).tasks;
  
    //renderItem function
    const renderItem = ({ item }) => {
      return (
        <View style={styles.item}>
          <Text style={styles.title}>{item.task}</Text>
        </View>
      );
    };
  
    return (
      <View>
        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={(item, index) => 'key'+index}
        />
      </View>
    );
  };
  
  export default TodoList;
  
  const styles = StyleSheet.create({
    item: {
      backgroundColor: "#e9e9e9",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      justifyContent: "space-between",
      alignItems: "center",
    },
    title: {
      fontSize: 20,
    },
  });