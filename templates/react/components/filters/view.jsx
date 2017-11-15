import React from 'react';
import styles from "./style.scss";

var view = function () {
	const {data} = this.props;
	return (
		<div className="filters container">
			<ul>
				{
					(data || []).map((item)=>{
						return (
							<li key = {item._id}>
								<a href = {item.link}>
									{item.name}
								</a>
							</li>
						);
					})
				}
			</ul>
		</div>
	);
};
export default view;
 
 
