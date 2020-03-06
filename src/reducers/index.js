import app from './app';
import github from './github';
import user from './user';
import register from './register';

export default {
  ...app,
  ...github,
  ...user,
  ...register,
};
