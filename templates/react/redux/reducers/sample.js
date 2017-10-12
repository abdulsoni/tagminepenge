/**
  Sample Reducer
*/
import {
    SAMPLE_ACTION,
} from '../actions/index';

/**
 * Reducer Function
 * @param state
 * @param action
 * @returns {{}}
 */
export default function(state = {}, action) {
	const payload = action.payload;
	const status = action.payload ? action.payload.status : null;
	switch (action.type) {
		case SAMPLE_ACTION:
			if (status == 200 || status == 201) {
				const data = action.payload.data;
				return {
					...data,
				};
			}
	}
	return state;
}
