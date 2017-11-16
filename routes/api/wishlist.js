var keystone = require('keystone');
var Product = keystone.list('Product');
var User = keystone.list('User');

exports = module.exports = function (req, res) {
	console.log(req.params,req.query)
	if(req.body.product){
		var query = Product.model.findById(req.params.id,function(err, products) {
			console.log(err,products)
			if (err) {
				console.log("Error while getting products",err)
				return res.sendStatus(500);
			}
			return res.json(products);
		});
		

	} else {
		console.log("No Product id present")
		return res.sendStatus(500);
	}
	
}
