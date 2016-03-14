/**
 * 把今天最好的表现当作明天最新的起点．．～
 * いま 最高の表現 として 明日最新の始発．．～
 * Today the best performance  as tomorrow newest starter!
 * Created by IntelliJ IDEA.
 *
 * @author: xiaomo
 * @github: https://github.com/qq83387856
 * @email: hupengbest@163.com
 * @QQ_NO: 83387856
 * @Date: 2016/3/11 9:54
 * @Description: 首页操作
 * @Copyright(©) 2015 by xiaomo.
 **/

import * as actionTypes from '../constants/ActionTypes';

const initialState = {
    loggingIn: false
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                loggingIn: true
            };
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                user: action.result
            };
        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                loggingIn: false,
                user: null,
                loginError: action.error
            };
        case actionTypes.LOGOUT:
            return {
                ...state,
                loggingOut: true
            };
        case actionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                loggingOut: false,
                user: null
            };
        case actionTypes.LOGOUT_FAIL:
            return {
                ...state,
                loggingOut: false,
                logoutError: action.error
            };
        default:
            return state;
    }
}


export function login() {
    return {
        types: [actionTypes.LOGIN, actionTypes.LOGIN_SUCCESS, actionTypes.LOGIN_FAIL],
        promise: (fetch('http://www.xiaomo.info/api/login')
                .then(result=>result.json())
        )
    };
}

export function logout() {
    return {
        types: [actionTypes.LOGOUT, actionTypes.LOGOUT_SUCCESS, actionTypes.LOGOUT_FAIL],
        promise: (fetch('http://www.xiaomo.info/api/logout')
                .then(result=>result.json())
        )
    };
}

