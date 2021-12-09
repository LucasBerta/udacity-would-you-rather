import { SET_QUESTIONS } from "../actions/questionAction";

export default function questionReducer(state = {}, action) {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        ...action.questions,
      };
    default:
      return state;
  }
}