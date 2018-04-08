import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL
} from '../actions/types';

/** 
 * Estabelece o estado inicial da aplicação no componente
*/
const INITIAL_STATE = {
	email: '',
	password: '',
	user: null,
	error_message: '',
	loading: false
};

/**
 * Reducer responsável pelas ações e autenticação
 */
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMAIL_CHANGED:
			return { 
				...state,
				email: action.payload
			};
		case PASSWORD_CHANGED:
			return {
				...state,
				password: action.payload
			};
		case LOGIN_USER:
			return {
				...state,
				loading: true,
				error_message: ''
			};
		case LOGIN_USER_SUCCESS:
			return {
				...state,
				user: action.payload,
				loading: false,
				email: '',
				password: ''
			};
		case LOGIN_USER_FAIL:
			return {
				...state,
				error_message: 'E-mail e/ou senha incorretos',
				loading: false,
				password: ''
			};
		default:
			return state;
	}
};
