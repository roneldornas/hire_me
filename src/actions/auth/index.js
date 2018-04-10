import Firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  FORGOT_PASSWORD
} from '../types';

 /**
  * Concatena string do email do usuário.
  * @param {string} => string 
  */
export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
	};
};

/**
 * Concatena string da senha do usuário.
 * @param {string} => string
 */
export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

/**
 * Autentica usuário na base de dados.
 * Em caso de sucesso retorna um usuário, em caso de falha retorna mensagem de erro.
 * @param {string, string} => user 
 */
export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    Firebase.auth().signInWithEmailAndPassword(email, password)
			.then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch));
    Actions.availableJobs();
	};
};

/**
 * 
 * @param {void} 
 */
export const forgotPassword = () => {
  return (dispatch) => {
    Actions.forgotPassword(dispatch);
  };
};


/**
 * Chama o reducer em caso de falha ao logar
 * @param {dispatch} dispatch 
 */
const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};

/**
 * Chama o reducer em caso de sucesso ao logar
 * @param {dispatch} dispatch 
 * @param {*} user 
 */
const loginUserSuccess = (dispatch, user) => {
  dispatch({
  type: LOGIN_USER_SUCCESS,
	payload: user
    });
};
