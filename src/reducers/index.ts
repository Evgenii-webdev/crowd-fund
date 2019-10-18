
import { combineReducers } from 'redux';

import { user_reducer } from './user';

export default combineReducers({
    user: user_reducer
});
