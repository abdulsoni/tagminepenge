import React from 'react';
import Styles from './style.scss';
import SampleComponent from '../../components/sample/index'
var view = function() {
	return (
		<div className=  {Styles.test}>
			<SampleComponent/>
		</div>
	);
};
export default view;
