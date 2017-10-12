/**
 * Commonly used helper methods
 */
/**
 * To convert a string to camel case
 * @param str
 */
export function camelize(str) {
	return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
		if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
		return index == 0 ? match.toLowerCase() : match.toUpperCase();
	});
}
/**
 * To convert first character of a string to uppercase
 * @param string
 * @returns {string}
 */
export function jsUcfirst(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}


export function dateCompare(a, b) {
	var dateA = new Date(a.date);
	var dateB = new Date(b.date);
	return dateA - dateB;
}

export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
