/**
 * This file contains the common middleware used by your routes.
 *
 * Extend or replace these functions as your application requires.
 *
 * This structure is not enforced, and just a starting point. If
 * you have more middleware you may want to group it as separate
 * modules in your project's /lib directory.
 */
import {PRODUCTS} from "../templates/react/redux/config/api";

var _ = require('lodash');
var keystone = require('keystone');
var Configuration = keystone.list('Configuration');
var Category = keystone.list('Category');
var Filter = keystone.list('Filter');
var Product = keystone.list('Product');
var User = keystone.list('User');
/**
	Initialises the standard view locals

	The included layout depends on the navLinks array to generate
	the navigation in the header, you may wish to change this array
	or replace it with your own templates / logic.
*/
exports.initLocals = function (req, res, next) {
	
	res.locals.url = req.url;
	
	if (req.user) {
		res.locals.user = {
			...req.user.toObject(),
			canAccessKeystone: req.user.canAccessKeystone, // convert from virtual to value, virtual doesn't work from Props
		};
	}
	//if(req.url=='/'){
		var query = Configuration.model.find();
		query.exec(function(err, doc) {
			if(doc){
				res.locals.config= {};
				(doc || []).map((item)=>{
					res.locals.config[item.name] = item;
				})
			}
			next();
		});
		
	//} else {
	//	next();
	//}
};

exports.populateCategories = function (req, res, next) {

	var query = Category.model.find().sort( { displayType:1,menuOrder: 1 } );
	query.exec(function(err, doc) {
		if(doc){
			res.locals.categories = doc;
			
		} else {
			res.locals.categories = [];
		}
		next();
	});
};
exports.populateProduct = function (req, res, next) {

	var query = Product.model.find().sort( { displayType:1,menuOrder: 1 } );
	query.exec(function(err, doc) {
		if(doc){
			res.locals.products = doc;

		} else {
			res.locals.products = [];
		}
		next();
	});
};
exports.populateEntity = function (req, res, next) {
	console.log(req.url);
	
	if(req.url.indexOf("/product/")!=-1){
		var productId = req.url.split("/")[2];
		
		Product.model.findById(productId).then((doc)=>{
			if(doc){
				//console.log(doc)
				res.locals.product = doc;
				res.locals.title = doc.title;
				res.locals.description = doc.content.brief;
				res.locals.fbTitle = doc.title;
				res.locals.fbDescription = doc.content.brief;
				res.locals.fbImage = doc.image?doc.image.url:null;
			} else {
				console.log("Error while fetching product",err,doc)
			}
			next();
		})
	} else if(req.url.indexOf("/category/")!=-1){
		
		var category = req.url.split("/")[2];
		var categoryObj = (res.locals.categories || []).filter((ele)=>{
			return ele.key==category;
		});
		if(categoryObj.length>0){
			categoryObj = categoryObj[0]
			res.locals.title = categoryObj.metaTitle;
			res.locals.description = categoryObj.metaDescription;
			res.locals.fbTitle = categoryObj.name;
			res.locals.fbDescription = categoryObj.description;
		}
		next();
	}
	else {
		var page = req.url.split("/")[1];
		var config = res.locals.config;
		if(config[page+"-title"]){
			res.locals.title = config[page+"-title"].value;
			res.locals.fbTitle = config[page+"-title"].value;
		}
		if(config[page+"-image"]){
			res.locals.image = config[page+"-image"].media?config[page+"-image"].media.url:null;
			res.locals.fbImage = config[page+"-image"].media?config[page+"-image"].media.url:null
		}
		if(config[page+"-description"]){
			res.locals.description = config[page+"-description"].value;
			res.locals.fbDescription = config[page+"-description"].value;
		}
		if(req.url.indexOf("/user-wishlist/")!=-1){

			var userId = req.url.split("/")[2];
			console.log(userId)
			if(userId){
				var userObj = User.model.findById(userId,function(err,doc){
					console.log("doc is",doc);
					if(doc){
						res.locals.savedProducts = doc.savedProducts;
						res.locals.title = doc.email.split("@")[0] + "'s Ønskeliste";
						res.locals.pageTitle = doc.email.split("@")[0] + "'s Ønskeliste";
					}
					next();
				});
					
			} else {
				next();	
			}
			
			
		} else {
			next();	
		}
		
	}
	
};



exports.populateFilters = function (req, res, next) {

	var query = Filter.model.find().sort({name: 1 });
	query.exec(function(err, doc) {
		console.log(doc)
		if(doc){
			res.locals.filters = doc;
		} else {
			res.locals.filters = [];
		}
		next();
	});
};
/**
	Fetches and clears the flashMessages before a view is rendered
*/
exports.flashMessages = function (req, res, next) {
	var flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error'),
	};
	res.locals.messages = _.some(flashMessages, function (msgs) { return msgs.length; }) ? flashMessages : false;
	next();
};


/**
	Prevents people from accessing protected pages when they're not signed in
 */
exports.requireUser = function (req, res, next) {
	if (!req.user) {
		req.flash('error', 'Please sign in to access this page.');
		res.redirect('/keystone/signin');
	} else {
		next();
	}
};
exports.redirectToFullDomainName = function(req, res, next) {
    if(req.headers.host === 'tagminepenge.dk' || req.headers.host==='www.tagminepenge.dk') {
        return res.redirect('https://www.tagminepenge.dk'+req.url);
    }
    next();
};

