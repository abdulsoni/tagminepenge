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
				<select onChange={this.onSortChange.bind(this)} value  ={this.state.sort} className="selectpicker">
					<option value="-price">Highest to Lowest</option>
					<option value="price">Lowest to Highest</option>
					<option value="-publishedDate">Newest</option>
					<option value="saves">Most Popular</option>
				</select> 
			</div>
		</div>
	);
};
export default view;
 
 
