import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCounter, subCounter, resetCounter } from "../redux/actions/index";

const Counter = () => {
  const { amount } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addCounter());
  };

  const handleSub = () => {
    if (amount > 0) {
      dispatch(subCounter());
    } else {
      return;
    }
  };

  const handleReset = () => {
    dispatch(resetCounter());
  };

  return (
    <div>
      <h4>{amount}</h4>
      <button onClick={handleAdd}> ADD </button>
      <button onClick={handleSub}> SUB </button>
      <button onClick={handleReset}> RESET </button>
    </div>
  );
};

export default Counter;
