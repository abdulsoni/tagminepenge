import _ from 'lodash';
/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);
var clientSideRoutes = require('../templates/react/routes');
// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);
keystone.pre('routes', keystone.security.csrf.middleware.init);
// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
};
var authApis = require('./api/auth');
// Setup Route Bindings
exports = module.exports = function (app) {
	console.log(clientSideRoutes)
	/**
	 * Dynamically construct routes
	 */
	
	for(var key in clientSideRoutes){
		console.log("Key is"+key)
		app.get(key,routes.views.index)
	}
	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);
	app.get('/auth/checkDuplicate',authApis.checkDuplicate);
	app.post('/auth/register',authApis.register);
};