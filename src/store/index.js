import {createStore,combineReducers} from 'redux'
import user from './user'
let reducer = combineReducers({
  user
})
let store = createStore(reducer)
export default store