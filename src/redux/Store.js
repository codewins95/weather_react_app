import { configureStore } from "@reduxjs/toolkit";
import weatherSlise from "./Weather.slice";


const store = configureStore({
  reducer: {
    weather:weatherSlise
  },
});

export default store;
