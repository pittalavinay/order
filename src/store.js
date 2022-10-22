import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './indexx'
const middleare=[thunk]
const store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleare))
)

export default store