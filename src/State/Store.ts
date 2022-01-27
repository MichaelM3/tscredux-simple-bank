import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import rootReducer from './Reducers/rootReducer'
export * as bankActionCreators from "./Actions/BankActions"

const store = createStore(
    rootReducer, 
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store