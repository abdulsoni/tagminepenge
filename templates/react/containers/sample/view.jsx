import React from 'react';
import Styles from './styles';
import SampleComponent from '../../components/sample/index'
var view = function() {
	return (
		<div style = {Styles.sampleContainer}>
			<SampleComponent/>
		</div>
	);
};
export default view;
