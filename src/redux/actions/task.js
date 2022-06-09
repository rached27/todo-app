import ActionTypes from '../ActionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const addElement = task => {
    saveTasksData(task);
  return { type: ActionTypes.ADD_TASK, payload: { task: task.task } };
};

export const getElements = () => {
  return async dispatch => {
    const taskData = await getTasksData();
    if (taskData) {
      dispatch({
        type: ActionTypes.GET_TASKS,
        payload: { tasks: taskData },
      });
    }
  };
};

const saveTasksData = async (task) => {
  var allTasks = await AsyncStorage.getItem('allTasks');
  allTasks = JSON.parse(allTasks ? allTasks : "[]")
  allTasks.push(task)

    await AsyncStorage.setItem(
        'allTasks',
        JSON.stringify(
            allTasks
        ),
      );
};

const getTasksData = async () => {
  var allTasks = await AsyncStorage.getItem('allTasks');

  allTasks = JSON.parse(allTasks ? allTasks : "[]")
  return allTasks;
};
