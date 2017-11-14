import Home from './containers/home';
import Profile from './components/profile';
import ProductGroup from './components/productGroup';
import Product from './components/productPage';
import ProductPitch from './components/productPitch';
import WishList from './components/wishlist';
import About from './components/aboutUs';
import Contact from './containers/contactUs';
import Privacy from './components/privacy-policy';
import GetStarted from './containers/submit-product/get-started';
import ProductForm from './containers/submit-product/product-form';
import Checkout from './containers/submit-product/checkout';
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
	"/get-started" : {
		component : GetStarted
	},
	"/product-form" : {
		component : ProductForm
	},
	"/checkout" : {
		component : Checkout
	},
	"/privacy-policy" : {
		component : Privacy
	},
	"/product-pitch" : {
		component : ProductPitch
	},
	"/product-group" : {
		component : ProductGroup
	}
}
module.exports = Routes;
