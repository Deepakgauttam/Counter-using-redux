// components/Counter.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addCounter,
  subCounter,
  resetCounter,
} from "../redux/actions/index.js";

const Counter = () => {
  const amount = useSelector((state) => state.counter.amount);
  const dispatch = useDispatch();

  return (
    <div>
      <h4>{amount}</h4>
      <button onClick={() => dispatch(addCounter())}>ADD</button>
      <button onClick={() => amount > 0 && dispatch(subCounter())}>SUB</button>
      <button onClick={() => dispatch(resetCounter())}>RESET</button>
    </div>
  );
};

export default Counter;
