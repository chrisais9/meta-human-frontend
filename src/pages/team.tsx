import { IState } from "@/store/modules";
import type { NextPage } from "next";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as counterActions from "@/store/modules/counter";

const Team: NextPage = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: IState) => state.counter.value);

  const plus = useCallback(() => {
    dispatch(counterActions.increment());
  }, [dispatch]);
  const minus = useCallback(() => {
    dispatch(counterActions.decrement());
  }, [dispatch]);

  const plus10 = useCallback(
    (value: number) => {
      dispatch(counterActions.incrementByValue(value));
    },
    [dispatch]
  );

  return (
    <div className="container mx-auto mt-32">
      <div>
        <h1>Counter</h1>
        <button className="m-3 bg-slate-500 p-1" onClick={() => minus()}>
          -
        </button>
        <button className="m-3 bg-slate-500 p-1" onClick={() => minus()}>
          -
        </button>
        <span>{value}</span>
        <button className="m-3 bg-slate-500 p-1" onClick={() => plus()}>
          +
        </button>
        <button className="m-3 bg-slate-500 p-1" onClick={() => plus10(10)}>
          +10
        </button>
      </div>
    </div>
  );
};

export default Team;
