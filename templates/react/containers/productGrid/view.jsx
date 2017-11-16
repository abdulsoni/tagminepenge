import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Card from '../card/index';
import ReactPaginate from 'react-paginate';
var view = function() {
	const {data,hasMore,user,onSaveToWishList,count} = this.props;
	
	return (
		<div className="container">
			<div className="row">
				{(data || []).map((product)=>{
					return (
						<div key = {product._id} className="col-xm-12 col-sm-6 col-md-4">
							<Card onSaveToWishList = {onSaveToWishList} user = {user} data = {product}/>
						</div>
					)
				})}
				<ReactPaginate previousLabel={"previous"}
							   nextLabel={"next"}
							   breakLabel={<a href="">...</a>}
							   breakClassName={"break-me"}
							   pageCount={(Math.floor(count/this.pageSize)+1)}
							   marginPagesDisplayed={2}
							   pageRangeDisplayed={5}
							   onPageChange={(page)=>{
								   this.getProducts(page.selected+1)
							   }}
							   containerClassName={"pagination"}
							   subContainerClassName={"pages pagination"}
							   activeClassName={"active"} />
			</div>
		</div>
	);
};
export default view;
 
 
