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
	value: { type: String, required: true,default:'value' },
	media: { type: Types.CloudinaryImage, required: false }
});


Configuration.register();
