import ActionTypes from '../ActionTypes';

const initialState = {
  tasks: [],
};

const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_TASKS:
      return {
        tasks: action.payload.tasks,
      };

    case ActionTypes.ADD_TASK:
            return { ...state,
                tasks: [...state.tasks, action.payload] };

    default:
      return state;
  }
};

export default TaskReducer;