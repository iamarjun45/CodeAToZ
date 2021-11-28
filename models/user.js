var mongoose=require("mongoose");
var passportLocalMongoose=require("passport-local-mongoose");

// User Details Schema
var userSchema=new mongoose.Schema({
	first: String,
	last: String,
	email: String,
	username: String,
	password: String,
	gender: String,
	status: String,
	institution: String,
	coverPhoto:{ 
		type: String,
		default:"https://images.unsplash.com/photo-1558470598-a5dda9640f68?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
	},
	profilePhoto:{
		type: String, 
		default: 'https://www.answerspoint.com/user/uploads/users/default_user.png'  
	},
	country: String,
	linkedIn: String,
	codeChef:String,
	codeChef_rating:String,
	codeChef_stars:String,
	codeForces:String,
	codeForces_rating: String,
	codeForces_rank: String,
	hackerRank:String,
	topCoder:String,
	leetCode:String
});

// Provides functionality
userSchema.plugin(passportLocalMongoose);

module.exports=mongoose.model("User",userSchema);