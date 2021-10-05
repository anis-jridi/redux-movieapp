import { createStore } from "redux";
import { reducerOfData } from "./reducer";

const store = createStore(reducerOfData);
export default store;
