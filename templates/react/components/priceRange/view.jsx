import React from 'react';
import styles from "./style.scss";

var view = function () {
	return (
		<div className="sorting">
			<div className="price-range-slider">
				<input ref={(ref) => {
					this.inputRef = ref
				}} className="slider-input" data-slider-id='ex1Slider' type="text" data-slider-min="0"
					   data-slider-max="20" data-slider-step="1" data-slider-value="14"/>
			</div>
			<div className="dropdown">
				<select className="selectpicker">
					<option value="high">Highest to Lowest</option>
					<option value="low">Lowest to Highest</option>
					<option value="new">Newest</option>
					<option value="popular">Most Popular</option>
				</select> 
			</div>
		</div>
	);
};
export default view;
 
 
