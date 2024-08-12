import { ADD_COUNTER, SUB_COUNTER, RESET_COUNTER } from "../actions/actions.types";

const initalState = {
  amount: 0,
  name: "Deepak"
};

const counter = (state = initalState, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        amount: action.count
      };
      case SUB_COUNTER:
        return {
          amount: action.count
        };
    case RESET_COUNTER:
      return {
        amount: action.count
      };
    default:
      return state;
  }
};

export default counter;
