import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { ticker: "AAPL" };

const tickerSlice = createSlice({
  name: "ticker",
  initialState,
  reducers: {
    getTicker(state, action: any) {
      state.ticker = action.payload;
    },
  },
});

const store = configureStore({ reducer: tickerSlice.reducer });

export const tickerActions = tickerSlice.actions;

export default store;
