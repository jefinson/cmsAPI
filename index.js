// Packages imports
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var excel2json = require("excel-to-json");
var bitwise = require('bitwise');
var moment = require('moment');
var AdmZip = require('adm-zip');
var async = require('async');


// For Email
// var nodemailer = require('nodemailer');
// // var randomstring = require("randomstring");
// var smtpTransport = require("nodemailer-smtp-transport");

// var smtpTransport = nodemailer.createTransport(smtpTransport({
// 	host : "smtp.gmail.com",
// 	secureConnection : false,
// 	port: 465,
// 	auth : {
// 		user : "jefinzinbox@gmail.com",
// 		pass : "thisismygmailpassword"
// 	}
// }))



fs = require('fs');

// Multer for File upload
var multer  = require('multer');

var storage =   multer.diskStorage({
	destination: function (req, file, callback) {
		callback(null, './uploads');
	},
	filename: function (req, file, callback) {
		multerFileName = file.originalname;
		callback(null, file.originalname);
    // return file.originalname;
}
});

var upload = multer({storage: storage}).single('file');
// var excel2Json = require('excel2json');
var excel2json=require("xls-to-json");

// var multipartUpload = Multer({storage: Multer.diskStorage({
//     destination: function (req, file, callback) { callback(null, './uploads');},
//     filename: function (req, file, callback) { callback(null, file.fieldname + '-' + Date.now());}})
// }).single('songUpload');

// import Schema
const Model = require('./models/model');

// Global Variable Declaration for DB connection   
var ConnectionFlag = 1;

// Mongo DB connection
var mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/cms');
mongoose.connect('mongodb://127.0.0.1:27017/cms', {
	useMongoClient: true,
	/* other options */
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Mongo is connected, hurray!!!")
});

// Local Library file for Hard code data and common functions
var cmsLibrary = require('./system.js');
var systemLibrary = new cmsLibrary();
var mongo = require('mongodb').ObjectID;
var ObjectID = mongo.ObjectID;

String.prototype.toObjectId = function() {
  var ObjectId = (require('mongoose').Types.ObjectId);
  return new ObjectId(this.toString());
};

var app = express();

// CORS Headers
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

// Body-parser Configuration
// app.use(bodyParser());
var urlencodedParser = app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
// var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(cookieParser());
// app.use(session({secret: "Your secret key"},  {cookie :{maxAge : 10000}}));

app.use(session({
	secret: "12345",
	name: "cmsCookie",
    // store: sessionStore, // connect-mongo session store
    proxy: true,
    resave: true,
    saveUninitialized: true
}));


app.use(require('express-promise')());


// Express router
var router = express.Router();
	// Get company list using mock Collection
	router.route('/api/1/companies')
	.get(function(req, res, err){		
		 	// Check if Mongo DB or Mock Collection
		 	if(ConnectionFlag == 0){ 
		 		// Mock data block 	
		 		Model.mockdata.find({mock_id: 1}, function(err, mock){
		 			if(err){
		 				res.json(systemLibrary.serverError());
		 			}else{		 		
		 				if(mock.length){
		 					res.json(mock[0].toObject().mock_data);		 					
		 				}else{
		 					res.json(systemLibrary.noDataError());
		 				}	
		 			}
		 		})				 	
		 	}else if(ConnectionFlag == 1){ 		 		
		 		// Live data block			 					 					 		
		 		// System Node
		 		var systemNode = systemLibrary.getSystemNode();
			 	// Check session
			 	if(req.session.sessionID){

			 		var result = Model.companies.find({});

			 		if(result){
			 			res.json(result);			 		
			 		}else{
		 				// Data not found error
		 				var errorNode = systemLibrary.noDataError();
		 				res.json(errorNode);
		 			}
		 		}else{
		 			var errorNode = systemLibrary.sessionExpired();
		 			res.json(errorNode);
		 		}
		 	}
		 })	
// -----------------------------------------------------------------


	// Api to switch db connection ( Flat file or Mongo DB )
	router.route('/api/1/useDBData/:connection')
	.get(function(req, res, err){
		var requestedConnection = req.params.connection;
		if(requestedConnection == 0){
			ConnectionFlag = 0;
			res.send({status: true, message : "Connection is set to Mock Collection"})
		}else if(requestedConnection == 1){
			ConnectionFlag = 1;
			res.send({status: true, message : "Connection is set to Mongo Live DB"})
		}else{
			res.send({status: false, message : "Pass the value 0 (For Mock Data) or 1 (For Mongo Live DB)"});
		}
	});

// -----------------------------------------------------------------

router.route("/api/1/user/login",urlencodedParser)
// Get company list using mock Collection
.post(function(req,res){	
	var message = "";	
	var hour = 600000;

	// Bitwise calculator
	var xor_bitwise = function(array){
		var xor = 0;
		for(value in array){			
			xor ^= array[value];
		}
		return xor;
	} 


	var loginObj = {
		email : req.body.u,
		activationCode : req.body.c
	}

	// Check Login credentials
	Model.staffs.find( loginObj , function(err, loginResponse){
		if(loginResponse.length > 0){
			loginResponse = loginResponse[0].toObject();		 					 					 					 					 						 			
			var staffID = loginResponse.staffId;
			var securityArray = [];

			// Geting notification for this staff
			// Use new Date() instead of moment().format() for ISODate timezone
			// moment().format() gets the local timezone and returns in ISODate format.
			var notification = Model.notifications.find({ status: 0, staffId: staffID.toString() , expire : { $gte : new Date(moment().format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]'))}})
			// Calculate Bitwise value

			// Get security zone values
			if(loginResponse.SecurityZones != undefined){
				var securityNode = loginResponse.SecurityZones;
				for(zone in securityNode){
					if(securityNode[zone] == 1){
						securityArray.push(systemLibrary.getSecurityZoneValue(zone));
					}
				}
				console.log("Bitwise Array", securityArray);
			}

			var system = systemLibrary.getSystemNode();			
			system.system.notification = notification;
			// Calculate bitwise value and store bitwise value in system node
			system.system.mySecurityRole.bitwise = xor_bitwise(securityArray);

			var responseData = {							
				system : system.system,
				myActivities: {
					myMeetings: Model.meetings.findOne({"team.members.staff.stafId": staffID})
				}
			}

			var newSessionID =(Math.random().toString(36).slice(2)) + (Math.floor(Math.random() * 10) + 1);
			req.session.sessionID = newSessionID;						
			req.session.cookie.expires = new Date(Date.now() + hour);
			req.session.cookie.maxAge = hour;
			req.session.system = system;

			res.json(responseData);
		}else{			
			res.send(systemLibrary.getSystemNode("LOGINFAILED"));	
		}			
	})

	// if(req.body.username == username && req.body.password == password){						

	// 	var newSessionID =(Math.random().toString(36).slice(2)) + (Math.floor(Math.random() * 10) + 1);
	// 	req.session.sessionID = newSessionID;						
	// 	req.session.cookie.expires = new Date(Date.now() + hour)
	// 	req.session.cookie.maxAge = hour


	// 	// res.end("You have successfully logged in!");
	// 	res.json({
	// 		message : "You have successfully logged in",
	// 		sessionID :req.session.sessionID
	// 	});

	// }else{
	// 	message = "Invalid Credentials";
	// 	res.send(message);			
	// }	

})

// -----------------------------------------------------------------

router.route('/api/1/user/logout')
.get(function(req, res,err){
	// if the user logs out, destroy all of their individual session
	req.session.destroy(function(err) {
		if(err) {
			console.log(err);
		} else {
			res.send('You are successfully logged out');
		}
	});
})

// Get company list by passing id
router.route('/api/1/company/:companyID')
.get(function(req, res, err){	

	// Check if Mongo DB or Mock Collection
	if (ConnectionFlag == 0){  			

		Model.mockdata.find({mock_id: 1}, function(err, mock){
			if(err){
				res.json(systemLibrary.serverError());
			}else{		 		
				if(mock.length){
					var responseCompany = mock[0].toObject().mock_data;
					var randomCompany = responseCompany[ Math.floor(Math.random() * responseCompany.length)];
					res.json(randomCompany);		 					
				}else{
					res.json(systemLibrary.noDataError());
				}	
			}
		})	

	}else if(ConnectionFlag == 1){
		if(req.session.sessionID){
		 		// Mongo DB block
		 		var companies  = Model.companies.find({ companyId:parseInt(req.params.companyID) });		 		 				
		 		if(companies){
		 			res.json(companies);		 					 		
		 		}else{
		 			res.json(systemLibrary.noDataError());
		 		}
		 	}else{
		 		res.send(systemLibrary.sessionExpired());
		 	}
		 }
		})

// -----------------------------------------------------------------

// Get Staff list of a company
router.route('/api/1/staffs')
.get(function(req, res, err) {
	var sessionID = req.params.sessionID;
	if(ConnectionFlag == 0) {
		if(Model.mockdata){		 			
			Model.mockdata.find({mock_id: 2}, function(err, mock){
				if(err){
					res.json(systemLibrary.serverError());
				}else{		 		
					if(mock.length){
						var responseStaffs= mock[0].toObject().mock_data;						
						res.json(responseStaffs);		 											
					}else{
						res.json(systemLibrary.noDataError());
					}	
				}
			})		 			
		}else{
			res.json(systemLibrary.serverError());			
		}	
	} else if (ConnectionFlag == 1) {
		if(req.session.sessionID) {
                // Mongo DB block                               
                var staffs = Model.staffs.find();
                if(staffs){
                	var responseData = {
                		system: systemLibrary.getSystemNode(),
                		staffs: Model.staffs.find()
                	}
                	res.json(responseData);                	                
                }else{
                	res.json(systemLibrary.noDataError());
                }                                 	

            } else {
                // Session expired messsage from Library
                res.send(systemLibrary.sessionExpired());
            }
        }
    })

// -----------------------------------------------------------------


router.route("/api/1/companies/update",urlencodedParser)

.put(function(req,res){

	// console.log(req.body);	
	if(req.session.sessionID){
		var conditions = { 
			companyId: req.body.companyId },
			update = req.body,
			options = { multi: true };		  
		  // Update query
		  Model.companies.update(conditions, update, options, callback);

		  function callback (err, numAffected) {
		  	if(err){

		  	}else if(numAffected){
		  		res.send(numAffected);
		  	}
		  }
		}else{
		// Session expired messsage from Library
		res.send(systemLibrary.sessionExpired());		
	}
})

// ---------------------------------------------------


// UPSERT TEAM
router.route("/api/1/teams/update", urlencodedParser)
.post(function(req,res){

	// console.log(req.body);	
	if(req.session.sessionID){
		var conditions = { 
			teamId: req.body.teamId },
			update = req.body,
			options = { "upsert": true };		  
		  // Update query
		  Model.teams.update(conditions, update, options, callback);
		  function callback (err, numAffected) {
		  	if(err){

		  	}else if(numAffected){
		  		var responseData = {
		  			system : systemLibrary.dataUpdatedMessage(),
		  			team : Model.teams.find({})
		  		}
		  		res.send(responseData);
		  	}
		  }
		}else{
		// Session expired messsage from Library
		res.send(systemLibrary.sessionExpired());		
	}
})

// ---------------------------------------------------

	// GET ROLES
	router.route('/api/1/staff/roles')
	.get(function(req, res, err){		
		 	// Check if Mongo DB or Mock Collection
		 	if(ConnectionFlag == 0){ 
		 		// Mock data block 	
		 		Model.mockdata.find({mock_id: 3}, function(err, mock){
		 			if(err){
		 				res.json(systemLibrary.serverError());
		 			}else{		 		
		 				if(mock.length){
		 					res.json(mock[0].toObject().mock_data);		 					
		 				}else{
		 					res.json(systemLibrary.noDataError());
		 				}	
		 			}
		 		})				 	
		 	}else if(ConnectionFlag == 1){ 		 		
		 		// Live data block			 					 					 		

			 	// Check session
			 	if(req.session.sessionID){		 		
			 		var result = Model.roles.find({});

			 		if(result){
			 			res.json(result);			 		
			 		}else{
		 				// Data not found error
		 				var errorNode = systemLibrary.noDataError();
		 				res.json(errorNode);
		 			}
		 		}else{
		 			var errorNode = systemLibrary.sessionExpired();
		 			res.json(errorNode);
		 		}
		 	}
		 })	
// -----------------------------------------------------------------

router.route("/api/1/staff/update",urlencodedParser)

.post(function(req,res){
	// console.log(req.body);	
	if(req.session.sessionID){
		var conditions = { 
			stafId: req.body.stafId },
			update = req.body,
			options = { multi: true, upsert: true };		  
		  // Update query
		  Model.staffs.findOneAndUpdate(conditions, update, options, callback);

		  function callback (err, numAffected) {
		  	if(err){
		  		res.send(err);
		  	}else{
		  		res.send(Model.staffs.find({}));
		  	}
		  }
		}else{
		// Session expired messsage from Library
		res.send(systemLibrary.sessionExpired());		
	}
})


// -----------------------------------------------------------------

router.route("/api/1/staff/CMT",urlencodedParser)
// get staff member where CMT =1 

.get(function(req, res, err) {
	var sessionID = req.params.sessionID;
	if(ConnectionFlag == 0) {
		if(Model.mockdata){		 			
			Model.mockdata.find({mock_id: 2}, function(err, mock){
				if(err){
					res.json(systemLibrary.serverError());
				}else{		 		
					if(mock.length){
						var responseStaffs= mock[0].toObject().mock_data;						
						res.json(responseStaffs);		 											
					}else{
						res.json(systemLibrary.noDataError());
					}	
				}
			})		 			
		}else{
			res.json(systemLibrary.serverError());			
		}	
	} else if (ConnectionFlag == 1) {
		if(req.session.sessionID) {
                // Mongo DB block                               
                var staffs = Model.staffs.find();				
                if(staffs){
                	var responseData = {
                		system: systemLibrary.getSystemNode(),
                		staffs: Model.staffs.find({"memberOfCMT":1})
                	}
                	res.json(responseData);                	                
                }else{
                	res.json(systemLibrary.noDataError());
                }                                 	

            } else {
                // Session expired messsage from Library
                res.send(systemLibrary.sessionExpired());
            }
        }
    })

// GET TEAM BY ID
router.route('/teams/1/:teamId')
.get(function(req, res, err){	

	// Check if Mongo DB or Mock Collection
	if (ConnectionFlag == 0){  			

		Model.mockdata.find({mock_id: 4}, function(err, mock){
			if(err){
				res.json(systemLibrary.serverError());
			}else{		 		
				if(mock.length){
					var responseTeam = mock[0].toObject().mock_data;
					var randomTeam = responseTeam[ Math.floor(Math.random() * responseTeam.length)];
					res.json(randomTeam);		 					
				}else{
					res.json(systemLibrary.noDataError());
				}	
			}
		})	
	}else if(ConnectionFlag == 1){
		if(req.session.sessionID){
		 		// Mongo DB block
		 		var teams  = Model.teams.find({ teamId: parseInt(req.params.teamId)});		 		 				
		 		if(teams){
		 			var responseData = {
		 				system: systemLibrary.getSystemNode(),
		 				team: teams
		 			}
		 			res.json(responseData);
		 		}else{
		 			res.json(systemLibrary.noDataError());
		 		}
		 	}else{
		 		res.send(systemLibrary.sessionExpired());
		 	}
		 }
		})

// -----------------------------------------------------------------


// GET REPORTS
router.route('/api/1/reports/:type/:open')
.get(function(req, res, err){	

	// Check if Mongo DB or Mock Collection
	if (ConnectionFlag == 0){  			

		Model.mockdata.find({mock_id: 6}, function(err, mock){
			if(err){
				res.json(systemLibrary.serverError());
			}else{		 		
				if(mock.length){
					var responseReport = mock[0].toObject().mock_data;
					var randomReport = responseReport[ Math.floor(Math.random() * responseReport.length)];
					var responseData = {
						system: systemLibrary.getSystemNode(),
						reports: randomReport
					}	
					res.json(responseData);		 					
				}else{
					res.json(systemLibrary.noDataError());
				}	
			}
		})	
	}else if(ConnectionFlag == 1){
		if(req.session.sessionID){
		 		// Mongo DB block
		 		var reports  = Model.reports.find({ 
		 			type: req.params.type,
		 			open: parseInt(req.params.open)
		 		});	

		 		if(reports){
		 			var responseData = {
		 				system: systemLibrary.getSystemNode(),
		 				reports: reports
		 			}
		 			res.json(responseData);
		 		}else{
		 			res.json(systemLibrary.noDataError());
		 		}
		 	}else{
		 		res.send(systemLibrary.sessionExpired());
		 	}
		 }
		})

// -----------------------------------------------------------------


router.route("/api/1/reports/toggle/", urlencodedParser)

// // Get company list using mock Collection
.post(function(req,res){			
	if(req.session.sessionID){

		var conditions = { 
			reportId: req.body.reportId },
			update = {"$set": {"open": req.body.openStatus}},
			options = {};		  
		  // Update query
		  Model.reports.findOneAndUpdate(conditions, update, options, callback);

		  function callback( err, numAffected ) {
		  	if(err){
		  		res.send(err);
		  	}else{
		  		res.send(systemLibrary.dataUpdatedMessage());		  		
		  	}
		  }
		}else{
		// Session expired messsage from Library
		res.send(systemLibrary.sessionExpired());		
	}	
})

// -----------------------------------------------------------------


// GET Meeting BY ID
router.route('/api/1/meetings/:id')
.get(function(req, res, err){	

	// Check if Mongo DB or Mock Collection
	if (ConnectionFlag == 0){  			

		Model.mockdata.find({mock_id: 0}, function(err, mock){
			if(err){
				res.json(systemLibrary.serverError());
			}else{		 		
				if(mock.length){
					var responseTeam = mock[0].toObject().mock_data;
					var randomTeam = responseTeam[ Math.floor(Math.random() * responseTeam.length)];
					res.json(randomTeam);		 					
				}else{
					res.json(systemLibrary.noDataError());
				}	
			}
		})	
	}else if(ConnectionFlag == 1){
		if(req.session.sessionID){
		 		// Mongo DB block
		 		var meeting  = Model.meetings.find({ meetingId: parseInt(req.params.id)});		 		 				
		 		if(meeting){
		 			var responseData = {
		 				system: systemLibrary.getSystemNode(),
		 				meeting: meeting
		 			}
		 			res.json(responseData);
		 		}else{
		 			res.json(systemLibrary.noDataError());
		 		}
		 	}else{
		 		res.send(systemLibrary.sessionExpired());
		 	}
		 }
		})



// GET Meeting BY STAFF
router.route('/api/1/meetings/staff/:staffId')
.get(function(req, res, err){	

	// Check if Mongo DB or Mock Collection
	if (ConnectionFlag == 0){  			

		Model.mockdata.find({mock_id: 8}, function(err, mock){
			if(err){
				res.json(systemLibrary.serverError());
			}else{		 		
				if(mock.length){
					var responseTeam = mock[0].toObject().mock_data;
					// var randomTeam = responseTeam[ Math.floor(Math.random() * responseTeam.length)];
					res.json(responseTeam);		 					
				}else{
					res.json(systemLibrary.noDataError());
				}	
			}
		})	
	}else if(ConnectionFlag == 1){
		if(req.session.sessionID){
		 		// Mongo DB block
		 		var meeting  = Model.meetings.find({ "team.members.staff.stafId":  parseInt(req.params.staffId)});		 		 				
		 		if(meeting){
		 			var responseData = {
		 				system: systemLibrary.getSystemNode(),
		 				meeting: meeting
		 			}
		 			res.json(responseData);
		 		}else{
		 			res.json(systemLibrary.noDataError());
		 		}
		 	}else{
		 		res.send(systemLibrary.sessionExpired());
		 	}
		 }
		})



// -----------------------------------------------------------------
// MANISH CODE

// Get all teams
router.route('/api/1/teams')
.get(function(req, res, err){		
		 	// Check if Mongo DB or Mock Collection
		 	if(ConnectionFlag == 0){ 
		 		// Mock data block 	
		 		Model.mockdata.find({mock_id: 4}, function(err, mock){
		 			if(err){
		 				res.json(systemLibrary.serverError());
		 			}else{		 		
		 				if(mock.length){
		 					res.json(mock[0].toObject().mock_data);		 					
		 				}else{
		 					res.json(systemLibrary.noDataError());
		 				}	
		 			}
		 		})				 	
		 	}else if(ConnectionFlag == 1){ 		 		
		 		// Live data block			 					 					 		
		 		// System Node
		 		var systemNode = systemLibrary.getSystemNode();
			 	// Check session
			 	if(req.session.sessionID){

			 		var result = Model.teams.find({});

			 		if(result){
			 			var responseData = {
			 				system: systemLibrary.getSystemNode(),
			 				teams: Model.teams.find()
			 			}
			 			res.json(responseData); 		 		
			 		}else{
		 				// Data not found error
		 				var errorNode = systemLibrary.noDataError();
		 				res.json(errorNode);
		 			}
		 		}else{
		 			var errorNode = systemLibrary.sessionExpired();
		 			res.json(errorNode);
		 		}
		 	}
		 })	
// -----------------------------------------------------------------

// Get all crisis

router.route('/api/1/crisis')
.get(function(req, res, err){		
		 	// Check if Mongo DB or Mock Collection
		 	if(ConnectionFlag == 0){ 
		 		// Mock data block 	
		 		Model.mockdata.find({mock_id: 5}, function(err, mock){
		 			if(err){
		 				res.json(systemLibrary.serverError());
		 			}else{		 		
		 				if(mock.length){
		 					res.json(mock[0].toObject().mock_data);		 					
		 				}else{
		 					res.json(systemLibrary.noDataError());
		 				}	
		 			}
		 		})				 	
		 	}else if(ConnectionFlag == 1){ 		 		
		 		// Live data block			 					 					 		
		 		// System Node
		 		var systemNode = systemLibrary.getSystemNode();
			 	// Check session
			 	if(req.session.sessionID){

			 		var result = Model.crisis.find({});

			 		if(result){
			 			var responseData = {
			 				system: systemLibrary.getSystemNode(),
			 				crisis: Model.crisis.find()
			 			}
			 			res.json(responseData); 		 		
			 		}else{
		 				// Data not found error
		 				var errorNode = systemLibrary.noDataError();
		 				res.json(errorNode);
		 			}
		 		}else{
		 			var errorNode = systemLibrary.sessionExpired();
		 			res.json(errorNode);
		 		}
		 	}
		 })	
// -----------------------------------------------------------------

// Get Crisis Using id
router.route('/api/1/crisis/:crisisId')
.get(function(req, res, err){	

	// Check if Mongo DB or Mock Collection
	if (ConnectionFlag == 0){  			

		Model.mockdata.find({mock_id: 5}, function(err, mock){
			if(err){
				res.json(systemLibrary.serverError());
			}else{		 		
				if(mock.length){
					var responseCrisis = mock[0].toObject().mock_data;
					var randomCrisis = responseCrisis[ Math.floor(Math.random() * responseCrisis.length)];
					res.json(randomCrisis);		 					
				}else{
					res.json(systemLibrary.noDataError());
				}	
			}
		})	

	}else if(ConnectionFlag == 1){
		if(req.session.sessionID){
		 		// Mongo DB block
		 		var crisis  = Model.crisis.find({ crisisId : parseInt(req.params.crisisId)});		 		 				
		 		if(crisis){

		 			var responseData = {
		 				system: systemLibrary.getSystemNode(),
		 				crisis: crisis
		 			}

		 			res.json(responseData);
		 		}else{
		 			res.json(systemLibrary.noDataError());
		 		}
		 	}else{
		 		res.send(systemLibrary.sessionExpired());
		 	}
		 }
		})

// -----------------------------------------------------------------

// update crisis
router.route("/api/1/crisis/",urlencodedParser)
.post(function(req,res){

	// console.log(req.body);	
	if(req.session.sessionID){
		var status;
		if(req.body.status == 0 ){
			status = "Close";
		}else if(req.body.status == 1){
			status = "Active";
		}

		var conditions = { 
			crisisId: req.body.crisisId },
			update =  { "$set": {"status": status}},
			options = {};		  
		  // Update query
		  Model.crisis.update(conditions, update, options, callback);

		  function callback (err, numAffected) {
		  	if(err){
		  		res.send(err);
		  	}else{

		  		var responseData = {
		  			system: systemLibrary.dataUpdatedMessage(),
		  			crisis:Model.crisis.find({ crisisId : parseInt(req.body.crisisId)})
		  		}
		  		res.json(responseData); 

		  	}
		  }
		}else{
		// Session expired messsage from Library
		res.send(systemLibrary.sessionExpired());		
	}
})

// -----------------------------------------------------------------

// update meetings
router.route("/api/1/meetings/",urlencodedParser)
.post(function(req,res){
	// console.log(req.body);	
	if(req.session.sessionID){

	// Variable Declaration
	var system = req.body.system;		 
	var meetings = req.body.meeting;		 
	var updateTeam = {};
	var isTeam = false,
	isMember = false, 
	isDocuments = false,
	isImages = false;	 	 

	// Validate the json (req.body) [INTERNAL JSON VALIDATIOIN]		 
 	// does req.body have a team? 
 	if(meetings.team){
 		isTeam = meetings.team ? true : false;			
			// 	does team have members?
			if(meetings.team.members)
				isMember = meetings.team.members.length > 0 ? true : false;
		}
	// does req.body have documents?
	if(meetings.documents)
		isDocuments = meetings.documents.length > 0 ? true : false; 		 	
 	// does it have images? 
 	if(meetings.images)
 		isImages = meetings.images.length > 0 ? true : false;

		// If team and members are available
		if(isTeam == true && isMember == true){
		// get the teams -collection document- by teamId			
		Model.teams.findOne({ teamId : parseInt(meetings.team.teamId)}, function(err, teamDocs){
			if(teamDocs){		 		
					// modify the members node [insert]					 					 					 					 			
					updateTeam = teamDocs;
					updateTeam.members = meetings.team.members;		 					 									 						
				}else{
					res.send("no teams found");
				}		
			})				
	}
		// If documents are available
		if(isDocuments){
		// get the teams -collection document- by teamId			
		Model.teams.findOne({ teamId : parseInt(meetings.team.teamId)}, function(err, teamDocs){
			if(teamDocs){	
					// modify the "documents" node	 					 					 					 					 			
					if(isTeam == true && isMember == true){
						updateTeam.documents = meetings.documents;				 				 		
					}else{
						updateTeam = teamDocs;
						updateTeam.documents = meetings.documents;		 			
					}		 					 			
				}else{
					res.send("no teams found");
				}			
			})				
	}

		// UPDATE MEETINGS COLLECTION					 			
		Model.meetings.update({"meetingId": meetings.meetingId}, meetings, { "upsert": true }, MeetingCallback);
		function MeetingCallback (err, numAffected) {
			if(err){
				console.log("error")		  		
			}else if(numAffected){
				console.log("meetings updated");
		  		// UPDATE TEAMS COLLECTION	
		  		// INSERT OR UPDATE THE MEETINGS BY ID			 
		  		Model.teams.update({"teamId": meetings.team.teamId}, updateTeam, {} , TeamsCallback);
		  		function TeamsCallback (err, numAffected) {
		  			if(err){
		  				return err;
		  				console.log("error")		  		
		  			}else if(numAffected){
		  				console.log("Teams updated");
		  				var responseData = {
		  					system: systemLibrary.dataUpdatedMessage(),
		  					meetings: Model.meetings.find({ meetingId : parseInt(meetings.meetingId)})
		  				}
		  				res.json(responseData);		  
		  			}
		  		}
		  	}
		  }	
		}else{
		// Session expired messsage from Library
		res.send(systemLibrary.sessionExpired());		
	}
})

// -----------------------------------------------------------------

// update meetings
router.route("/api/1/sample_multiple_update/",urlencodedParser)

.post(function(req,res){
	// console.log(req.body);	
	if(req.session.sessionID){
		var conditions = { 
			name: req.body.name },
			update =  { "$set": {"age": req.body.age}},
			options = {};		  
		  // Update query
		  Model.sample1.update(conditions, update, options, callback);
		  function callback (err, numAffected) {
		  	if(err){
		  		res.send(err);
		  	}else{
		  		
		  		Model.sample2.update(conditions, update, options, callback2);
		  		function callback2 (err, numAffected) {
		  			if(err){
		  				res.send(err);
		  			}else{
		  				
		  				Model.sample3.update(conditions, update, options, callback3);
		  				function callback3 (err, numAffected) {
		  					if(err){
		  						res.send(err);
		  					}else{
		  						var responseData = {
		  							system: systemLibrary.dataUpdatedMessage(),
		  							sample1: Model.sample1.find({ name : req.body.name }),
		  							sample2: Model.sample2.find({ name : req.body.name }),
		  							sample3: Model.sample3.find({ name : req.body.name }),
		  						}
		  						res.json(responseData); 
		  					}
		  				}		  				
		  			}
		  		}
		  	}
		  }
		}else{
		// Session expired messsage from Library
		res.send(systemLibrary.sessionExpired());		
	}
})



// -----------------------------------------------------------------

//_@_23/10/2017

// Get docs Using team-id and crisis id
router.route('/api/1/documents/teams/:crisisId/:teamId')
.get(function(req, res, err){	
	// Check if Mongo DB or Mock Collection
	if (ConnectionFlag == 0){  			

		Model.mockdata.find({mock_id: 9}, function(err, mock){
			if(err){
				res.json(systemLibrary.serverError());
			}else{		 		
				if(mock.length){
					var responseTeamDocs = mock[0].toObject().mock_data;
					var randomTeamDocs = responseTeamDocs[ Math.floor(Math.random() * responseTeamDocs.length)];
					res.json(randomTeamDocs);		 					
				}else{
					res.json(systemLibrary.noDataError());
				}	
			}
		})	

	}else if(ConnectionFlag == 1){
		if(req.session.sessionID){
		 		// Mongo DB block		 		
		 		Model.documents.find({ "teamId" : parseInt(req.params.teamId), "crisisId" : parseInt(req.params.crisisId) }, function(err, teamDocs){
		 			if(teamDocs){		 					 					 					 					 						 			
		 				var responseData = {
		 					system: systemLibrary.getSystemNode(),
		 					documents: teamDocs
		 				}

		 				res.send(responseData);

		 			}else{
		 				res.json(systemLibrary.noDataError());
		 			}			
		 		})	
		 	}else{
		 		res.send(systemLibrary.sessionExpired());
		 	}
		 }
		})

// -----------------------------------------------------------------


// Get documents Using id
router.route('/api/1/documents/:id')
.get(function(req, res, err){
	// Check if Mongo DB or Mock Collection
	if (ConnectionFlag == 0){

		Model.mockdata.find({mock_id: 9}, function(err, mock){
			if(err){
				res.json(systemLibrary.serverError());
			}else{		 		
				if(mock.length){
					var responseTeamDocs = mock[0].toObject().mock_data;
					var randomTeamDocs = responseTeamDocs[ Math.floor(Math.random() * responseTeamDocs.length)];
					res.json(randomTeamDocs);		 					
				}else{
					res.json(systemLibrary.noDataError());
				}	
			}
		})	

	}else if(ConnectionFlag == 1){
		if(req.session.sessionID){
		 		// Mongo DB block		 		
		 		Model.documents.find({ "artifactId" : parseInt(req.params.id) }, function(err, teamDoc){
		 			if(teamDoc){		 					 					 					 					 						 			
		 				// var responseData = {
		 				// 	system: systemLibrary.getSystemNode(),
		 				// 	documents: teamDoc
		 				// }
		 				res.send(responseData);
		 			}else{
		 				res.json(systemLibrary.noDataError());
		 			}			
		 		})	
		 	}else{
		 		res.send(systemLibrary.sessionExpired());
		 	}
		 }
		})

// -----------------------------------------------------------------



// -----------------------------------------------------------------

router.route("/api/1/staff/request/:request",urlencodedParser)
// get staff member where CMT =1 

.get(function(req, res, err) {
	var sessionID = req.params.sessionID;
	if(ConnectionFlag == 0) {
		if(Model.mockdata){		 			
			Model.mockdata.find({mock_id: 2}, function(err, mock){
				if(err){
					res.json(systemLibrary.serverError());
				}else{		 		
					if(mock.length){
						var responseStaffs= mock[0].toObject().mock_data;						
						res.json(responseStaffs);		 											
					}else{
						res.json(systemLibrary.noDataError());
					}	
				}
			})		 			
		}else{
			res.json(systemLibrary.serverError());			
		}	
	} else if (ConnectionFlag == 1) {
		if(!req.session.sessionID) {
                // Mongo DB block                               
                var request =  parseInt(req.params.request);

                Model.staffs.find({"request":request}, function(err, docs){
                	if(err){

                	}else if(docs){
                		if(docs.length){
                			var responseData = {
                				system: systemLibrary.getSystemNode(),
                				staffs: docs
                			}
                			res.json(responseData);                	                
                		}else{
                			res.json(systemLibrary.noDataError());
                		}                		
                	}
                })                     	
            } else {
                // Session expired messsage from Library
                res.send(systemLibrary.sessionExpired());
            }
        }
    })



// DELETE TEAM
router.route("/api/1/teams/delete", urlencodedParser)
.post(function(req,res){
	// console.log(req.body);	
	if(req.session.sessionID){
		var conditions = { 
			teamId: req.body.teamId },
			update = { active : 0 },
			options = { };		  
		  // Update query
		  Model.teams.update(conditions, update, options, callback);
		  function callback (err, numAffected) {
		  	if(err){

		  	}else if(numAffected){
		  		var responseData = {
		  			system : systemLibrary.dataUpdatedMessage(),
		  			team : Model.teams.find({})
		  		}
		  		res.send(responseData);
		  	}
		  }
		}else{
		// Session expired messsage from Library
		res.send(systemLibrary.sessionExpired());		
	}
})

// ---------------------------------------------------


// SEARCH REPORTS
router.route("/api/1/reports/search", urlencodedParser)
.post(function(req,res){
	
	var searchObj = {		
		"type": req.body.type,
		"category" : req.body.category,
		"submittedStaffName" : req.body.name,
		"open" : req.body.openStatus,
		"reportDateTIme" : { $gte : new Date(req.body.dateAfter) }		
	};

	if(!req.session.sessionID){
 		// Mongo DB block		 		
 		Model.reports.find( searchObj , function(err, reports){
 			if(reports){		 					 					 					 					 						 			
 				var responseData = {
 					system: systemLibrary.getSystemNode(),
 					reports: reports
 				}
 				res.send(responseData);
 			}else{
 				res.json(systemLibrary.noDataError());
 			}			
 		})	
 	}else{
 		res.send(systemLibrary.sessionExpired());
 	}
 })


router.route('/api/1/system/:staffId', urlencodedParser)
.get(function(req, res){
	// Check Login credentials
	Model.staffs.find({ "stafId" : parseInt(req.params.staffId) }, function(err, response){
		if(response.length > 0){
			response = response[0].toObject();		 					 					 					 					 						 			
			var staffID = response.stafId;

			// Geting notification for this staff
			// Use new Date() instead of moment().format() for ISODate timezone
			// moment().format() gets the local timezone and returns in ISODate format.
			var notification = Model.notifications.find({ staffId: staffID.toString() , expire : { $gte : new Date(moment().format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]'))}})


			var system = systemLibrary.getSystemNode();
			
			system.system.notification = notification;

			res.json(system);
		}else{			
			// res.send(systemLibrary.getSystemNode());	
			res.send(systemLibrary.noDataError());	
		}			
	})
})


app.post('/api/1/staff/upload/', upload, function(req,res){	
	var result;
	var file = req.file.destination +'//'+ req.file.filename;
	excel2json({
		input: file,
		output: "./uploads/output.json"
	}, function(err, array) {
		result = array;
		if(err) {
			
		} else {
			// for(var staff = 0; staff < result.length; staff++ ){

			async.each(result, function(staff, asyncCall) {
				// Check - not empty?
				if( staff.email != null && staff.email != "" ){

					// Check duplication 										
					Model.staffs.find({"email": staff.email}, function(err, docs){

						if( docs.length > 0){
							// Update BLOCK							
							// Get staff _id from existing staff record

							var staffID = docs[0].toObject()._id;							
							var emailID = docs[0].toObject().email;							
							// Update block
							var conditions = { "email": staff.email },
							update = staff,
							options = { "upsert": true };
							// Update query
							Model.staffs.update( conditions, update, options, callback );
							
							function callback(){

							};
							// Check if this record exist in teams colleciton
							
								Model.teams.find({"members.staff._id" : staffID }, function(err, teams){
									if(teams.length){									
										// for(team in teams){	
										var updateTeamObj;
										async.each(teams, function(team, asyncTeamCall) {
											updateTeamObj = team;								
											var teamIndex = teams.indexOf(team);
											// console.log("teamIndex", teamIndex);
											var members = team.members;	
											// console.log("members length", members.length);											
											// for(var member = 0; member < members.length; members++){
											async.each(members, function(member, asyncMemberCall) {								
												// Finding the member node in the teams colleciton
												var memberIndex = members.indexOf(member);
												var staffMember = member.staff;
												if(staffMember != undefined){													
													console.log("Matching", staffMember._id, staffID);																										
													if( staffMember.email == emailID ){	
														console.log("MATCHED");
														staff._id = updateTeamObj.members[memberIndex].staff._id;
														updateTeamObj.members[memberIndex].staff = staff;
														// console.log(updateTeamObj.members[memberIndex].staff);
														// teams[teamIndex].members[memberIndex].staff = staff;
													}
												}
												asyncMemberCall();
											});
									// }	
											console.log("team ID", team._id.toString().toObjectId());

											var conditions = { teamId : 1345327 },
											teamUpdate = updateTeamObj,										
											options = { "upsert": true };
											// Update query
											// console.log("Final object to update", teamUpdate.members);
											Model.teams.update( conditions, teamUpdate, options, callback );
											function callback(err, res){
												console.log("Response", res);
											};
										// }
										asyncTeamCall();
									});
									}else if(err){

									}
								})
							asyncCall();
						}else{							
							
							// Insert Block							

							var id = new ObjectID();
							console.log("INSERT__ ", id);

							if(staff.SecurityZones == undefined){
								staff.SecurityZones = systemLibrary.getSecurityZoneNode();
							}

							insert = staff,
							options = { "upsert": true };		  
							
							// set object ID to staff node
							insert._id =  id;
							// Update query

							Model.staffs.insertMany(insert, function(err, res){

							});
							asyncCall();
						}
					});
				}

			})
			// }

			var responseData = {
				system: systemLibrary.getSystemNode(),
				staffs : Model.staffs.find({})
			}
			res.json(result);
		}
	});
});


app.post('/api/1/claim/vehicleRegistration', upload, function(req,res){	
	var file = req.file.destination +'\\'+ req.file.filename;
	excel2json({
		input: file,
		output: "./uploads/vehicle.json"
	}, function(err, result) {
		if(err) {
			
		} else {			
			console.log(result);
			Model.vehicleregistration.insertMany(result,  function(err, docs){				
				var responseData = {
					system: systemLibrary.getSystemNode(),
					staffs : Model.vehicleregistration.find({})
				}
				res.json(responseData);
			})
		}
	});
});

// ---------------------------------------------------

// SEARCH REPORTS
router.route("/api/1/user/forgot/", urlencodedParser)
.post(function(req,res){
 		// Mongo DB block		 		
 		Model.staffs.find( {"email" : req.body.u } , function(err, staffs){ 					
 			// var staffID = staffs[0].stafId;
 			if(staffs.length > 0){		 	 			
 				var mailOptions = {
 					from : "jefinzinbox@gmail.com",
 					to : req.body.u,
 					subject : "Login Credentials",
 					text : "asdfhjk",
 					html : "<h4>Your new password is :<br> 123456 </h4>"
 				};

 				smtpTransport.sendMail(mailOptions, function(error, result){
 					if(error){
 						res.send(systemLibrary.getSystemNode("SERVER_ERROR"));		            
 					}else{

		        	// var insertObj = {
		        	// 	staffId : staffID,
		        	// 	message : "Your account has been"
		        	// }
		        	// Model.notifications.insert();
		        	res.send(systemLibrary.getSystemNode("ACC_ACTIVATED"));
		        }
		    })			
 			}else{
 				res.send(systemLibrary.getSystemNode("LOGINFAILED"));
 			}			
 		})	 	
 	})


// Get Staff list of a company
router.route('/api/1/claim/vehicleRegistration')
.get(function(req, res, err) {
	var sessionID = req.params.sessionID;
	if(ConnectionFlag == 0) {
		if(Model.mockdata){		 			
			Model.mockdata.find({mock_id: 10}, function(err, mock){
				if(err){
					res.json(systemLibrary.serverError());
				}else{		 		
					if(mock.length){
						var responseStaffs= mock[0].toObject().mock_data;						
						res.json(responseStaffs);		 											
					}else{
						res.json(systemLibrary.noDataError());
					}	
				}
			})		 			
		}else{
			res.json(systemLibrary.serverError());			
		}	
	} else if (ConnectionFlag == 1) {
		if(req.session.sessionID) {
                // Mongo DB block                               
                var staffs = Model.vehicleregistration.find();
                if(staffs){
                	var responseData = {
                		system: systemLibrary.getSystemNode(),
                		staffs: Model.vehicleregistration.find()
                	}
                	res.json(responseData);                	                
                }else{
                	res.json(systemLibrary.noDataError());
                }                                 	

            } else {
                // Session expired messsage from Library
                res.send(systemLibrary.sessionExpired());
            }
        }
    })

// -----------------------------------------------------------------


// // DOWNLOAD REPORTS
// router.route("/api/1/reports/download/", urlencodedParser)
// .post(function(req,res){

// 	// Where fileName is name of the file and response is Node.js Reponse. 
// 	function responseFile(url, fileName, response) {
// 	  var filePath =  url; // or any file format

// 	  // Check if file specified by the filePath exists 
// 	  fs.exists(filePath, function(exists){
// 	      if (exists) {     
// 	        // Content-type is very interesting part that guarantee that
// 	        // Web browser will handle response in an appropriate manner.
// 	        response.writeHead(200, {
// 	          "Content-Type": "application/octet-stream",
// 	          "Content-Disposition" : "attachment; filename=" + fileName});
// 	        fs.createReadStream(filePath).pipe(response);
// 	        // res.send(response);
// 	      } else {
// 	        response.writeHead(400, {"Content-Type": "text/plain"});
// 	        response.end("ERROR File does NOT Exists");
// 	      }
// 	    });
// 	  }



// 	// console.log(req.body);	
// 	if(!req.session.sessionID){		
// 		  // Find query
// 		  Model.reports.find({ reportId : req.body.reportId }, function(err, report) {
// 		  	if(err){

// 		  	}else if(report){
// 		  		report = report[0].toObject();
// 		  		console.log(report.category);
// 		  		var responseData = {
// 		  			system : systemLibrary.dataUpdatedMessage(),
// 		  			report : report
// 		  		}

// 		  		    // creating archives 
// 				    var zip = new AdmZip();				   
// 				    // add file directly 
// 				    zip.addFile("report.txt", new Buffer(responseData.toString()), "");
// 				    // add local file 
// 				    // zip.addLocalFile("/home/me/some_picture.png");
// 				    // get everything as a buffer 
// 				    // var willSendthis = zip.toBuffer();
// 				    // or write everything to disk 
// 				    console.log(report.submittedStaffName);
// 				    var zipFileName = report.category+report.submittedStaffName.replace(/ /g,"_")+report.reportDateTIme.toString().replace(/ /g,"_");

// 				    zip.writeZip("./uploads/"+zipFileName+".zip");
// 		  		// responseFile("./uploads/report.zip", "report.zip", res);
// 		  		// res.send(zip);
// 		  	}
// 		  })
// 		}else{
// 		// Session expired messsage from Library
// 		res.send(systemLibrary.sessionExpired());		
// 	}
// })


// REGISTER OUR ROUTES -------------------------------
app.use('/', router);

// Server Code
// 10.0.0.169
var server = app.listen(8080,'192.168.56.1', function () {
	var host = server.address().address
	var port = server.address().port   
	console.log("Listening to http://%s:%s", host, port);	

})

// Export app module
module.exports = app;
