import {api} from '../config';
import {} from './custom';
import {getAuthData} from '../../utils/security';
import uuid from 'uuid';
const ActionNames =  {
  SAMPLE_ACTION : "SAMPLE_ACTION",
  LOGIN : "LOGIN",
  LOGOUT : "LOGOUT",
  FORGOT : "FORGOT",
  CHECK_LOGIN : "CHECK_LOGIN",
  REGISTER : "REGISTER",
  UI_SET_PROPERTY : "UI_SET_PROPERTY",
  UI_DELETE_PROPERTY : "UI_DELETE_PROPERTY",
  GET_PROFILE : "GET_PROFILE",
  CHECK_DUPLICATE_EMAIL : "CHECK_DUPLICATE_EMAIL"
};
export const Names = ActionNames;
/**
 * Actions configuration -
 * All actions are configured here
 * Configuration Schema - {
 *  name - Action Name
 *  type - Type of Action - ajax or normal ->
 *  config - {
 *      url => For Ajax
 *      method => For Ajax
 *      headers => For Ajax
 *      promise => For normal action -> if we want data to be resolved as dummy promise
 *      getData => General -> If we want to customize the data -> Input data is passed as argument
 *      getParams => For Ajax -> If we want to get params out of input data
 *  }
 * }
 * @type {[*]}
 */
const config = [
  {
    name : ActionNames.SAMPLE_ACTION
  },
  {
    name : ActionNames.UI_SET_PROPERTY
  },
  {
    name : ActionNames.UI_DELETE_PROPERTY
  },
  {
    name : ActionNames.LOGIN,
    type : "ajax",
    config : {
      url : api.AUTHENTICATE,
      method : 'POST'
    }
  },
  {
    name : ActionNames.CHECK_LOGIN,
    config : {
      getData : getAuthData,
      promise : true
    }
  },
  {
    name : ActionNames.LOGOUT,
    config : {
      promise: true
    }
  },
  {
    name : ActionNames.FORGOT,
    type : "ajax",
    config : {
      url : api.FORGOT,
      method : 'POST'
    }
  },
  {
    name : ActionNames.REGISTER,
    type : "ajax",
    config : {
      url : api.REGISTER,
      method : 'POST'
    }
  },
	{
		name : ActionNames.CHECK_DUPLICATE_EMAIL,
		type : "ajax",
		config : {
			url : api.CHECK_DUPLICATE_EMAIL,
			method : 'GET'
		}
	}
];
/**
 * Create a map so that it is easy to query
 * @type {{}}
 */
let configMap = {};
config.map((item)=>{
  configMap[item.name] = item;
});
export function getActionConfig(name){
  return configMap[name];
}
export default config;
