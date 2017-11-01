import Home from './containers/home';
import Profile from './components/profile';
import ProductGroup from './components/productGroup';
import Product from './components/productPage';
import WishList from './components/wishlist';
import About from './components/aboutUs';
import Contact from './components/contactUs';
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
