var db = require('./models');

//create a user

db.user.create({
	name: 'Jonathan',
	email: 'jonandrewstevenson@yahoo.com',
	password: 'fishtacos'
}).then(function(user){
	console.log(user.get());
	//find user
	db.user.findById(1).then(function(user){
		console.log(user.get());
	});
});



