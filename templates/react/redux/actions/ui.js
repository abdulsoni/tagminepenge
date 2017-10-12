/**
 * Action Functions for normal UI Configuration
 */
import axios from 'axios';
import { API } from '../config/index';
// Action name for Setting UI Property
export const UI_SET_PROPERTY = 'UI_SET_PROPERTY';

/**
 * Sets a property
 * Payload Format = {name , value}
 * @returns {{type: string, payload: Object}}
 */
export function setUIProperty(name, value) {
	if (!name) {
		throw Error('Name is mandatory for calling this action');
	}
	return {
		type: UI_SET_PROPERTY,
		payload: {
			name, value,
		},
	};
}

export const UI_DELETE_PROPERTY = 'UI_DELETE_PROPERTY';

/**
 * Deletes a property
 * Payload Format = {name , value}
 * @returns {{type: string, payload: Object}}
 */
export function deleteUIProperty(name) {
	if (!name) {
		throw Error('Name is mandatory for calling this action');
	}
	return {
		type: UI_SET_PROPERTY,
		payload: {
			name,
		},
	};
}

