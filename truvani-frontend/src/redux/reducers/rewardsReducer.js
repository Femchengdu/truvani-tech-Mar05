import { UPDATE_REWARDS } from "../types/actionTypes";
const INITIAL_STATE = "Unearned";
const rewardsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_REWARDS:
      return action.status;
    default:
      return state;
  }
};

export default rewardsReducer;
