import { SET_USERS } from "../actions/userAction";

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...action.users,
      };
    default:
      return state;
  }
}