var keystone = require('keystone');
var Types = keystone.Field.Types;
/**
 * Filter Model
 * ==================
 */

var Filter = new keystone.List('Filter');

Filter.add({
	name: { type: String, required: true },
	link: { type: String, required: false},
});


Filter.register();
