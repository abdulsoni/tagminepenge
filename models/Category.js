var keystone = require('keystone');
var Types = keystone.Field.Types;
/**
 * Category Model
 * ==================
 */

var Category = new keystone.List('Category', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Category.add({
	name: { type: String, required: true },
	displayType: { type: Types.Select,label:"Display Type", numeric: true, options: [{ value: 1, label: 'Menu' }, { value: 2, label: 'Others' },{ value: 3, label: 'None' }],default : 3 },
	iconClass : { type: String, required: false,label : "Icon",default : "",
		note : "This represents the icon. To add a icon just copy the class from this link -> https://www.w3schools.com/bootstrap/bootstrap_ref_comp_glyphs.asp or http://fontawesome.io/icons/"
	},
	menuOrder : { type: Number, required: false,label : "Menu Order",default : 100},
});

Category.relationship({ ref: 'Product', path: 'products', refPath: 'categories' });

Category.register();
