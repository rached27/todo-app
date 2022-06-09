import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';

import TaskReducer from './reducers/task';

const rootReducer = combineReducers({
  task: TaskReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;