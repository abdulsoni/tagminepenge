var keystone = require('keystone');
var Product = keystone.list('Product');

exports = module.exports = function (req, res) {

	var query = Product.model.find();
	var queryObj = Object.assign(req.body.query || {},{});
	for(var key in queryObj){
		query.where(key, queryObj[key]);
	}
	if(req.body.sort){
		query.sort(req.body.sort)
	}
	if(req.body.limit){
		query.limit(req.body.limit)
	}
	if(req.body.skip){
		query.skip(req.body.skip)
	}
	//console.log(query)
	query.exec(function(err, products) {
		//console.log(err,products)
		if (err) {
			console.log("Error while getting products",err)
			return res.sendStatus(500);
		}
		return res.json(products);
	});

}
