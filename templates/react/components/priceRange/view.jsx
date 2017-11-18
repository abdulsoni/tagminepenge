import React from 'react';
import styles from "./style.scss";

var view = function () {
	const {sortLinks} = this.props;
	return (
		<div className="sorting">
			<div className="price-range-slider">
				<input ref={(ref) => {
					this.inputRef = ref
				}} className="slider-input" data-slider-id='ex1Slider' type="text" data-slider-min="0"
					   data-slider-max="20" data-slider-step="1" data-slider-value="14" />
			</div>
			{
				!sortLinks?(null):(
					<div className="dropdown">
						<select onChange={this.onSortChange.bind(this)} value  ={this.state.sort} className="selectpicker">
							<option value="-price">Højeste til Laveste</option>
							<option value="price">Laveste til Højeste</option>
							<option value="-publishedDate">Nyeste</option>
							<option value="saves">Mest Populæ</option>
						</select>
					</div>
				)
			}
			{
				sortLinks?(null):(
					<div className="navigation">
						<ul>
							<li className="active"><a>Højeste til Laveste</a></li>
							<li><a>Laveste til Højeste</a></li>
							<li><a>Nyeste</a></li>
							<li><a>Mest Populæ</a></li>
						</ul>
					</div>
				)
			}
		</div>
	);
};
export default view;
 
 
