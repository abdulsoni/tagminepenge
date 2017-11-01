var keystone = require('keystone');

/**
 * Category Model
 * ==================
 */

var Category = new keystone.List('Category', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Category.add({
	name: { type: String, required: true },
});

Category.relationship({ ref: 'Product', path: 'products', refPath: 'categories' });

Category.register();
