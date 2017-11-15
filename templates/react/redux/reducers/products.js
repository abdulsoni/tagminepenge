/**
 * Products Reducer
 */
import {
	ActionNames
} from '../actions';
import {getError} from '../../utils/request';
const initialState = {results : [],hasMore : false}
/**
 * Reducer Function
 * @param state
 * @param action
 * @returns {*}
 */
export default function(state =initialState, action) {

	let data = [];
	switch (action.type) {
		case ActionNames.GET_PRODUCTS :
			if (!getError(action)) {
				data = action.payload.data;
				console.log(data)
				return {
					results : state.results.concat(data),
					hasMore : data.length>0
				};
			}
		case ActionNames.LOGOUT:
			return initialState;
	}
	return state;
}
