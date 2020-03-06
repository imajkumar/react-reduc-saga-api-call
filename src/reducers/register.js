import { handleActions } from 'modules/helpers';

import { STATUS, ActionTypes } from 'constants/index';

export const registerState = {
  isSuccess: false,
  status: STATUS.IDLE,
};

export default {
  user_register: handleActions(
    {
      [ActionTypes.USER_REGISTER]: draft => {
        draft.status = STATUS.RUNNING;
      },
      [ActionTypes.USER_REGISTER_SUCCESS]: draft => {
        draft.isSuccess = true;
        draft.status = STATUS.READY;
      },
     
      [ActionTypes.USER_REGISTER_FAILURE]: draft => {
        draft.isSuccess = false;
        draft.status = STATUS.IDLE;
      },
    },
    registerState,
  ),
};
