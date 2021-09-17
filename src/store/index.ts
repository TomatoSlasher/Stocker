import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { ticker: "AAPL", menu: false };

const tickerSlice = createSlice({
  name: "ticker",
  initialState,
  reducers: {
    getTicker(state, action: any) {
      state.ticker = action.payload;
    },
  },
});

const hamburgerSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    getMenu(state, action: any) {
      console.log(state);
      state.menu = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { ticker: tickerSlice.reducer, hamburger: hamburgerSlice.reducer },
});

export const tickerActions = tickerSlice.actions;
export const hamburgerActions = hamburgerSlice.actions;

export default store;
