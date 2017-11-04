var keystone = require('keystone');
var Types = keystone.Field.Types;
/**
 * Configuration Model
 * ==================
 */

var Configuration = new keystone.List('Configuration', {
	autokey: { from: 'name', path: 'key', unique: true },
	
});

Configuration.add({
	name: { type: String, required: true },
	value: { type: String, required: false},
	media: { type: Types.CloudinaryImage, required: false },
	description : { type: Types.Html, required: false,wysiwyg: true },
});


Configuration.register();
