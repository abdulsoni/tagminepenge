import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Card from '../card/index';
import ReactPaginate from 'react-paginate';

var view = function () {
	const {data, hasMore, user, onSaveToWishList, count} = this.props;
	const pages = (count % this.pageSize!=0)?(Math.floor(count / this.pageSize) + 1):Math.floor(count / this.pageSize);
	return (
		<div className="container" id="product-grid">
			<div className="row">
				{(data || []).map((product) => {
					return (
						<div key={product._id} className="col-xm-12 col-sm-6 col-md-4">
							<Card onSaveToWishList={onSaveToWishList} user={user} data={product} meta={this.props.meta} changeprop={this.props.changeprop}/>
						</div>
					)
				})}
			</div>
			<div className="empty-msg">
				{
					data.length == 0 ? (
						<p>No Products found</p>
					) : null
				}
			</div>
			<div className="pagination-box">
				{
					pages > 1 ? (
						<ReactPaginate previousLabel={"Forrige"}
									   nextLabel={"Næste"}
									   breakLabel={<a href="">...</a>}
									   breakClassName={"break-me"}
									   pageCount={pages}
									   marginPagesDisplayed={2}
									   pageRangeDisplayed={5}
									   onPageChange={(page) => {
										   this.getProducts(page.selected + 1)
									   }}
									   containerClassName={"pagination"}
									   subContainerClassName={"pages pagination"}
									   activeClassName={"active"}/>
					) : null
				}
			</div>
		</div>
	);
};
export default view;
 
 
