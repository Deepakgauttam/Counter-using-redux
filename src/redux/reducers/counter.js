// redux/reducers/counter.js
import { ADD_COUNTER, SUB_COUNTER, RESET_COUNTER } from "../actions/actions.types";

const initialState = {
  amount: 0,
  name: "Deepak",
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        ...state,
        amount: state.amount + 1,
      };
    case SUB_COUNTER:
      return {
        ...state,
        amount: state.amount > 0 ? state.amount - 1 : 0,
      };
    case RESET_COUNTER:
      return {
        amount: 0
      };
    default:
      return state;
  }
};

export default counter;
