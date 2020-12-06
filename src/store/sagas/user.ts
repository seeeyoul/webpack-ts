import { call, put, takeEvery, all } from 'redux-saga/effects';
import {
	USER_LOGIN
} from '../actionTypes';

function *login() {
	try {
		yield call(() => {
		});
		yield put({
			type: USER_LOGIN,
			payload: '1'
		})
	} catch (e) {
		console.log(e);
	}
}

export default function *rootUserSagas() {
	yield all([takeEvery(USER_LOGIN, login)])
}