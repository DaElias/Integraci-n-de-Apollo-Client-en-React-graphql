import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import { datoReducer } from "./reducer/datoReducer";
import thunk from "redux-thunk";


export const store = createStore(datoReducer, applyMiddleware(thunk));
