import { createStore } from "redux";
import rootReducers from "./redux/reducerIndex";


const result=createStore(rootReducers)

export default result