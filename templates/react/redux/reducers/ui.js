/**
 * Modal State Reducer
 */
import {
    UI_SET_PROPERTY, UI_DELETE_PROPERTY,
} from '../actions/index';


/**
 * Reducer Function
 * @param state
 * @param action
 * @returns {*}
 */
export default function(state = {}, action) {
	let output = null;
	const payload = action.payload;
	switch (action.type) {
		case UI_SET_PROPERTY :
			output = Object.assign({}, state);
			output[payload.name] = payload.value;
			return output;
		case UI_DELETE_PROPERTY :
			output = Object.assign({}, state);
			delete output[payload.name];
			return output;


	}
	return state;
}
