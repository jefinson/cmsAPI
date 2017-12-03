// Default security zones for new staff
var SecurityZones = {
	Cmt: 0, 
	CmtAdmin: 1, 
	Admin: 0, 
	SingleCrisisMode: 0, 
	ClaimsReporting: 1, 
	CrisisReporting: 1, 
	CrisisActivation: 0, 
	CrisisActivationOptions: 0, 
	MeetingCreate: 0, 
	TaskManagement: 0 
}

// id field cannot be changed.
var errors = [
	{	
		id : "LOGINFAILED",
		errorCode: 401,
		errorMsg: "Authentication Failed! Please try again!"
	},
	{	
		id : "USERNOTFOUND",
		errorCode : 404,
		errorMsg : "User email not found"
	},
	{	
		id : "ACC_ACTIVATED",
		errorCode : 200,
		errorMsg : "Account activated. Check your mail"
	},
	{	
		id : "SERVER_ERROR",
		errorCode : 500,
		errorMsg : "There is an error connecting server!"
	}
];

var systemNode = function(){
	this.systemObj = function(){
		return {
			"system": {
				"errorCode": 0,
				"errorMsg": "",
				"notification": {
					"message": ""
				},
				"badge": {
					"myMeetings": 0,
					"crisisEvents": 0
				},
				"mySecurityRole": {
					"bitwise": 0
				}
			}
		}
	}
};



var systemMessages = function(){
	this.getSystemNode = function(code){
		console.log(code);
		var errorCode, errorMsg;
		var system = new systemNode();	
		var sys = system.systemObj();			
		if(code){			
			for(i in errors){
				if(errors[i].id == code){
					errorCode = errors[i].errorCode;
					errorMsg = errors[i].errorMsg;
				}
			}
			sys.system.errorCode = errorCode;
			sys.system.errorMsg = errorMsg;
			return sys;
		}else{
			return system.systemObj();
		}
	};
	this.getSecurityZoneValue = function(zone){
		var zoneValue = 0;
		switch(zone){
			case 'Cmt' : 
				zoneValue = 1;
				break;
			case 'CmtAdmin' : 
				zoneValue = 2;
				break;
			case 'Admin' : 
				zoneValue = 4;
				break;
			case 'SingleCrisisMode' : 
				zoneValue = 8;
				break;
			case 'ClaimsReporting' : 
				zoneValue = 16;
				break;
			case 'CrisisReporting' : 
				zoneValue = 32;
				break;
			case 'CrisisActivation' : 
				zoneValue = 64;
				break;
			case 'CrisisActivationOptions' : 
				zoneValue = 128;
				break;
			case 'MeetingCreate' : 
				zoneValue = 256;
				break;
			case 'TaskManagement' : 
				return 512;
				break;
			default :
				zoneValue = 0;
		}
		return zoneValue;
	}	
	this.getSecurityZoneNode = function(){
		return SecurityZones;
	}
	this.serverError = function(){		
		var serverErrorNode = this.getSystemNode();
			serverErrorNode.system.errorCode = 500;
			serverErrorNode.system.errorMsg = "There is a problem connecting to the server";
		return serverErrorNode;
	};		

	this.noDataError = function(){
		var noDataErrorNode = this.getSystemNode();
			noDataErrorNode.system.errorCode = 500;
			noDataErrorNode.system.errorMsg = "Data not found";
		return noDataErrorNode;
	};

	this.sessionExpired = function(){
		var sessionExpiredNode = this.getSystemNode();
			sessionExpiredNode.system.errorCode = 123;
			sessionExpiredNode.system.errorMsg = "Session has been Expired, please login again.";
		return sessionExpiredNode;
	};

	this.dataUpdatedMessage = function(){
		var dataUpdatedNode = this.getSystemNode();			
			dataUpdatedNode.system.notification.message = "Data has been successfully updated.";
		return dataUpdatedNode;
	};
}
exports = module.exports = systemMessages;
