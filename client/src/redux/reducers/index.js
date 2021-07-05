  
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import taskReminderReducer from './taskReminderReducer';

export default combineReducers({
    authReducer,
    taskReminderReducer,
})