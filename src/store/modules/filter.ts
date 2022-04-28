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
    removeFilter(
      state,
      action: PayloadAction<{ filter: string; item: string }>
    ) {
      const prevState = state.filters[action.payload.filter] ?? [];
      const index = prevState.indexOf(action.payload.item, 0);
      if (index > -1) {
        prevState.splice(index, 1);
      }
      state.filters[action.payload.filter] = prevState;
    },
    resetFilter(state) {
      state.filters = {};
    },
  },
});

export const { addFilter, resetFilter, removeFilter } = filterSlice.actions;
export default filterSlice.reducer;
