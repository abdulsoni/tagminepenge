import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Card from '../../components/card/index';
var view = function() {
	const {data,hasMore,user} = this.props;
	return (
		<div className="container">
			<div className="row">
				<InfiniteScroll
					pageStart={1}
					loadMore={this.getProducts.bind(this)}
					hasMore={hasMore}
					loader={<div className="loader">Loading ...</div>}
				>
					{(data || []).map((product)=>{
						return (
							<div key = {product._id} className="col-xm-12 col-sm-6 col-md-4">
								<Card user = {user} data = {product}/>
							</div>
						)
					})}
				</InfiniteScroll>
				
			</div>
		</div>
	);
};
export default view;
 
 
