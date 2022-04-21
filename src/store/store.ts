import { AnyAction, configureStore, Reducer } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import rootReducer, { IState } from "./modules/index";

const isDev = process.env.NODE_ENV === "development";

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer as Reducer<IState, AnyAction>,
    devTools: isDev,
  });

  return store;
};

const wrapper = createWrapper(createStore, {
  debug: isDev,
});
export default wrapper;
