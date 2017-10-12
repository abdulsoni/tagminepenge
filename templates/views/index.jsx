import React from 'react';
import Default from '../layouts/default';
import { Provider } from 'react-redux';
import createStore,{initialState} from '../react/redux';
import Sample from '../react/containers/sample';
const store = createStore(initialState);
const Index = props => {
	return (
		<Default {...props}>
			<Provider store={store}>
				<Sample></Sample>
			</Provider>
		</Default>
	);
};


// React Engine needs exports, don't export default
module.exports = Index;
