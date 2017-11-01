var keystone = require('keystone');
var User = keystone.list('User');
export  function checkDuplicate(req, res) {
	if(!req.query.email){
		console.log("Email absent")
		return res.sendStatus(500);
	}
	var query = User.model.findOne();
	query.where('email', req.query.email);
	query.exec(function(err, user) {
		console.log(err,user)
		if (err) {
			console.log("Error while checking duplicate",err)
			return res.sendStatus(500);
		}
		if (user) {
			return res.json(true)
		} else {
			return res.json(false)
		}
	});
};

export  function register(req, res) {
	var User = keystone.list('User').model;
	if(!req.body.email || !req.body.password){
		console.log("Email or password absent")
		return res.sendStatus(500);
	}
	var user = new User({
		email: req.body.email,
		password: req.body.password,
		isAdmin: false
	});

	user.save(function (err) {
		if (err) {
			console.log("Error while saving user",err)
			// handle error
			return res.sendStatus(500);
		}
		
		return res.json(true)
	});

};
