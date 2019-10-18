
import {
    Action,
    ReducerFunc,
    AsyncFunc
} from '../constants/types';
import {
    LOGIN_USER,
    LOGOUT_USER
} from '../constants/actions';

import UserApi from '../apis/user';

export const Login: (user: string, pass: string) => AsyncFunc = (user, pass) => async (dispatch: ReducerFunc) => {
    UserApi.Login(user, pass).then((res) => {
        dispatch({ type: LOGIN_USER, payload: { id: '0000', name: 'testuser', email: 'test@gmail.com' } });
        return res;
    });
}

export const Logout: () => Action = () => ({ type: LOGOUT_USER, payload: undefined });