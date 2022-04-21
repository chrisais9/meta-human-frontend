import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState } from ".";

const initialState = { value: 0 };

export type CounterReducerState = typeof initialState;

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    incrementByValue(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;
