import Home from './containers/home';
import Profile from './containers/profile';
import ProductGroup from './containers/productGroup';
import SearchPage from './containers/searchPage';
import Product from './containers/productPage';
import ProductPitch from './components/productPitch';
import WishList from './components/wishlist';
import UserWishList from './components/user-wishlist';
import About from './components/aboutUs';
import Contact from './containers/contactUs';
import Privacy from './components/privacy-policy';
import GetStarted from './containers/submit-product/get-started';
import ProductForm from './containers/submit-product/product-form';
import Checkout from './containers/submit-product/checkout';
const Routes = {
	"/" : {
		component : Home,
		routeProps : {
			query : {
				sort : '-publishedDate'
			}
		}
	},
	"/new" : {
		component : Home,
		routeProps : {
			query : {
				sort : '-publishedDate'
			}
		}
	},
	"/popular" : {
		component : Home,
		routeProps : {
			query : {
				sort : '-saves'
			}
		}
	},
	"/wishlisted-price" : {
		component : Home,
		routeProps : {
			query : {
				sort : 'price'
			},
			priceRange : true
		}
	},
	"/profile" : {
		component : Profile
	},
	"/product/:id/:title" : {
		component : Product
	},
	"/search/:text" : {
		component : SearchPage
	},
	"/my-wishlist" : {
		component : WishList
	},
	"/user-wishlist/:userId" : {
		component : UserWishList
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
	/*"/product-form" : {
		component : ProductForm
	},*/
/*"/checkout" : {
		component : Checkout
	},*/
	"/privacy-policy" : {
		component : Privacy
	},
/*"/product-pitch" : {
		component : ProductPitch
	},*/
	"/category/:category" : {
		component : ProductGroup
	}
}
module.exports = Routes;
