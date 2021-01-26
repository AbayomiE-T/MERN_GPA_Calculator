import { combineReducers } from 'redux'
import courseReducer from './courseReducer.js'

export default combineReducers({
    courseCollection: courseReducer
})