/**
 * @module Sagas/GitHub
 * @desc GitHub
 */

import { all, call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'modules/client';

import { ActionTypes } from 'constants/index';

import { registerUserService } from 'services/authenticationService';

const REGISTER_API_ENDPOINT = 'http://localhost:3000/api/v1/register';
    

/**
 * Get Repos
 *
 * @param {Object} action
 *
 */
export function* setRegister({ payload }) {
    
    
  try {
      
    //console.log(payload);
    const response = yield call(
      registerUserService,

        {
          formData:payload
        }
    );
    yield put({
      type: ActionTypes.USER_REGISTER_SUCCESS,
      payload: { data: response},
    });
  } catch (err) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.USER_REGISTER_FAILURE,
      payload: err,
    });
  }
}

/**
 * GitHub Sagas
 */
export default function* root() {
  yield all([takeLatest(ActionTypes.USER_REGISTER, setRegister)]);
}
