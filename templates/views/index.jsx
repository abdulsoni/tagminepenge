import React from 'react';
import Default from '../layouts/default';
import { Provider } from 'react-redux';
import createStore,{initialState} from '../react/redux';
import App from '../react/containers/app';
import Routes from '../react/routes';
const store = createStore(initialState);
const Index = props => {
	return (
		<Default {...props}>
			<Provider store={store}>
				<App routeInfo = {Routes[props.url]} {...props}></App>
			</Provider>
		</Default>
	);
};


// React Engine needs exports, don't export default
module.exports = Index;
