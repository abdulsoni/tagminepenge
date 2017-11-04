// import {api} from '../../../config';
//
// /**
//  * Export common API Configuration for server and client
//  */
// export default api;
export const HOST = '';
export const SERVER = HOST + '/keystone/api/';
export const AUTHENTICATE = SERVER + "session/signin";
export const REGISTER = HOST + "auth/register";
export const FORGOT = SERVER + "session/signin";
export const CHECK_DUPLICATE_EMAIL = HOST+"auth/checkDuplicate";
export const PRODUCTS = SERVER+"products";
export const ENQUIRY = HOST+"contact";
