import { applyMiddleware, createStore ,compose} from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import thunkMiddleware from 'redux-thunk'
const middlewareEnhancer = applyMiddleware( thunkMiddleware)



export const  store= createStore(reducer,{},compose(middlewareEnhancer))
  