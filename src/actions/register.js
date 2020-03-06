// @flow
/**
 * @module Actions/User
 * @desc User Actions
 */
import { createActions } from 'redux-actions';

import { ActionTypes } from 'constants/index';

export const { userRegister: register } = createActions({
  [ActionTypes.USER_REGISTER]: (user) => user
  
});
