/**
 * Authentication Reducer
 */
import {
  ActionNames
} from '../actions';
import {getError} from '../../utils/request';

/**
 * Reducer Function
 * @param state
 * @param action
 * @returns {*}
 */
export default function(state = null, action) {

    switch (action.type) {
        case ActionNames.GET_PROFILE :
            if (!getError(action)) {
                let data = action.payload.data.data[0];
                return {
                  ...data
                };
            } else {
                return null;
            }
      case ActionNames.REGISTER :
        if (!getError(action)) {
          let data = action.payload.data.data;
          return {
            ...data
          };
        } else {
          return null;
        }
    }
    return state;
}
