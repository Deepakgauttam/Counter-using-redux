// redux/actions/index.js
import { ADD_COUNTER, SUB_COUNTER, RESET_COUNTER } from "./actions.types";

export const addCounter = () => ({
  type: ADD_COUNTER,
});

export const subCounter = () => ({
  type: SUB_COUNTER,
});

export const resetCounter = () => ({
  type: RESET_COUNTER,
});
