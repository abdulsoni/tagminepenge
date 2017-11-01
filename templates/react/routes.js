import Home from './containers/home';
import Profile from './components/profile';
import ProductGroup from './components/productGroup';
import Product from './components/productPage';
import WishList from './components/wishlist';
import About from './components/aboutUs';
import Contact from './components/contactUs';
// var Home = require('./containers/home');
// var Profile = require('./containers/home');
// var ProductGroup = require('./containers/home');
// var Product = require('./containers/productPage');
// var WishList = require('./containers/wishlist');
// var About = require('./containers/aboutUs');
// var Contact = require('./containers/contactUs');
const Routes = {
	"/" : {
		component : Home
	},
	"/profile" : {
		component : Profile
	},
	"/product" : {
		component : Product
	},
	"/wishlist" : {
		component : WishList
	},
	"/about" : {
		component : About
	},
	"/contact" : {
		component : Contact
	},
}
module.exports = Routes;
