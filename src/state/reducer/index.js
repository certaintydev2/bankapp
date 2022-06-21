import { combineReducers } from "redux";
import reducer from "./amountreducer";
import amountReducer from "./amountreducer"

const reducer1 = combineReducers({
    amount:amountReducer
});
export default reducer1;