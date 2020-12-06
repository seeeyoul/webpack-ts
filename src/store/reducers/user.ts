import {
	USER_LOGIN
} from '../actionTypes';
import { IAction } from './types';

interface DefaultState {
	login: boolean
}

const defaultState: DefaultState = {
	login: false
}

export default (state = defaultState , {type, payload}: IAction): DefaultState => {
	switch(type) {
		case USER_LOGIN:
		return {
			...state,
			login: payload
		}
		default: {
			return state;
		}
	}

}