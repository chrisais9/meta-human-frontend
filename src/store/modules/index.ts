import { AnyAction, CombinedState, combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import joyrideSlice, { JoyrideReducerState } from "./joyride";
import walletSlice, { WalletReducerState } from "./wallet";
import filterSlice, { FilterReducerState } from "./filter";

export interface IState {
  joyride: JoyrideReducerState;
  wallet: WalletReducerState;
  filter: FilterReducerState;
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
        joyride: joyrideSlice,
        wallet: walletSlice,
        filter: filterSlice,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
