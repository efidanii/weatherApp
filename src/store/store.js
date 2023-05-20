import { configureStore } from "@reduxjs/toolkit";
import oneDayWeatherReducer from "./weatherSlice";
export const store = configureStore({
  reducer: oneDayWeatherReducer,
});
