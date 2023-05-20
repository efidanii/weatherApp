import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchOneDayWeather = createAsyncThunk(
  "oneDayWeather/fetch",
  async function (payload) {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=bfbd51342c0748f3b6d123058232005&q=${payload}&days=30&aqi=no&alerts=no`
    );
    const data = await response.json();
    return data;
  }
);

const oneDayWeatherSlice = createSlice({
  name: "oneDayWeather",
  initialState: {
    city: "Майами",
    city2: "",
    oneDayWeatherArr: {},
    status: null,
    error: null,
  },
  reducers: {
    NewCity(state, action) {
      state.city = action.payload;
    },
  },
  extraReducers: {
    [fetchOneDayWeather.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchOneDayWeather.fulfilled]: (state, action) => {
      state.loading = "resolved";
      state.oneDayWeatherArr = action.payload;
    },
    [fetchOneDayWeather.rejected]: (state, action) => {},
  },
});
export const { NewCity } = oneDayWeatherSlice.actions;
export default oneDayWeatherSlice.reducer;
