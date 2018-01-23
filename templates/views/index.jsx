import React from 'react';
import Default from '../layouts/default';
import { Provider } from 'react-redux';
import createStore,{initialState} from '../react/redux';
import App from '../react/containers/app';
import Routes from '../react/routes';
const store = createStore(initialState);
const Index = props => {
	console.log(props);
	// props.meta.title="abdul";
	// console.log(props.meta.title);
	let meta={
	  title:null,
	  description:null,
	  url:null,
	  image:null
	};
	let url = props.url;
	let route = null;
	url = "/"+url.split("/")[1];
	for(var key in Routes){
		if(key.indexOf(url)!=-1){
			route = Routes[key];
			break;
		}
	}
	return (
		<Default {...props} meta={meta}>
			<Provider store={store}>
				<App routeInfo = {route} {...props}></App>
			</Provider>
		</Default>
	);
};


// React Engine needs exports, don't export default
module.exports = Index;
