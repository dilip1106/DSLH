// var express = require('express');
// var router = express.Router();
// var User = require('../models/user');

// router.get('/', function (req, res, next) {
// 	return res.render('index.ejs');
// });
// router.get('/register', function (req, res, next) {
// 	return res.render('register.ejs');
// });

// router.post('/register', function(req, res, next) {
// 	console.log(req.body);
// 	var personInfo = req.body;


// 	if(!personInfo.email || !personInfo.username || !personInfo.password || !personInfo.passwordConf){
// 		res.send();
// 	} else {
// 		if (personInfo.password == personInfo.passwordConf) {

// 			User.findOne({email:personInfo.email},function(err,data){
// 				if(!data){
// 					var c;
// 					User.findOne({},function(err,data){

// 						if (data) {
// 							console.log("if");
// 							c = data.unique_id + 1;
// 						}else{
// 							c=1;
// 						}

// 						var newPerson = new User({
// 							unique_id:c,
// 							email:personInfo.email,
// 							username: personInfo.username,
// 							password: personInfo.password,
// 							passwordConf: personInfo.passwordConf
// 						});

// 						newPerson.save(function(err, Person){
// 							if(err)
// 								console.log(err);
// 							else
// 								console.log('Success');
// 						});

// 					}).sort({_id: -1}).limit(1);
// 					res.send({"Success":"You are regestered,You can login now."});
// 				}else{
// 					res.send({"Success":"Email is already used."});
// 				}

// 			});
// 		}else{
// 			res.send({"Success":"password is not matched"});
// 		}
// 	}
// });

// router.get('/login', function (req, res, next) {
// 	return res.render('login.ejs');
// });


// router.post('/login', function (req, res, next) {
// 	//console.log(req.body);
// 	User.findOne({email:req.body.email},function(err,data){
// 		if(data){
			
// 			if(data.password==req.body.password){
// 				//console.log("Done Login");
// 				req.session.userId = data.unique_id;
// 				//console.log(req.session.userId);
// 				res.send({"Success":"Success!"});
				
// 			}else{
// 				res.send({"Success":"Wrong password!"});
// 			}
// 		}else{
// 			res.send({"Success":"This Email Is not regestered!"});
// 		}
// 	});
// });

// router.get('/profile', function (req, res, next) {
// 	console.log("profile");
// 	User.findOne({unique_id:req.session.userId},function(err,data){
// 		console.log("data");
// 		console.log(data);
// 		if(!data){
// 			res.redirect('/');
// 		}else{
// 			//console.log("found");
// 			return res.render('profile.ejs', { "name" : data.username});
// 		}
// 	});
// });

// router.get('/logout', function (req, res, next) {
// 	console.log("logout")
// 	if (req.session) {
//     // delete session object
//     req.session.destroy(function (err) {
//     	if (err) {
//     		return next(err);
//     	} else {
//     		return res.redirect('/');
//     	}
//     });
// }
// });

// router.get('/forgetpass', function (req, res, next) {
// 	res.render("forget.ejs");
// });

// router.post('/forgetpass', function (req, res, next) {
// 	//console.log('req.body');
// 	//console.log(req.body);
// 	User.findOne({email:req.body.email},function(err,data){
// 		console.log(data);
// 		if(!data){
// 			res.send({"Success":"This Email Is not regestered!"});
// 		}else{
// 			// res.send({"Success":"Success!"});
// 			if (req.body.password==req.body.passwordConf) {
// 			data.password=req.body.password;
// 			data.passwordConf=req.body.passwordConf;

// 			data.save(function(err, Person){
// 				if(err)
// 					console.log(err);
// 				else
// 					console.log('Success');
// 					res.send({"Success":"Password changed!"});
// 			});
// 		}else{
// 			res.send({"Success":"Password does not matched! Both Password should be same."});
// 		}
// 		}
// 	});
	
// });

// module.exports = router;


var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var User = require('../models/user');

router.get('/', function (req, res, next) {
    return res.render('index.ejs');
});

router.get('/register', function (req, res, next) {
    return res.render('register.ejs');
});

router.post('/register', function(req, res, next) {
    console.log(req.body);
    var personInfo = req.body;

    if (!personInfo.email || !personInfo.username || !personInfo.password || !personInfo.passwordConf) {
        res.send();
    } else {
        if (personInfo.password == personInfo.passwordConf) {
            bcrypt.hash(personInfo.password, 10, function(err, hash) {
                if (err) {
                    console.log(err);
                } else {
                    personInfo.password = hash;
                    personInfo.passwordConf = hash;

                    User.findOne({email: personInfo.email}, function(err, data) {
                        if (!data) {
                            var c;
                            User.findOne({}, function(err, data) {
                                if (data) {
                                    console.log("if");
                                    c = data.unique_id + 1;
                                } else {
                                    c = 1;
                                }

                                var newPerson = new User({
                                    unique_id: c,
                                    email: personInfo.email,
                                    username: personInfo.username,
                                    password: personInfo.password,
                                    passwordConf: personInfo.passwordConf
                                });

                                newPerson.save(function(err, Person) {
                                    if (err)
                                        console.log(err);
                                    else
                                        console.log('Success');
                                });

                            }).sort({_id: -1}).limit(1);
                            res.send({"Success": "You are registered, you can login now."});
                        } else {
                            res.send({"Success": "Email is already used."});
                        }
                    });
                }
            });
        } else {
            res.send({"Success": "Password is not matched"});
        }
    }
});

router.get('/login', function (req, res, next) {
    return res.render('login.ejs');
});

router.post('/login', function (req, res, next) {
    User.findOne({email: req.body.email}, function(err, data) {
        if (data) {
            bcrypt.compare(req.body.password, data.password, function(err, result) {
                if (result) {
                    req.session.userId = data.unique_id;
                    res.send({"Success": "Success!"});
                } else {
                    res.send({"Success": "Wrong password!"});
                }
            });
        } else {
            res.send({"Success": "This Email Is not registered!"});
        }
    });
});

router.get('/profile', function (req, res, next) {
    console.log("profile");
    User.findOne({unique_id: req.session.userId}, function(err, data) {
        console.log("data");
        console.log(data);
        if (!data) {
            res.redirect('/');
        } else {
            return res.render('profile.ejs', { "name": data.username });
        }
    });
});

router.get('/logout', function (req, res, next) {
    console.log("logout");
    if (req.session) {
        // delete session object
        req.session.destroy(function (err) {
            if (err) {
                return next(err);
            } else {
                return res.redirect('/');
            }
        });
    }
});

router.get('/forgetpass', function (req, res, next) {
    res.render("forget.ejs");
});

router.post('/forgetpass', function (req, res, next) {
    User.findOne({email: req.body.email}, function(err, data) {
        console.log(data);
        if (!data) {
            res.send({"Success": "This Email Is not registered!"});
        } else {
            if (req.body.password == req.body.passwordConf) {
                bcrypt.hash(req.body.password, 10, function(err, hash) {
                    if (err) {
                        console.log(err);
                    } else {
                        data.password = hash;
                        data.passwordConf = hash;

                        data.save(function(err, Person) {
                            if (err)
                                console.log(err);
                            else
                                console.log('Success');
                                res.send({"Success": "Password changed!"});
                        });
                    }
                });
            } else {
                res.send({"Success": "Password does not match! Both Passwords should be the same."});
            }
        }
    });
});

module.exports = router;
