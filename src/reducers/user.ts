
import { LOGIN_USER, LOGOUT_USER } from '../constants/actions';
import { Action, UserLevel } from '../constants/types';

interface UserLoginInfo {
    id: string;
    name: string;
    email: string;
    type: UserLevel;
}

interface UserProfile {
    address: string;
    phone: string;
}

interface UserState {
    user: UserLoginInfo | null;
    profile: UserProfile | null;
}

const INITIAL_USER_STATE: UserState = {
    user: null,
    profile: null
}

export function user_reducer(state: UserState = INITIAL_USER_STATE, action: Action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state, user: { id: action.payload.id, name: action.payload.name, email: action.payload.email, type: UserLevel.Issuer }
            }
        case LOGOUT_USER:
            return {
                ...state, user: null
            }
        default:
            return state;
    }
}