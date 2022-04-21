import { AnyAction, CombinedState, combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import counterSlice, { CounterReducerState } from "./counter";

export interface IState {
  counter: CounterReducerState;
}

const rootReducer = (
  state: IState,
  action: AnyAction
): CombinedState<IState> => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        counter: counterSlice,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
