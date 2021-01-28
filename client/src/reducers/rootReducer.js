import { combineReducers } from 'redux'
import courseReducer from './courseReducer.js'
import errorReducer from './errorReducer.js'
import authReducer from './authReducer.js'

export default combineReducers({
    courseCollection: courseReducer,
    error: errorReducer,
    auth: authReducer
})