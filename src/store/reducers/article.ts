import {
	FETCH_HOT_OK
} from '../actionTypes';
import { IAction } from './types';


const defaultState = {
	articleList: []
}

export default (state = defaultState , {type, payload}: IAction) => {
	switch(type) {
		case FETCH_HOT_OK:
		return {
			...state,
			articleList: payload
		}
		default:
			return state;
	}
}