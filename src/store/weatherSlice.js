import {createSlice} from '@reduxjs/toolkit'
import getWeatherService from '../services/WeatherServices'

export const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        value: getWeatherService
    },
    reducers: {
        getWeather: (state) => {
            console.log(state)
        }
    }
})

export default weatherSlice.reducer