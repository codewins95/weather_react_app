import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api =
  "https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=698ff3244c1a2c8841dccf3eea9cbc33";

export const weatherApi = createAsyncThunk("weatherApiCall", async () => {
  try {
    const response = await axios.get(api);
    return response.data;
  } catch (error) {
    console.log(error || error.message);
  }
});
const weatherSlise = createSlice({
  name: "weather",
  initialState: {
    data: {},
    loader: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(weatherApi.pending, (state, action) => {
      state.loader = true;
    });
    builder.addCase(weatherApi.fulfilled, (state, action) => {
      state.loader = false;
      state.data = action.payload;
    });
    builder.addCase(weatherApi.rejected, (state, action) => {
      state.loader = true;
    });
  },
});

export default weatherSlise.reducer;
