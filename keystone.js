// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();
/**
 * For CSS Modules Support. Webpack only works on client side
 * On Server side compilation of JSX templates, We need this hook
 * to tell how to handle CSS Modules
 */
const hook = require('css-modules-require-hook');
const sass = require('node-sass');
hook({
	generateScopedName: '[local]',
	extensions: [ '.scss', '.css' ],
	preprocessCss: (data, filename) =>
		sass.renderSync({
			data,
			file: filename,
		}).css,
});
// Require keystone
var keystone = require('keystone');
// Require the react engine
var renderer = require('react-engine');

var engine = renderer.server.create({
	performanceCollector: function(stats) {
	    console.log(stats);
	},
	// your options here
});

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
	'name': 'TAGMINEPENGE-CMS',
	'brand': 'TAGMINEPENGE',

	'sass': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jsx',
	'custom engine': engine,
	'view': renderer.expressView,

	'emails': 'templates/emails',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'signin url' : '/',
	'signin redirect' : "/",
	'signout redirect' : "/"
});

// Load your project's Models
keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

// Load your project's Routes
keystone.set('routes', require('./routes'));

// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	users: 'users',
	products: 'products',
	categories: 'Category',
	configuration: 'Configuration',
	//subcategories: 'SubCategory',
	filter: 'Filter',
});


if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
	console.log('----------------------------------------'
	+ '\nWARNING: MISSING MAILGUN CREDENTIALS'
	+ '\n----------------------------------------'
	+ '\nYou have opted into email sending but have not provided'
	+ '\nmailgun credentials. Attempts to send will fail.'
	+ '\n\nCreate a mailgun account and add the credentials to the .env file to'
	+ '\nset up your mailgun integration');
}


keystone.start();
