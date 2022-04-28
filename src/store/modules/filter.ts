import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  filters: {} as Record<string, string[]>,
};

export type FilterReducerState = typeof initialState;

const filterSlice = createSlice({
  name: "gallery/filter",
  initialState,
  reducers: {
    addFilter(state, action: PayloadAction<{ filter: string; item: string }>) {
      state.filters[action.payload.filter] = [
        ...(state.filters[action.payload.filter]
          ? state.filters[action.payload.filter]
          : []),
        action.payload.item,
      ];
    },
    resetFilter(state) {
      state.filters = {};
    },
  },
});

export const { addFilter, resetFilter } = filterSlice.actions;
export default filterSlice.reducer;
