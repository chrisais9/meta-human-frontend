import { AnyAction, CombinedState, combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import counterSlice, { CounterReducerState } from "./counter";
import walletSlice, { WalletReducerState } from "./wallet";

export interface IState {
  counter: CounterReducerState;
  wallet: WalletReducerState;
}

const rootReducer = (
  state: IState | undefined,
  action: AnyAction
): CombinedState<IState> => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        counter: counterSlice,
        wallet: walletSlice,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
