import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { walletAddress: "" };

export type WalletReducerState = typeof initialState;

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    connect(state, action: PayloadAction<string>) {
      state.walletAddress = action.payload;
    },
  },
});

export const { connect } = walletSlice.actions;
export default walletSlice.reducer;
