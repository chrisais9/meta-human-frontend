import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { walletSwitch: false };

export type JoyrideReducerState = typeof initialState;

const joyrideSlice = createSlice({
  name: "joyride",
  initialState,
  reducers: {
    setJoyrideWalletSwitch(state, action: PayloadAction<boolean>) {
      state.walletSwitch = action.payload;
    },
  },
});

export const { setJoyrideWalletSwitch } = joyrideSlice.actions;
export default joyrideSlice.reducer;
