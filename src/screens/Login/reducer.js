export const _INITIAL_STATE = {
    userData: {},
    isLoading: false,
    isLogged: false,
    lastError: undefined,
    hasError: false,
    resetNavigation: undefined
};

import {
  AUTH_ATTEMPT,
  AUTH_FAILED,
  AUTH_SUCCESS,
  AUTH_RESET_CONTROL_VARS,
  AUTH_LOGOUT, AUTH_NETWORK_ERROR
} from "./constants";

export default function (state: any = _INITIAL_STATE, action: Function) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                auth: action.auth,
                isLoggedIn: true,
                isLoading: false,
            };

        case AUTH_FAILED:
            return {
                ...state,
                lastError: action.lastError,
                hasError: action.hasError,
                isLoggedIn: false,
                isLoading: false,
            };
15
        case AUTH_NETWORK_ERROR:
            return {
                ...state,
                lastError: action.lastError,
                hasError: action.hasError,
                isLoggedIn: false,
                isLoading: false,
            };

        case AUTH_ATTEMPT:
            return {
                ...state,
                isLoading: action.isLoading,
                isLoggedIn: false
            };

        case AUTH_RESET_CONTROL_VARS:
            return {
                ...state,
                hasError: false,
                resetNavigation: undefined
            };

        case AUTH_LOGOUT:
            return {
                ...state,
                hasError: false,
                isLoggedIn: false,
                resetNavigation: action.resetNavigation
            };

        default:
            return state;
    }
}
