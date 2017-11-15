var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Product Model
 * ==========
 */

var Product = new keystone.List('Product', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Product.add({
	title: { type: String, required: true},
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	image: { type: Types.CloudinaryImage },
	content: {
		brief: { type: Types.Textarea, height: 150},
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
	categories: { type: Types.Relationship, ref: 'Category', many: true },
	link : { type: String, required: false,default : "" },
	price : { type: Number, required: false,default : 0 },
	saves : {type : Number,required : false,default : 0,noedit:true}
	
});

Product.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Product.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Product.register();
