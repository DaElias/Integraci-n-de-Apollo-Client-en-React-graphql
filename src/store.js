import { createStore } from "@reduxjs/toolkit";
import { datoReducer } from "./reducer/datoReducer";

export const store = createStore(datoReducer);