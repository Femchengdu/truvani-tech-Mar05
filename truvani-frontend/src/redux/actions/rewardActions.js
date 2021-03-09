import { UPDATE_REWARDS } from "../types/actionTypes";

const updateRewards = (status) => ({
  type: UPDATE_REWARDS,
  status,
});

export { updateRewards };
