import { hideLoading, showLoading } from 'react-redux-loading';
import Cookies from 'js-cookie';

import { getInitialData } from "../api/api";
import { setUsersAction } from "./userAction";
import { handleSetLoggedUser } from './loginAction';
import { setQuestionsAction } from './questionAction';

export default function handleInitialData() {
  return async dispatch => {
    dispatch(showLoading());
    const { users, questions } = await getInitialData();
    dispatch(setUsersAction(users));
    dispatch(setQuestionsAction(questions));
    if (Cookies.get('loggedUser')) {
      const loggedUser = JSON.parse(Cookies.get('loggedUser'));
      dispatch(handleSetLoggedUser(users[loggedUser.id]));
    }
    dispatch(hideLoading());
  };
}