import {
  configureStore
} from '@reduxjs/toolkit'
import getWeather from './weatherSlice'

export default configureStore({
  reducer: {
    weather: getWeather,
  },
})