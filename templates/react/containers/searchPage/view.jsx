import React from 'react';
import ProductGrid from '../productGrid/index';
var view = function() {
	const {query} = this.state;
	return query?(
		<div className="product-group">
			<div className="container">
				<div className="row">
					<div className="col-md-12 column">
						<div className="category-wise">
							<div className="products">
								<ProductGrid
									query = {query}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	):null;
};
export default view;
 
 
