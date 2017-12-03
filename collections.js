use cms

db.createCollection('artifact');
db.createCollection('companies');
db.createCollection('crisis');
db.createCollection('meetings');
db.createCollection('mockrecords');
db.createCollection('reports');
db.createCollection('role');
db.createCollection('staffs');
db.createCollection('teams');
db.createCollection('documents');
db.createCollection('vehicle.registrations');
db.createCollection('notifications');
db.createCollection('messages');


db.getCollection('notifications').insertMany([
	{     
      "staffId": "1234",
      "message": "A meeting has been rescheduled",
      "status": "0",
      "expire": new ISODate("2017-11-05T12:30:00")
    },
    {     
      "staffId": "1235",
      "message": "A meeting has been rescheduled",
      "status": "0",
      "expire": new ISODate("2015-05-05T12:30:00")
    },
    {     
      "staffId": "1236",
      "message": "A meeting has been rescheduled",
      "status": "0",
      "expire": new ISODate("2015-05-05T12:30:00")
    },
    {     
      "staffId": "1237",
      "message": "A meeting has been rescheduled",
      "status": "0",
      "expire": new ISODate("2015-05-05T12:30:00")
    }
]);

db.getCollection('vehicle.registrations').insertMany([
    {
      "No": "value",
      "Company": "value",
      "Division": "value",
      "Department": "value",
      "Branch": "value",
      "Year": "value",
      "Make": "value",
      "Model": "value",
      "Vin": "value",
      "License": "value",
      "StateRegistered": "value",
      "DriverFirst": "value",
      "DriverLast": "value",
      "DriverLicense": "value",
      "DriverState": "value",
      "DriverDOB": "value",
      "GarageAddress": "value",
      "GarageCity": "value",
      "GarageState": "value",
      "GarageZip": "value",
      "OriginalCost": "value",
      "LeasingCompany": "value",
      "Veh#": "value",
      "VehicleType": "value",
      "VehicleRadius": "value",
      "VehicleBusiness": "value",
      "RegistrationName": "value",
      "RegistrationAddress": "value",
      "RegistrationAddress2": "value",
      "RegistrationCity": "value",
      "RegistrationState": "value",
      "RegistrationZip": "value",
      "FEINRegistrant": "value",
      "DateAdded": "value",
      "DateOfChange": "value",
      "DateDeleted": "value",
      "Comment": "value"
    },
    {
      "No": "value",
      "Company": "value",
      "Division": "value",
      "Department": "value",
      "Branch": "value",
      "Year": "value",
      "Make": "value",
      "Model": "value",
      "Vin": "value",
      "License": "value",
      "StateRegistered": "value",
      "DriverFirst": "value",
      "DriverLast": "value",
      "DriverLicense": "value",
      "DriverState": "value",
      "DriverDOB": "value",
      "GarageAddress": "value",
      "GarageCity": "value",
      "GarageState": "value",
      "GarageZip": "value",
      "OriginalCost": "value",
      "LeasingCompany": "value",
      "Veh#": "value",
      "VehicleType": "value",
      "VehicleRadius": "value",
      "VehicleBusiness": "value",
      "RegistrationName": "value",
      "RegistrationAddress": "value",
      "RegistrationAddress2": "value",
      "RegistrationCity": "value",
      "RegistrationState": "value",
      "RegistrationZip": "value",
      "FEINRegistrant": "value",
      "DateAdded": "value",
      "DateOfChange": "value",
      "DateDeleted": "value",
      "Comment": "value"
    }
  ]);

db.documents.insertMany([
    {
      "artifactId": 1234,
      "crisisId": "'7892345'",
      "teamId": 1345325,
      "teamName": "CMT",
      "name": "'ProceduresX'",
      "category": "'plan'",
      "global": "'no'",
      "mobileSticky": "'Yes'",
      "type": "'PDF'",
      "uri": "'https://loc/loc/abc123.pdf'",
      "Uri_thumb": "'https://loc/loc/abc123.pdf'",
      "updated": "2015-05-05T12:30:00"
    },
    {
      "artifactId": 1234,
      "crisisId": "'7892345'",
      "teamId": 1345325,
      "teamName": "CMT",
      "name": "'ProceduresX'",
      "category": "'plan'",
      "global": "'no'",
      "mobileSticky": "'Yes'",
      "type": "'PDF'",
      "uri": "'https://loc/loc/abc123.pdf'",
      "Uri_thumb": "'https://loc/loc/abc123.pdf'",
      "updated": "2015-05-05T12:30:00"
    },
    {
      "artifactId": 1234,
      "crisisId": "'7892345'",
      "teamId": 1345325,
      "teamName": "CMT",
      "name": "'ProceduresX'",
      "category": "'plan'",
      "global": "'no'",
      "mobileSticky": "'Yes'",
      "type": "'PDF'",
      "uri": "'https://loc/loc/abc123.pdf'",
      "Uri_thumb": "'https://loc/loc/abc123.pdf'",
      "updated": "2015-05-05T12:30:00"
    }
  ]);


db.artifact.insertMany([
	{
		"_id" : ObjectId("59dddbe3290edc9e39a3a037"),
		"artifactUri" : "'https://loc/loc/abc123.jpg'",
		"artifactThumbUri" : "'https://loc/loc/abc123.jpg'"
	},
	{
		"_id" : ObjectId("59dddbe3290edc9e39a3a038"),
		"artifactUri" : "'https://loc/loc/abc123.jpg'",
		"artifactThumbUri" : "'https://loc/loc/abc123.jpg'"
	},
	{
		"_id" : ObjectId("59dddbe3290edc9e39a3a039"),
		"artifactUri" : "'https://loc/loc/abc123.jpg'",
		"artifactThumbUri" : "'https://loc/loc/abc123.jpg'"
	},
	{
		"_id" : ObjectId("59dddbe3290edc9e39a3a03a"),
		"artifactUri" : "'https://loc/loc/abc123.jpg'",
		"artifactThumbUri" : "'https://loc/loc/abc123.jpg'"
	}
]
);


db.companies.insertMany([
	{
		"_id" : ObjectId("59cbcb32472ad37a8b93976f"),
		"companyId" : 11111,
		"name" : "'KFC'",
		"domain" : "'YKK.com'",
		"status" : true,
		"adminSupportNumber" : "'123",
		"globalSecurityZone" : {
			"Cmt" : 1,
			"CmtAdmin" : 0,
			"Admin" : 0,
			"SingleCrisisMode" : 0,
			"ClaimsReporting" : 1,
			"CrisisReporting" : 1,
			"CrisisActivation" : 1,
			"CrisisActivationOptions" : 1,
			"MeetingCreate" : 1,
			"TaskManagement" : 1
		}
	},
	{
		"_id" : ObjectId("59cbcb32472ad37a8b939770"),
		"companyId" : 22222,
		"name" : "'N KFC'",
		"domain" : "'YKK.com'",
		"status" : true,
		"adminSupportNumber" : "'123",
		"globalSecurityZone" : {
			"Cmt" : 1,
			"CmtAdmin" : 0,
			"Admin" : 0,
			"SingleCrisisMode" : 0,
			"ClaimsReporting" : 1,
			"CrisisReporting" : 1,
			"CrisisActivation" : 1,
			"CrisisActivationOptions" : 1,
			"MeetingCreate" : 1,
			"TaskManagement" : 1
		}
	},
	{
		"_id" : ObjectId("59cbcb32472ad37a8b939771"),
		"companyId" : 33333,
		"name" : "'Anotherr Company'",
		"domain" : "'YKK.com'",
		"status" : true,
		"adminSupportNumber" : "'123",
		"globalSecurityZone" : {
			"Cmt" : 1,
			"CmtAdmin" : 0,
			"Admin" : 0,
			"SingleCrisisMode" : 0,
			"ClaimsReporting" : 1,
			"CrisisReporting" : 1,
			"CrisisActivation" : 1,
			"CrisisActivationOptions" : 1,
			"MeetingCreate" : 1,
			"TaskManagement" : 1
		}
	},
	{
		"_id" : ObjectId("59cbcb32472ad37a8b939772"),
		"companyId" : 44444,
		"name" : "'Google'",
		"domain" : "'google.com'",
		"status" : true,
		"adminSupportNumber" : "'123",
		"globalSecurityZone" : {
			"Cmt" : 1,
			"CmtAdmin" : 0,
			"Admin" : 0,
			"SingleCrisisMode" : 0,
			"ClaimsReporting" : 1,
			"CrisisReporting" : 1,
			"CrisisActivation" : 1,
			"CrisisActivationOptions" : 1,
			"MeetingCreate" : 1,
			"TaskManagement" : 1
		}
	},
	{
		"_id" : ObjectId("59cbcb32472ad37a8b939773"),
		"companyId" : 55555,
		"name" : "'Apple'",
		"domain" : "'apple.com'",
		"status" : true,
		"adminSupportNumber" : "'123",
		"globalSecurityZone" : {
			"Cmt" : 1,
			"CmtAdmin" : 0,
			"Admin" : 0,
			"SingleCrisisMode" : 0,
			"ClaimsReporting" : 1,
			"CrisisReporting" : 1,
			"CrisisActivation" : 1,
			"CrisisActivationOptions" : 1,
			"MeetingCreate" : 1,
			"TaskManagement" : 1
		}
	},
	{
		"_id" : ObjectId("59cbcb32472ad37a8b939774"),
		"companyId" : 66666,
		"name" : "'BlackBerry'",
		"domain" : "'bb.com'",
		"status" : true,
		"adminSupportNumber" : "'123",
		"globalSecurityZone" : {
			"Cmt" : 1,
			"CmtAdmin" : 0,
			"Admin" : 0,
			"SingleCrisisMode" : 0,
			"ClaimsReporting" : 1,
			"CrisisReporting" : 1,
			"CrisisActivation" : 1,
			"CrisisActivationOptions" : 1,
			"MeetingCreate" : 1,
			"TaskManagement" : 1
		}
	}
]
);


db.crisis.insertMany([
	{
		"_id" : ObjectId("59d749a0fb92d64e9b561bc1"),
		"crisisId" : 111111,
		"name" : "'Plant Fire'",
		"description" : "'description'",
		"crisisLevel" : "'ACTIVATE'",
		"dateCreated" : "2015-05-05T12:30:00",
		"createdByStaffId" : 12341,
		"createdBy" : "Bob Thomas",
		"status" : "Active"
	},
	{
		"_id" : ObjectId("59d749a0fb92d64e9b561bc2"),
		"crisisId" : 222222,
		"name" : "'Plant Fire'",
		"description" : "'description'",
		"crisisLevel" : "'ACTIVATE'",
		"dateCreated" : "2015-05-05T12:30:00",
		"createdByStaffId" : 12341,
		"createdBy" : "Bob Thomas",
		"status" : "'Active'"
	},
	{
		"_id" : ObjectId("59d749a0fb92d64e9b561bc3"),
		"crisisId" : 333333,
		"name" : "'Tornado'",
		"description" : "'description'",
		"crisisLevel" : "'ACTIVATE'",
		"dateCreated" : "2015-05-05T12:30:00",
		"createdByStaffId" : 12341,
		"createdBy" : "Bob Thomas",
		"status" : "'Active'"
	}
]
);
db.meetings.insertMany([
	{
		"_id" : ObjectId("59d78499b5975b4626125baf"),
		"meetingId" : 11234,
		"crisisId" : 7892345,
		"teamId" : 12341,
		"crisisLevel" : "'ACTIVATE'",
		"subject" : "'Discussion on media access to building'",
		"description" : "'description'",
		"location" : "West Room",
		"callInDetails" : "1234567777 code 1213456",
		"date" : "2015-05-05T12:30:00",
		"status" : "'Accepted'",
		"documents" : [
			{
				"documentId" : 1234,
				"crisisId" : "'7892345'",
				"teamId" : 1345325,
				"teamName" : "CMT",
				"name" : "'ProceduresX'",
				"category" : "'plan'",
				"global" : "'no'",
				"mobileSticky" : "'Yes'",
				"type" : "'PDF'",
				"uri" : "'https://loc/loc/abc123.pdf'",
				"Uri_thumb" : "'https://loc/loc/abc123.pdf'",
				"updated" : "2015-05-05T12:30:00"
			},
			{
				"documentId" : 1234,
				"crisisId" : "'7892345'",
				"teamId" : 1345325,
				"teamName" : "CMT",
				"name" : "'ProceduresX'",
				"category" : "'plan'",
				"global" : "'no'",
				"mobileSticky" : "'Yes'",
				"type" : "'PDF'",
				"uri" : "'https://loc/loc/abc123.pdf'",
				"Uri_thumb" : "'https://loc/loc/abc123.pdf'",
				"updated" : "2015-05-05T12:30:00"
			}
		],
		"images" : [
			{
				"image" : {
					"documentId" : 1234,
					"crisisId" : "'7892345'",
					"teamId" : 1345325,
					"teamName" : "CMT",
					"name" : "'ProceduresX'",
					"category" : "'plan'",
					"global" : "'no'",
					"mobileSticky" : "'Yes'",
					"type" : "'PDF'",
					"uri" : "'https://loc/loc/abc123.pdf'",
					"Uri_thumb" : "'https://loc/loc/abc123.pdf'",
					"updated" : "2015-05-05T12:30:00"
				}
			},
			{
				"image" : {
					"documentId" : 1234,
					"crisisId" : "'7892345'",
					"teamId" : 1345325,
					"teamName" : "CMT",
					"name" : "'ProceduresX'",
					"category" : "'plan'",
					"global" : "'no'",
					"mobileSticky" : "'Yes'",
					"type" : "'PDF'",
					"uri" : "'https://loc/loc/abc123.pdf'",
					"Uri_thumb" : "'https://loc/loc/abc123.pdf'",
					"updated" : "2015-05-05T12:30:00"
				}
			}
		],
		"team" : {
			"teamId" : 1345325,
			"name" : "CMT",
			"members" : [
				{
					"memberId" : 12412,
					"staff" : {
						"stafId" : 1234,
						"memberOfCMT" : 0,
						"fname" : "'Stan'",
						"lname" : "'Smith'",
						"cell" : 3033341234,
						"work" : 3033341234,
						"email" : "'stan@mail.com'",
						"active" : 1,
						"activationCode" : "er432",
						"security" : {
							"bitwise" : 7
						},
						"SecurityZones" : {
							"Cmt" : 1,
							"CmtAdmin" : 0,
							"Admin" : 0,
							"SingleCrisisMode" : 0,
							"ClaimsReporting" : 1,
							"CrisisReporting" : 1,
							"CrisisActivation" : 1,
							"CrisisActivationOptions" : 1,
							"MeetingCreate" : 1,
							"TaskManagement" : 1
						}
					},
					"teamId" : 1345325,
					"role" : {
						"roleId" : 25,
						"name" : "CAT"
					},
					"teamLead" : "True"
				},
				{
					"memberId" : 12412,
					"staff" : {
						"stafId" : 1234,
						"memberOfCMT" : 0,
						"fname" : "'Stan'",
						"lname" : "'Smith'",
						"cell" : 3033341234,
						"work" : 3033341234,
						"email" : "'stan@mail.com'",
						"active" : 1,
						"activationCode" : "er432",
						"security" : {
							"bitwise" : 7
						},
						"SecurityZones" : {
							"Cmt" : 1,
							"CmtAdmin" : 0,
							"Admin" : 0,
							"SingleCrisisMode" : 0,
							"ClaimsReporting" : 1,
							"CrisisReporting" : 1,
							"CrisisActivation" : 1,
							"CrisisActivationOptions" : 1,
							"MeetingCreate" : 1,
							"TaskManagement" : 1
						}
					},
					"teamId" : 1345325,
					"role" : {
						"roleId" : 25,
						"name" : "CAT"
					},
					"teamLead" : "True"
				}
			]
		}
	},
	{
		"_id" : ObjectId("59d784a2b5975b4626125bb0"),
		"meetingId" : 11235,
		"crisisId" : 7892345,
		"teamId" : 12341,
		"crisisLevel" : "'ACTIVATE'",
		"subject" : "'Discussion on media access to building'",
		"description" : "'description'",
		"location" : "West Room",
		"callInDetails" : "1234567777 code 1213456",
		"date" : "2015-05-05T12:30:00",
		"status" : "'Pending'",
		"documents" : [
			{
				"documentId" : 1234,
				"crisisId" : "'7892345'",
				"teamId" : 1345325,
				"teamName" : "CMT",
				"name" : "'ProceduresX'",
				"category" : "'plan'",
				"global" : "'no'",
				"mobileSticky" : "'Yes'",
				"type" : "'PDF'",
				"uri" : "'https://loc/loc/abc123.pdf'",
				"Uri_thumb" : "'https://loc/loc/abc123.pdf'",
				"updated" : "2015-05-05T12:30:00"
			},
			{
				"documentId" : 1234,
				"crisisId" : "'7892345'",
				"teamId" : 1345325,
				"teamName" : "CMT",
				"name" : "'ProceduresX'",
				"category" : "'plan'",
				"global" : "'no'",
				"mobileSticky" : "'Yes'",
				"type" : "'PDF'",
				"uri" : "'https://loc/loc/abc123.pdf'",
				"Uri_thumb" : "'https://loc/loc/abc123.pdf'",
				"updated" : "2015-05-05T12:30:00"
			}
		],
		"images" : [
			{
				"image" : {
					"documentId" : 1234,
					"crisisId" : "'7892345'",
					"teamId" : 1345325,
					"teamName" : "CMT",
					"name" : "'ProceduresX'",
					"category" : "'plan'",
					"global" : "'no'",
					"mobileSticky" : "'Yes'",
					"type" : "'PDF'",
					"uri" : "'https://loc/loc/abc123.pdf'",
					"Uri_thumb" : "'https://loc/loc/abc123.pdf'",
					"updated" : "2015-05-05T12:30:00"
				}
			},
			{
				"image" : {
					"documentId" : 1234,
					"crisisId" : "'7892345'",
					"teamId" : 1345325,
					"teamName" : "CMT",
					"name" : "'ProceduresX'",
					"category" : "'plan'",
					"global" : "'no'",
					"mobileSticky" : "'Yes'",
					"type" : "'PDF'",
					"uri" : "'https://loc/loc/abc123.pdf'",
					"Uri_thumb" : "'https://loc/loc/abc123.pdf'",
					"updated" : "2015-05-05T12:30:00"
				}
			}
		],
		"team" : {
			"teamId" : 1345325,
			"name" : "CMT",
			"members" : [
				{
					"memberId" : 12412,
					"staff" : {
						"stafId" : 1234,
						"memberOfCMT" : 0,
						"fname" : "'Stan'",
						"lname" : "'Smith'",
						"cell" : 3033341234,
						"work" : 3033341234,
						"email" : "'stan@mail.com'",
						"active" : 1,
						"activationCode" : "er432",
						"security" : {
							"bitwise" : 7
						},
						"SecurityZones" : {
							"Cmt" : 1,
							"CmtAdmin" : 0,
							"Admin" : 0,
							"SingleCrisisMode" : 0,
							"ClaimsReporting" : 1,
							"CrisisReporting" : 1,
							"CrisisActivation" : 1,
							"CrisisActivationOptions" : 1,
							"MeetingCreate" : 1,
							"TaskManagement" : 1
						}
					},
					"teamId" : 1345325,
					"role" : {
						"roleId" : 25,
						"name" : "CAT"
					},
					"teamLead" : "True"
				},
				{
					"memberId" : 12412,
					"staff" : {
						"stafId" : 1234,
						"memberOfCMT" : 0,
						"fname" : "'Stan'",
						"lname" : "'Smith'",
						"cell" : 3033341234,
						"work" : 3033341234,
						"email" : "'stan@mail.com'",
						"active" : 1,
						"activationCode" : "er432",
						"security" : {
							"bitwise" : 7
						},
						"SecurityZones" : {
							"Cmt" : 1,
							"CmtAdmin" : 0,
							"Admin" : 0,
							"SingleCrisisMode" : 0,
							"ClaimsReporting" : 1,
							"CrisisReporting" : 1,
							"CrisisActivation" : 1,
							"CrisisActivationOptions" : 1,
							"MeetingCreate" : 1,
							"TaskManagement" : 1
						}
					},
					"teamId" : 1345325,
					"role" : {
						"roleId" : 25,
						"name" : "CAT"
					},
					"teamLead" : "True"
				}
			]
		}
	},
	{
		"_id" : ObjectId("59d784a5b5975b4626125bb1"),
		"meetingId" : 11236,
		"crisisId" : 7892345,
		"teamId" : 12341,
		"crisisLevel" : "'ACTIVATE'",
		"subject" : "'Discussion on media access to building'",
		"description" : "'description'",
		"location" : "West Room",
		"callInDetails" : "1234567777 code 1213456",
		"date" : "2015-05-05T12:30:00",
		"status" : "'Pending'",
		"documents" : [
			{
				"documentId" : 1234,
				"crisisId" : "'7892345'",
				"teamId" : 1345325,
				"teamName" : "CMT",
				"name" : "'ProceduresX'",
				"category" : "'plan'",
				"global" : "'no'",
				"mobileSticky" : "'Yes'",
				"type" : "'PDF'",
				"uri" : "'https://loc/loc/abc123.pdf'",
				"Uri_thumb" : "'https://loc/loc/abc123.pdf'",
				"updated" : "2015-05-05T12:30:00"
			},
			{
				"documentId" : 1234,
				"crisisId" : "'7892345'",
				"teamId" : 1345325,
				"teamName" : "CMT",
				"name" : "'ProceduresX'",
				"category" : "'plan'",
				"global" : "'no'",
				"mobileSticky" : "'Yes'",
				"type" : "'PDF'",
				"uri" : "'https://loc/loc/abc123.pdf'",
				"Uri_thumb" : "'https://loc/loc/abc123.pdf'",
				"updated" : "2015-05-05T12:30:00"
			}
		],
		"images" : [
			{
				"image" : {
					"documentId" : 1234,
					"crisisId" : "'7892345'",
					"teamId" : 1345325,
					"teamName" : "CMT",
					"name" : "'ProceduresX'",
					"category" : "'plan'",
					"global" : "'no'",
					"mobileSticky" : "'Yes'",
					"type" : "'PDF'",
					"uri" : "'https://loc/loc/abc123.pdf'",
					"Uri_thumb" : "'https://loc/loc/abc123.pdf'",
					"updated" : "2015-05-05T12:30:00"
				}
			},
			{
				"image" : {
					"documentId" : 1234,
					"crisisId" : "'7892345'",
					"teamId" : 1345325,
					"teamName" : "CMT",
					"name" : "'ProceduresX'",
					"category" : "'plan'",
					"global" : "'no'",
					"mobileSticky" : "'Yes'",
					"type" : "'PDF'",
					"uri" : "'https://loc/loc/abc123.pdf'",
					"Uri_thumb" : "'https://loc/loc/abc123.pdf'",
					"updated" : "2015-05-05T12:30:00"
				}
			}
		],
		"team" : {
			"teamId" : 1345325,
			"name" : "CMT",
			"members" : [
				{
					"memberId" : 12412,
					"staff" : {
						"stafId" : 1234,
						"memberOfCMT" : 0,
						"fname" : "'Stan'",
						"lname" : "'Smith'",
						"cell" : 3033341234,
						"work" : 3033341234,
						"email" : "'stan@mail.com'",
						"active" : 1,
						"activationCode" : "er432",
						"security" : {
							"bitwise" : 7
						},
						"SecurityZones" : {
							"Cmt" : 1,
							"CmtAdmin" : 0,
							"Admin" : 0,
							"SingleCrisisMode" : 0,
							"ClaimsReporting" : 1,
							"CrisisReporting" : 1,
							"CrisisActivation" : 1,
							"CrisisActivationOptions" : 1,
							"MeetingCreate" : 1,
							"TaskManagement" : 1
						}
					},
					"teamId" : 1345325,
					"role" : {
						"roleId" : 25,
						"name" : "CAT"
					},
					"teamLead" : "True"
				},
				{
					"memberId" : 12412,
					"staff" : {
						"stafId" : 1234,
						"memberOfCMT" : 0,
						"fname" : "'Stan'",
						"lname" : "'Smith'",
						"cell" : 3033341234,
						"work" : 3033341234,
						"email" : "'stan@mail.com'",
						"active" : 1,
						"activationCode" : "er432",
						"security" : {
							"bitwise" : 7
						},
						"SecurityZones" : {
							"Cmt" : 1,
							"CmtAdmin" : 0,
							"Admin" : 0,
							"SingleCrisisMode" : 0,
							"ClaimsReporting" : 1,
							"CrisisReporting" : 1,
							"CrisisActivation" : 1,
							"CrisisActivationOptions" : 1,
							"MeetingCreate" : 1,
							"TaskManagement" : 1
						}
					},
					"teamId" : 1345325,
					"role" : {
						"roleId" : 25,
						"name" : "CAT"
					},
					"teamLead" : "True"
				}
			]
		}
	},
	{
		"_id" : ObjectId("59d784a8b5975b4626125bb2"),
		"meetingId" : 11237,
		"crisisId" : 7892345,
		"teamId" : 12341,
		"crisisLevel" : "'ACTIVATE'",
		"subject" : "'Discussion on media access to building'",
		"description" : "'description'",
		"location" : "West Room",
		"callInDetails" : "1234567777 code 1213456",
		"date" : "2015-05-05T12:30:00",
		"status" : "'Pending'",
		"documents" : [
			{
				"documentId" : 1234,
				"crisisId" : "'7892345'",
				"teamId" : 1345325,
				"teamName" : "CMT",
				"name" : "'ProceduresX'",
				"category" : "'plan'",
				"global" : "'no'",
				"mobileSticky" : "'Yes'",
				"type" : "'PDF'",
				"uri" : "'https://loc/loc/abc123.pdf'",
				"Uri_thumb" : "'https://loc/loc/abc123.pdf'",
				"updated" : "2015-05-05T12:30:00"
			},
			{
				"documentId" : 1234,
				"crisisId" : "'7892345'",
				"teamId" : 1345325,
				"teamName" : "CMT",
				"name" : "'ProceduresX'",
				"category" : "'plan'",
				"global" : "'no'",
				"mobileSticky" : "'Yes'",
				"type" : "'PDF'",
				"uri" : "'https://loc/loc/abc123.pdf'",
				"Uri_thumb" : "'https://loc/loc/abc123.pdf'",
				"updated" : "2015-05-05T12:30:00"
			}
		],
		"images" : [
			{
				"image" : {
					"documentId" : 1234,
					"crisisId" : "'7892345'",
					"teamId" : 1345325,
					"teamName" : "CMT",
					"name" : "'ProceduresX'",
					"category" : "'plan'",
					"global" : "'no'",
					"mobileSticky" : "'Yes'",
					"type" : "'PDF'",
					"uri" : "'https://loc/loc/abc123.pdf'",
					"Uri_thumb" : "'https://loc/loc/abc123.pdf'",
					"updated" : "2015-05-05T12:30:00"
				}
			},
			{
				"image" : {
					"documentId" : 1234,
					"crisisId" : "'7892345'",
					"teamId" : 1345325,
					"teamName" : "CMT",
					"name" : "'ProceduresX'",
					"category" : "'plan'",
					"global" : "'no'",
					"mobileSticky" : "'Yes'",
					"type" : "'PDF'",
					"uri" : "'https://loc/loc/abc123.pdf'",
					"Uri_thumb" : "'https://loc/loc/abc123.pdf'",
					"updated" : "2015-05-05T12:30:00"
				}
			}
		],
		"team" : {
			"teamId" : 1345325,
			"name" : "CMT",
			"members" : [
				{
					"memberId" : 12412,
					"staff" : {
						"stafId" : 1234,
						"memberOfCMT" : 0,
						"fname" : "'Stan'",
						"lname" : "'Smith'",
						"cell" : 3033341234,
						"work" : 3033341234,
						"email" : "'stan@mail.com'",
						"active" : 1,
						"activationCode" : "er432",
						"security" : {
							"bitwise" : 7
						},
						"SecurityZones" : {
							"Cmt" : 1,
							"CmtAdmin" : 0,
							"Admin" : 0,
							"SingleCrisisMode" : 0,
							"ClaimsReporting" : 1,
							"CrisisReporting" : 1,
							"CrisisActivation" : 1,
							"CrisisActivationOptions" : 1,
							"MeetingCreate" : 1,
							"TaskManagement" : 1
						}
					},
					"teamId" : 1345325,
					"role" : {
						"roleId" : 25,
						"name" : "CAT"
					},
					"teamLead" : "True"
				},
				{
					"memberId" : 12412,
					"staff" : {
						"stafId" : 1234,
						"memberOfCMT" : 0,
						"fname" : "'Stan'",
						"lname" : "'Smith'",
						"cell" : 3033341234,
						"work" : 3033341234,
						"email" : "'stan@mail.com'",
						"active" : 1,
						"activationCode" : "er432",
						"security" : {
							"bitwise" : 7
						},
						"SecurityZones" : {
							"Cmt" : 1,
							"CmtAdmin" : 0,
							"Admin" : 0,
							"SingleCrisisMode" : 0,
							"ClaimsReporting" : 1,
							"CrisisReporting" : 1,
							"CrisisActivation" : 1,
							"CrisisActivationOptions" : 1,
							"MeetingCreate" : 1,
							"TaskManagement" : 1
						}
					},
					"teamId" : 1345325,
					"role" : {
						"roleId" : 25,
						"name" : "CAT"
					},
					"teamLead" : "True"
				}
			]
		}
	}
]
);

db.mockrecords.insertMany([
	{
		"_id" : ObjectId("59d273951da4eec70bc3e38e"),
		"mock_id" : 1,
		"mock_name" : "companies",
		"mock_data" : [
			{
				"companyId" : 11111,
				"name" : "'KFC'",
				"domain" : "'YKK.com'",
				"status" : true,
				"adminSupportNumber" : "'123",
				"globalSecurityZone" : {
					"Cmt" : 1,
					"CmtAdmin" : 0,
					"Admin" : 0,
					"SingleCrisisMode" : 0,
					"ClaimsReporting" : 1,
					"CrisisReporting" : 1,
					"CrisisActivation" : 1,
					"CrisisActivationOptions" : 1,
					"MeetingCreate" : 1,
					"TaskManagement" : 1
				}
			},
			{
				"companyId" : 22222,
				"name" : "'KFC'",
				"domain" : "'YKK.com'",
				"status" : true,
				"adminSupportNumber" : "'123",
				"globalSecurityZone" : {
					"Cmt" : 1,
					"CmtAdmin" : 0,
					"Admin" : 0,
					"SingleCrisisMode" : 0,
					"ClaimsReporting" : 1,
					"CrisisReporting" : 1,
					"CrisisActivation" : 1,
					"CrisisActivationOptions" : 1,
					"MeetingCreate" : 1,
					"TaskManagement" : 1
				}
			},
			{
				"companyId" : 33333,
				"name" : "'Nike'",
				"domain" : "'nike.com'",
				"status" : true,
				"adminSupportNumber" : "'123",
				"globalSecurityZone" : {
					"Cmt" : 1,
					"CmtAdmin" : 0,
					"Admin" : 0,
					"SingleCrisisMode" : 0,
					"ClaimsReporting" : 1,
					"CrisisReporting" : 1,
					"CrisisActivation" : 1,
					"CrisisActivationOptions" : 1,
					"MeetingCreate" : 1,
					"TaskManagement" : 1
				}
			},
			{
				"companyId" : 44444,
				"name" : "'Google'",
				"domain" : "'google.com'",
				"status" : true,
				"adminSupportNumber" : "'123",
				"globalSecurityZone" : {
					"Cmt" : 1,
					"CmtAdmin" : 0,
					"Admin" : 0,
					"SingleCrisisMode" : 0,
					"ClaimsReporting" : 1,
					"CrisisReporting" : 1,
					"CrisisActivation" : 1,
					"CrisisActivationOptions" : 1,
					"MeetingCreate" : 1,
					"TaskManagement" : 1
				}
			},
			{
				"companyId" : 55555,
				"name" : "'Apple'",
				"domain" : "'apple.com'",
				"status" : true,
				"adminSupportNumber" : "'123",
				"globalSecurityZone" : {
					"Cmt" : 1,
					"CmtAdmin" : 0,
					"Admin" : 0,
					"SingleCrisisMode" : 0,
					"ClaimsReporting" : 1,
					"CrisisReporting" : 1,
					"CrisisActivation" : 1,
					"CrisisActivationOptions" : 1,
					"MeetingCreate" : 1,
					"TaskManagement" : 1
				}
			},
			{
				"companyId" : 66666,
				"name" : "'BlackBerry'",
				"domain" : "'bb.com'",
				"status" : true,
				"adminSupportNumber" : "'123",
				"globalSecurityZone" : {
					"Cmt" : 1,
					"CmtAdmin" : 0,
					"Admin" : 0,
					"SingleCrisisMode" : 0,
					"ClaimsReporting" : 1,
					"CrisisReporting" : 1,
					"CrisisActivation" : 1,
					"CrisisActivationOptions" : 1,
					"MeetingCreate" : 1,
					"TaskManagement" : 1
				}
			}
		]
	},
	{
		"_id" : ObjectId("59d273fd1da4eec70bc3e38f"),
		"mock_id" : 2,
		"mock_name" : "staffs",
		"mock_data" : [
			{
				"companyId" : 11111,
				"stafId" : 1234,
				"memberOfCMT" : 0,
				"fname" : "'Stan'",
				"lname" : "'Smith'",
				"cell" : 3033341234,
				"work" : 3033341234,
				"email" : "'stan@mail.com'",
				"active" : 1,
				"activationCode" : "er432",
				"security" : {
					"bitwise" : 7
				},
				"SecurityZones" : {
					"Cmt" : 1,
					"CmtAdmin" : 0,
					"Admin" : 0,
					"SingleCrisisMode" : 0,
					"ClaimsReporting" : 1,
					"CrisisReporting" : 1,
					"CrisisActivation" : 1,
					"CrisisActivationOptions" : 1,
					"MeetingCreate" : 1,
					"TaskManagement" : 1
				}
			},
			{
				"companyId" : 22222,
				"stafId" : 1234,
				"memberOfCMT" : 0,
				"fname" : "'Stan'",
				"lname" : "'Smith'",
				"cell" : 3033341234,
				"work" : 3033341234,
				"email" : "'stan@mail.com'",
				"active" : 1,
				"activationCode" : "er432",
				"security" : {
					"bitwise" : 7
				},
				"SecurityZones" : {
					"Cmt" : 1,
					"CmtAdmin" : 0,
					"Admin" : 0,
					"SingleCrisisMode" : 0,
					"ClaimsReporting" : 1,
					"CrisisReporting" : 1,
					"CrisisActivation" : 1,
					"CrisisActivationOptions" : 1,
					"MeetingCreate" : 1,
					"TaskManagement" : 1
				}
			},
			{
				"companyId" : 33333,
				"stafId" : 1234,
				"memberOfCMT" : 0,
				"fname" : "'Stan'",
				"lname" : "'Smith'",
				"cell" : 3033341234,
				"work" : 3033341234,
				"email" : "'stan@mail.com'",
				"active" : 1,
				"activationCode" : "er432",
				"security" : {
					"bitwise" : 7
				},
				"SecurityZones" : {
					"Cmt" : 1,
					"CmtAdmin" : 0,
					"Admin" : 0,
					"SingleCrisisMode" : 0,
					"ClaimsReporting" : 1,
					"CrisisReporting" : 1,
					"CrisisActivation" : 1,
					"CrisisActivationOptions" : 1,
					"MeetingCreate" : 1,
					"TaskManagement" : 1
				}
			}
		]
	},
	{
		"_id" : ObjectId("59d6166d8c44d26e1f19e4e3"),
		"mock_id" : 3,
		"mock_name" : "roles",
		"mock_data" : [
			{
				"roleId" : 25,
				"name" : "CAT"
			},
			{
				"roleId" : 25,
				"name" : "CAT"
			},
			{
				"roleId" : 25,
				"name" : "CAT"
			}
		]
	},
	{
		"_id" : ObjectId("59d642448c44d26e1f19e4e6"),
		"mock_id" : 4,
		"mock_name" : "teams",
		"mock_data" : [
			{
				"teamId" : 1345325,
				"name" : "CMT",
				"members" : [
					{
						"memberId" : 12412,
						"staff" : {
							"stafId" : 1234,
							"memberOfCMT" : 0,
							"fname" : "'Stan'",
							"lname" : "'Smith'",
							"cell" : NumberLong("3033341234"),
							"work" : NumberLong("3033341234"),
							"email" : "'stan@mail.com'",
							"active" : 1,
							"activationCode" : "er432",
							"security" : {
								"bitwise" : 7
							},
							"SecurityZones" : {
								"Cmt" : 1,
								"CmtAdmin" : 0,
								"Admin" : 0,
								"SingleCrisisMode" : 0,
								"ClaimsReporting" : 1,
								"CrisisReporting" : 1,
								"CrisisActivation" : 1,
								"CrisisActivationOptions" : 1,
								"MeetingCreate" : 1,
								"TaskManagement" : 1
							}
						},
						"teamId" : 1345324,
						"role" : {
							"roleId" : 25,
							"name" : "CAT"
						},
						"teamLead" : "True"
					},
					{
						"memberId" : 12412,
						"staff" : {
							"stafId" : 1234,
							"memberOfCMT" : 0,
							"fname" : "'Stan'",
							"lname" : "'Smith'",
							"cell" : NumberLong("3033341234"),
							"work" : NumberLong("3033341234"),
							"email" : "'stan@mail.com'",
							"active" : 1,
							"activationCode" : "er432",
							"security" : {
								"bitwise" : 7
							},
							"SecurityZones" : {
								"Cmt" : 1,
								"CmtAdmin" : 0,
								"Admin" : 0,
								"SingleCrisisMode" : 0,
								"ClaimsReporting" : 1,
								"CrisisReporting" : 1,
								"CrisisActivation" : 1,
								"CrisisActivationOptions" : 1,
								"MeetingCreate" : 1,
								"TaskManagement" : 1
							}
						},
						"teamId" : 1345325,
						"role" : {
							"roleId" : 25,
							"name" : "CAT"
						},
						"teamLead" : "True"
					}
				],
				"documents" : [
					{
						"document" : {
							"documentId" : 1234,
							"crisisId" : "'7892345'",
							"teamId" : 1345325,
							"teamName" : "CMT",
							"name" : "'ProceduresX'",
							"category" : "'plan'",
							"global" : "'no'",
							"mobileSticky" : "'Yes'",
							"type" : "'PDF'",
							"uri" : "'https://loc/loc/abc123.pdf'",
							"Uri_thumb" : "'https://loc/loc/abc123.pdf'",
							"updated" : "2015-05-05T12:30:00"
						}
					},
					{
						"document" : {
							"documentId" : 1234,
							"crisisId" : "'7892345'",
							"teamId" : 1345325,
							"teamName" : "CMT",
							"name" : "'ProceduresX'",
							"category" : "'plan'",
							"global" : "'no'",
							"mobileSticky" : "'Yes'",
							"type" : "'PDF'",
							"uri" : "'https://loc/loc/abc123.pdf'",
							"Uri_thumb" : "'https://loc/loc/abc123.pdf'",
							"updated" : "2015-05-05T12:30:00"
						}
					}
				]
			},
			{
				"teamId" : 1345327,
				"name" : "CMT",
				"members" : [
					{
						"memberId" : 12412,
						"staff" : {
							"stafId" : 1234,
							"memberOfCMT" : 0,
							"fname" : "'Stan'",
							"lname" : "'Smith'",
							"cell" : NumberLong("3033341234"),
							"work" : NumberLong("3033341234"),
							"email" : "'stan@mail.com'",
							"active" : 1,
							"activationCode" : "er432",
							"security" : {
								"bitwise" : 7
							},
							"SecurityZones" : {
								"Cmt" : 1,
								"CmtAdmin" : 0,
								"Admin" : 0,
								"SingleCrisisMode" : 0,
								"ClaimsReporting" : 1,
								"CrisisReporting" : 1,
								"CrisisActivation" : 1,
								"CrisisActivationOptions" : 1,
								"MeetingCreate" : 1,
								"TaskManagement" : 1
							}
						},
						"teamId" : 1345327,
						"role" : {
							"roleId" : 25,
							"name" : "CAT"
						},
						"teamLead" : "True"
					},
					{
						"memberId" : 12412,
						"staff" : {
							"stafId" : 1234,
							"memberOfCMT" : 0,
							"fname" : "'Stan'",
							"lname" : "'Smith'",
							"cell" : NumberLong("3033341234"),
							"work" : NumberLong("3033341234"),
							"email" : "'stan@mail.com'",
							"active" : 1,
							"activationCode" : "er432",
							"security" : {
								"bitwise" : 7
							},
							"SecurityZones" : {
								"Cmt" : 1,
								"CmtAdmin" : 0,
								"Admin" : 0,
								"SingleCrisisMode" : 0,
								"ClaimsReporting" : 1,
								"CrisisReporting" : 1,
								"CrisisActivation" : 1,
								"CrisisActivationOptions" : 1,
								"MeetingCreate" : 1,
								"TaskManagement" : 1
							}
						},
						"teamId" : 1345327,
						"role" : {
							"roleId" : 25,
							"name" : "CAT"
						},
						"teamLead" : "True"
					}
				],
				"documents" : [
					{
						"document" : {
							"documentId" : 1345327,
							"crisisId" : "'7892345'",
							"teamId" : 1345325,
							"teamName" : "CMT",
							"name" : "'ProceduresX'",
							"category" : "'plan'",
							"global" : "'no'",
							"mobileSticky" : "'Yes'",
							"type" : "'PDF'",
							"uri" : "'https://loc/loc/abc123.pdf'",
							"Uri_thumb" : "'https://loc/loc/abc123.pdf'",
							"updated" : "2015-05-05T12:30:00"
						}
					},
					{
						"document" : {
							"documentId" : 1345327,
							"crisisId" : "'7892345'",
							"teamId" : 1345325,
							"teamName" : "CMT",
							"name" : "'ProceduresX'",
							"category" : "'plan'",
							"global" : "'no'",
							"mobileSticky" : "'Yes'",
							"type" : "'PDF'",
							"uri" : "'https://loc/loc/abc123.pdf'",
							"Uri_thumb" : "'https://loc/loc/abc123.pdf'",
							"updated" : "2015-05-05T12:30:00"
						}
					}
				]
			}
		]
	},
	{
		"_id" : ObjectId("59d752a1b5975b4626125bae"),
		"mock_id" : 6,
		"mock_name" : "reports",
		"mock_data" : [
			{
				"_id" : ObjectId("59d74b20b5975b4626125bab"),
				"reportId" : 12345,
				"type" : "Incident",
				"category" : "WorkersComp",
				"reportDateTIme" : "2015-05-05T12:30:00",
				"open" : 1,
				"submittedStaffId" : 12341,
				"submittedStaffName" : "Bob Thomas",
				"contactPhone" : "1234454444",
				"detail" : {
					"Incident" : {
						"contactName" : "Tom Smith",
						"contactNumber1" : "3412341234",
						"incidentUri" : "https://loc/loc/abc123.jpg",
						"incidentUriThumb" : "https://loc/loc/abc123_thumb.jpg"
					},
					"ClaimAuto" : {
						"contactName" : "Tom Smith",
						"contactNumber1" : "3412341234",
						"injuries" : "No",
						"autoLicensePlate" : "asfd234",
						"auto1DamageUri" : "'https://loc/loc/abc123.jpg'",
						"auto1DamageUriThumb" : "https://loc/loc/abc123_thumb.jpg",
						"auto2DamageUri" : "'https://loc/loc/abc123.jpg'",
						"auto2DamageUriThumb" : "https://loc/loc/abc123_thumb.jpg",
						"auto2VINUri" : "'https://loc/loc/abc123.jpg'",
						"auto2VINUriThumb" : "https://loc/loc/abc123_thumb.jpg",
						"auto2TagUri" : "'https://loc/loc/abc123.jpg'",
						"auto2TagUriThumb" : "https://loc/loc/abc123_thumb.jpg",
						"auto2CardUri" : "'https://loc/loc/abc123.jpg'",
						"auto2CardUriThumb" : "https://loc/loc/abc123_thumb.jpg",
						"auto2Name" : "Sorry Sam",
						"auto2Number1" : "3412341234",
						"auto3DamageUri" : "'https://loc/loc/abc123.jpg'",
						"auto3DamageUriThumb" : "https://loc/loc/abc123_thumb.jpg",
						"auto3VINUri" : "'https://loc/loc/abc123.jpg'",
						"auto3VINUriThumb" : "https://loc/loc/abc123_thumb.jpg",
						"auto3TagUri" : "'https://loc/loc/abc133.jpg'",
						"auto3TagUriThumb" : "https://loc/loc/abc123_thumb.jpg",
						"auto3CardUri" : "'https://loc/loc/abc133.jpg'",
						"auto3CardUriThumb" : "https://loc/loc/abc123_thumb.jpg",
						"auto3Name" : "Sorry Sam",
						"auto3Number1" : "3412341234"
					},
					"ClaimReleaseSpill" : {
						"contactName" : "Tom Smith",
						"contactNumber1" : "3412341234",
						"contactNumber2" : "341234123412",
						"incidentLocationPlantBranch" : "Utah",
						"incidentCity" : "Tampa",
						"incidentState" : "Florida",
						"incidentDateTime" : "2015-05-05T12:30:00",
						"incidentDescription" : "MyBad",
						"incidentInjuries" : "Yes",
						"incidentPersonsInvolved" : 1,
						"incidentOnPremise" : "Yes",
						"mediaOnSite" : "Yes",
						"evacuationRequired" : "No",
						"firstResponders" : [
							"EMS",
							"Fire",
							"Police",
							"None"
						]
					},
					"ClaimPropery" : {
						"contactName" : "Tom Smith",
						"contactNumber1" : "3412341234",
						"contactNumber2" : "341234123412",
						"incidentLocationPlantBranch" : "Utah",
						"incidentCity" : "Tampa",
						"incidentState" : "Florida",
						"incidentDateTime" : "2015-05-05T12:30:00",
						"incidentDescription" : "MyBad",
						"incidentInjuries" : "Yes",
						"incidentPersonsInvolved" : 1,
						"incidentOnPremise" : "Yes",
						"mediaOnSite" : "Yes",
						"evacuationRequired" : "No",
						"firstResponders" : [
							"EMS",
							"Fire",
							"Police",
							"None"
						]
					},
					"ClaimWorkersComp" : {
						"contactName" : "Tom Smith",
						"contactNumber1" : "3412341234",
						"contactNumber2" : "341234123412",
						"incidentLocationPlantBranch" : "Utah",
						"incidentCity" : "Tampa",
						"incidentState" : "Florida",
						"incidentDateTime" : "2015-05-05T12:30:00",
						"incidentDescription" : "MyBad",
						"incidentInjuries" : "Yes",
						"incidentPersonsInvolved" : 1,
						"incidentOnPremise" : "Yes"
					},
					"ClaimAllOther" : {
						"contactName" : "Tom Smith",
						"contactNumber1" : "3412341234",
						"contactNumber2" : "341234123412",
						"incidentLocationPlantBranch" : "Utah",
						"incidentCity" : "Tampa",
						"incidentState" : "Florida",
						"incidentDateTime" : "2015-05-05T12:30:00",
						"incidentDescription" : "MyBad",
						"incidentInjuries" : "Yes",
						"incidentPersonsInvolved" : 1,
						"incidentOnPremise" : "Yes",
						"mediaOnSite" : "Yes",
						"evacuationRequired" : "No",
						"firstResponders" : [
							"EMS",
							"Fire",
							"Police",
							"None"
						]
					}
				}
			},
			{
				"_id" : ObjectId("59d74b20b5975b4626125bac"),
				"reportId" : 12346,
				"type" : "Claim",
				"category" : "WorkersComp",
				"reportDateTIme" : "2015-05-05T12:30:00",
				"open" : 0,
				"submittedStaffId" : 12341,
				"submittedStaffName" : "Bob Thomas",
				"contactPhone" : "1234454444",
				"detail" : {
					"Incident" : {
						"contactName" : "Tom Smith",
						"contactNumber1" : "3412341234",
						"incidentUri" : "https://loc/loc/abc123.jpg",
						"incidentUriThumb" : "https://loc/loc/abc123_thumb.jpg"
					},
					"ClaimAuto" : {
						"contactName" : "Tom Smith",
						"contactNumber1" : "3412341234",
						"injuries" : "No",
						"autoLicensePlate" : "asfd234",
						"auto1DamageUri" : "'https://loc/loc/abc123.jpg'",
						"auto1DamageUriThumb" : "https://loc/loc/abc123_thumb.jpg",
						"auto2DamageUri" : "'https://loc/loc/abc123.jpg'",
						"auto2DamageUriThumb" : "https://loc/loc/abc123_thumb.jpg",
						"auto2VINUri" : "'https://loc/loc/abc123.jpg'",
						"auto2VINUriThumb" : "https://loc/loc/abc123_thumb.jpg",
						"auto2TagUri" : "'https://loc/loc/abc123.jpg'",
						"auto2TagUriThumb" : "https://loc/loc/abc123_thumb.jpg",
						"auto2CardUri" : "'https://loc/loc/abc123.jpg'",
						"auto2CardUriThumb" : "https://loc/loc/abc123_thumb.jpg",
						"auto2Name" : "Sorry Sam",
						"auto2Number1" : "3412341234",
						"auto3DamageUri" : "'https://loc/loc/abc123.jpg'",
						"auto3DamageUriThumb" : "https://loc/loc/abc123_thumb.jpg",
						"auto3VINUri" : "'https://loc/loc/abc123.jpg'",
						"auto3VINUriThumb" : "https://loc/loc/abc123_thumb.jpg",
						"auto3TagUri" : "'https://loc/loc/abc133.jpg'",
						"auto3TagUriThumb" : "https://loc/loc/abc123_thumb.jpg",
						"auto3CardUri" : "'https://loc/loc/abc133.jpg'",
						"auto3CardUriThumb" : "https://loc/loc/abc123_thumb.jpg",
						"auto3Name" : "Sorry Sam",
						"auto3Number1" : "3412341234"
					},
					"ClaimReleaseSpill" : {
						"contactName" : "Tom Smith",
						"contactNumber1" : "3412341234",
						"contactNumber2" : "341234123412",
						"incidentLocationPlantBranch" : "Utah",
						"incidentCity" : "Tampa",
						"incidentState" : "Florida",
						"incidentDateTime" : "2015-05-05T12:30:00",
						"incidentDescription" : "MyBad",
						"incidentInjuries" : "Yes",
						"incidentPersonsInvolved" : 1,
						"incidentOnPremise" : "Yes",
						"mediaOnSite" : "Yes",
						"evacuationRequired" : "No",
						"firstResponders" : [
							"EMS",
							"Fire",
							"Police",
							"None"
						]
					},
					"ClaimPropery" : {
						"contactName" : "Tom Smith",
						"contactNumber1" : "3412341234",
						"contactNumber2" : "341234123412",
						"incidentLocationPlantBranch" : "Utah",
						"incidentCity" : "Tampa",
						"incidentState" : "Florida",
						"incidentDateTime" : "2015-05-05T12:30:00",
						"incidentDescription" : "MyBad",
						"incidentInjuries" : "Yes",
						"incidentPersonsInvolved" : 1,
						"incidentOnPremise" : "Yes",
						"mediaOnSite" : "Yes",
						"evacuationRequired" : "No",
						"firstResponders" : [
							"EMS",
							"Fire",
							"Police",
							"None"
						]
					},
					"ClaimWorkersComp" : {
						"contactName" : "Tom Smith",
						"contactNumber1" : "3412341234",
						"contactNumber2" : "341234123412",
						"incidentLocationPlantBranch" : "Utah",
						"incidentCity" : "Tampa",
						"incidentState" : "Florida",
						"incidentDateTime" : "2015-05-05T12:30:00",
						"incidentDescription" : "MyBad",
						"incidentInjuries" : "Yes",
						"incidentPersonsInvolved" : 1,
						"incidentOnPremise" : "Yes"
					},
					"ClaimAllOther" : {
						"contactName" : "Tom Smith",
						"contactNumber1" : "3412341234",
						"contactNumber2" : "341234123412",
						"incidentLocationPlantBranch" : "Utah",
						"incidentCity" : "Tampa",
						"incidentState" : "Florida",
						"incidentDateTime" : "2015-05-05T12:30:00",
						"incidentDescription" : "MyBad",
						"incidentInjuries" : "Yes",
						"incidentPersonsInvolved" : 1,
						"incidentOnPremise" : "Yes",
						"mediaOnSite" : "Yes",
						"evacuationRequired" : "No",
						"firstResponders" : [
							"EMS",
							"Fire",
							"Police",
							"None"
						]
					}
				}
			},
			{
				"_id" : ObjectId("59d74b20b5975b4626125bad"),
				"reportId" : 12347,
				"type" : "Incident",
				"category" : "WorkersComp",
				"reportDateTIme" : "2015-05-05T12:30:00",
				"open" : 0,
				"submittedStaffId" : 12341,
				"submittedStaffName" : "Bob Thomas",
				"contactPhone" : "1234454444",
				"detail" : {
					"Incident" : {
						"contactName" : "Tom Smith",
						"contactNumber1" : "3412341234",
						"incidentUri" : "https://loc/loc/abc123.jpg",
						"incidentUriThumb" : "https://loc/loc/abc123_thumb.jpg"
					},
					"ClaimAuto" : {
						"contactName" : "Tom Smith",
						"contactNumber1" : "3412341234",
						"injuries" : "No",
						"autoLicensePlate" : "asfd234",
						"auto1DamageUri" : "'https://loc/loc/abc123.jpg'",
						"auto1DamageUriThumb" : "https://loc/loc/abc123_thumb.jpg",
						"auto2DamageUri" : "'https://loc/loc/abc123.jpg'",
						"auto2DamageUriThumb" : "https://loc/loc/abc123_thumb.jpg",
						"auto2VINUri" : "'https://loc/loc/abc123.jpg'",
						"auto2VINUriThumb" : "https://loc/loc/abc123_thumb.jpg",
						"auto2TagUri" : "'https://loc/loc/abc123.jpg'",
						"auto2TagUriThumb" : "https://loc/loc/abc123_thumb.jpg",
						"auto2CardUri" : "'https://loc/loc/abc123.jpg'",
						"auto2CardUriThumb" : "https://loc/loc/abc123_thumb.jpg",
						"auto2Name" : "Sorry Sam",
						"auto2Number1" : "3412341234",
						"auto3DamageUri" : "'https://loc/loc/abc123.jpg'",
						"auto3DamageUriThumb" : "https://loc/loc/abc123_thumb.jpg",
						"auto3VINUri" : "'https://loc/loc/abc123.jpg'",
						"auto3VINUriThumb" : "https://loc/loc/abc123_thumb.jpg",
						"auto3TagUri" : "'https://loc/loc/abc133.jpg'",
						"auto3TagUriThumb" : "https://loc/loc/abc123_thumb.jpg",
						"auto3CardUri" : "'https://loc/loc/abc133.jpg'",
						"auto3CardUriThumb" : "https://loc/loc/abc123_thumb.jpg",
						"auto3Name" : "Sorry Sam",
						"auto3Number1" : "3412341234"
					},
					"ClaimReleaseSpill" : {
						"contactName" : "Tom Smith",
						"contactNumber1" : "3412341234",
						"contactNumber2" : "341234123412",
						"incidentLocationPlantBranch" : "Utah",
						"incidentCity" : "Tampa",
						"incidentState" : "Florida",
						"incidentDateTime" : "2015-05-05T12:30:00",
						"incidentDescription" : "MyBad",
						"incidentInjuries" : "Yes",
						"incidentPersonsInvolved" : 1,
						"incidentOnPremise" : "Yes",
						"mediaOnSite" : "Yes",
						"evacuationRequired" : "No",
						"firstResponders" : [
							"EMS",
							"Fire",
							"Police",
							"None"
						]
					},
					"ClaimPropery" : {
						"contactName" : "Tom Smith",
						"contactNumber1" : "3412341234",
						"contactNumber2" : "341234123412",
						"incidentLocationPlantBranch" : "Utah",
						"incidentCity" : "Tampa",
						"incidentState" : "Florida",
						"incidentDateTime" : "2015-05-05T12:30:00",
						"incidentDescription" : "MyBad",
						"incidentInjuries" : "Yes",
						"incidentPersonsInvolved" : 1,
						"incidentOnPremise" : "Yes",
						"mediaOnSite" : "Yes",
						"evacuationRequired" : "No",
						"firstResponders" : [
							"EMS",
							"Fire",
							"Police",
							"None"
						]
					},
					"ClaimWorkersComp" : {
						"contactName" : "Tom Smith",
						"contactNumber1" : "3412341234",
						"contactNumber2" : "341234123412",
						"incidentLocationPlantBranch" : "Utah",
						"incidentCity" : "Tampa",
						"incidentState" : "Florida",
						"incidentDateTime" : "2015-05-05T12:30:00",
						"incidentDescription" : "MyBad",
						"incidentInjuries" : "Yes",
						"incidentPersonsInvolved" : 1,
						"incidentOnPremise" : "Yes"
					},
					"ClaimAllOther" : {
						"contactName" : "Tom Smith",
						"contactNumber1" : "3412341234",
						"contactNumber2" : "341234123412",
						"incidentLocationPlantBranch" : "Utah",
						"incidentCity" : "Tampa",
						"incidentState" : "Florida",
						"incidentDateTime" : "2015-05-05T12:30:00",
						"incidentDescription" : "MyBad",
						"incidentInjuries" : "Yes",
						"incidentPersonsInvolved" : 1,
						"incidentOnPremise" : "Yes",
						"mediaOnSite" : "Yes",
						"evacuationRequired" : "No",
						"firstResponders" : [
							"EMS",
							"Fire",
							"Police",
							"None"
						]
					}
				}
			}
		]
	},
	{
		"_id" : ObjectId("59d74bc0fb92d64e9b561bc5"),
		"mock_id" : 5,
		"mock_name" : "crisis",
		"mock_data" : [
			{
				"crisisId" : "'111111'",
				"name" : "'Plant Fire'",
				"description" : "'description'",
				"crisisLevel" : "'ACTIVATE'",
				"dateCreated" : "2015-05-05T12:30:00",
				"createdByStaffId" : 12341,
				"createdBy" : "Bob Thomas",
				"status" : "'Active'"
			},
			{
				"crisisId" : "'222222'",
				"name" : "'Plant Fire'",
				"description" : "'description'",
				"crisisLevel" : "'ACTIVATE'",
				"dateCreated" : "2015-05-05T12:30:00",
				"createdByStaffId" : 12341,
				"createdBy" : "Bob Thomas",
				"status" : "'Active'"
			},
			{
				"crisisId" : "'333333'",
				"name" : "'Plant Fire'",
				"description" : "'description'",
				"crisisLevel" : "'ACTIVATE'",
				"dateCreated" : "2015-05-05T12:30:00",
				"createdByStaffId" : 12341,
				"createdBy" : "Bob Thomas",
				"status" : "'Active'"
			}
		]
	}
]
);

db.reports.insertMany([
	{
		"_id" : ObjectId("59d74abdb5975b4626125ba8"),
		"reportId" : 12345,
		"type" : "Incident",
		"category" : "WorkersComp",
		"reportDateTIme" : "2015-05-05T12:30:00",
		"open" : 1,
		"submittedStaffId" : 12341,
		"submittedStaffName" : "Bob Thomas",
		"contactPhone" : "1234454444",
		"detail" : {
			"Incident" : {
				"contactName" : "Tom Smith",
				"contactNumber1" : "3412341234",
				"incidentUri" : "https://loc/loc/abc123.jpg",
				"incidentUriThumb" : "https://loc/loc/abc123_thumb.jpg"
			},
			"ClaimAuto" : {
				"contactName" : "Tom Smith",
				"contactNumber1" : "3412341234",
				"injuries" : "No",
				"autoLicensePlate" : "asfd234",
				"auto1DamageUri" : "'https://loc/loc/abc123.jpg'",
				"auto1DamageUriThumb" : "https://loc/loc/abc123_thumb.jpg",
				"auto2DamageUri" : "'https://loc/loc/abc123.jpg'",
				"auto2DamageUriThumb" : "https://loc/loc/abc123_thumb.jpg",
				"auto2VINUri" : "'https://loc/loc/abc123.jpg'",
				"auto2VINUriThumb" : "https://loc/loc/abc123_thumb.jpg",
				"auto2TagUri" : "'https://loc/loc/abc123.jpg'",
				"auto2TagUriThumb" : "https://loc/loc/abc123_thumb.jpg",
				"auto2CardUri" : "'https://loc/loc/abc123.jpg'",
				"auto2CardUriThumb" : "https://loc/loc/abc123_thumb.jpg",
				"auto2Name" : "Sorry Sam",
				"auto2Number1" : "3412341234",
				"auto3DamageUri" : "'https://loc/loc/abc123.jpg'",
				"auto3DamageUriThumb" : "https://loc/loc/abc123_thumb.jpg",
				"auto3VINUri" : "'https://loc/loc/abc123.jpg'",
				"auto3VINUriThumb" : "https://loc/loc/abc123_thumb.jpg",
				"auto3TagUri" : "'https://loc/loc/abc133.jpg'",
				"auto3TagUriThumb" : "https://loc/loc/abc123_thumb.jpg",
				"auto3CardUri" : "'https://loc/loc/abc133.jpg'",
				"auto3CardUriThumb" : "https://loc/loc/abc123_thumb.jpg",
				"auto3Name" : "Sorry Sam",
				"auto3Number1" : "3412341234"
			},
			"ClaimReleaseSpill" : {
				"contactName" : "Tom Smith",
				"contactNumber1" : "3412341234",
				"contactNumber2" : "341234123412",
				"incidentLocationPlantBranch" : "Utah",
				"incidentCity" : "Tampa",
				"incidentState" : "Florida",
				"incidentDateTime" : "2015-05-05T12:30:00",
				"incidentDescription" : "MyBad",
				"incidentInjuries" : "Yes",
				"incidentPersonsInvolved" : 1,
				"incidentOnPremise" : "Yes",
				"mediaOnSite" : "Yes",
				"evacuationRequired" : "No",
				"firstResponders" : [
					"EMS",
					"Fire",
					"Police",
					"None"
				]
			},
			"ClaimPropery" : {
				"contactName" : "Tom Smith",
				"contactNumber1" : "3412341234",
				"contactNumber2" : "341234123412",
				"incidentLocationPlantBranch" : "Utah",
				"incidentCity" : "Tampa",
				"incidentState" : "Florida",
				"incidentDateTime" : "2015-05-05T12:30:00",
				"incidentDescription" : "MyBad",
				"incidentInjuries" : "Yes",
				"incidentPersonsInvolved" : 1,
				"incidentOnPremise" : "Yes",
				"mediaOnSite" : "Yes",
				"evacuationRequired" : "No",
				"firstResponders" : [
					"EMS",
					"Fire",
					"Police",
					"None"
				]
			},
			"ClaimWorkersComp" : {
				"contactName" : "Tom Smith",
				"contactNumber1" : "3412341234",
				"contactNumber2" : "341234123412",
				"incidentLocationPlantBranch" : "Utah",
				"incidentCity" : "Tampa",
				"incidentState" : "Florida",
				"incidentDateTime" : "2015-05-05T12:30:00",
				"incidentDescription" : "MyBad",
				"incidentInjuries" : "Yes",
				"incidentPersonsInvolved" : 1,
				"incidentOnPremise" : "Yes"
			},
			"ClaimAllOther" : {
				"contactName" : "Tom Smith",
				"contactNumber1" : "3412341234",
				"contactNumber2" : "341234123412",
				"incidentLocationPlantBranch" : "Utah",
				"incidentCity" : "Tampa",
				"incidentState" : "Florida",
				"incidentDateTime" : "2015-05-05T12:30:00",
				"incidentDescription" : "MyBad",
				"incidentInjuries" : "Yes",
				"incidentPersonsInvolved" : 1,
				"incidentOnPremise" : "Yes",
				"mediaOnSite" : "Yes",
				"evacuationRequired" : "No",
				"firstResponders" : [
					"EMS",
					"Fire",
					"Police",
					"None"
				]
			}
		}
	},
	{
		"_id" : ObjectId("59d74abdb5975b4626125ba9"),
		"reportId" : 12346,
		"type" : "Claim",
		"category" : "WorkersComp",
		"reportDateTIme" : "2015-05-05T12:30:00",
		"open" : 0,
		"submittedStaffId" : 12341,
		"submittedStaffName" : "Bob Thomas",
		"contactPhone" : "1234454444",
		"detail" : {
			"Incident" : {
				"contactName" : "Tom Smith",
				"contactNumber1" : "3412341234",
				"incidentUri" : "https://loc/loc/abc123.jpg",
				"incidentUriThumb" : "https://loc/loc/abc123_thumb.jpg"
			},
			"ClaimAuto" : {
				"contactName" : "Tom Smith",
				"contactNumber1" : "3412341234",
				"injuries" : "No",
				"autoLicensePlate" : "asfd234",
				"auto1DamageUri" : "'https://loc/loc/abc123.jpg'",
				"auto1DamageUriThumb" : "https://loc/loc/abc123_thumb.jpg",
				"auto2DamageUri" : "'https://loc/loc/abc123.jpg'",
				"auto2DamageUriThumb" : "https://loc/loc/abc123_thumb.jpg",
				"auto2VINUri" : "'https://loc/loc/abc123.jpg'",
				"auto2VINUriThumb" : "https://loc/loc/abc123_thumb.jpg",
				"auto2TagUri" : "'https://loc/loc/abc123.jpg'",
				"auto2TagUriThumb" : "https://loc/loc/abc123_thumb.jpg",
				"auto2CardUri" : "'https://loc/loc/abc123.jpg'",
				"auto2CardUriThumb" : "https://loc/loc/abc123_thumb.jpg",
				"auto2Name" : "Sorry Sam",
				"auto2Number1" : "3412341234",
				"auto3DamageUri" : "'https://loc/loc/abc123.jpg'",
				"auto3DamageUriThumb" : "https://loc/loc/abc123_thumb.jpg",
				"auto3VINUri" : "'https://loc/loc/abc123.jpg'",
				"auto3VINUriThumb" : "https://loc/loc/abc123_thumb.jpg",
				"auto3TagUri" : "'https://loc/loc/abc133.jpg'",
				"auto3TagUriThumb" : "https://loc/loc/abc123_thumb.jpg",
				"auto3CardUri" : "'https://loc/loc/abc133.jpg'",
				"auto3CardUriThumb" : "https://loc/loc/abc123_thumb.jpg",
				"auto3Name" : "Sorry Sam",
				"auto3Number1" : "3412341234"
			},
			"ClaimReleaseSpill" : {
				"contactName" : "Tom Smith",
				"contactNumber1" : "3412341234",
				"contactNumber2" : "341234123412",
				"incidentLocationPlantBranch" : "Utah",
				"incidentCity" : "Tampa",
				"incidentState" : "Florida",
				"incidentDateTime" : "2015-05-05T12:30:00",
				"incidentDescription" : "MyBad",
				"incidentInjuries" : "Yes",
				"incidentPersonsInvolved" : 1,
				"incidentOnPremise" : "Yes",
				"mediaOnSite" : "Yes",
				"evacuationRequired" : "No",
				"firstResponders" : [
					"EMS",
					"Fire",
					"Police",
					"None"
				]
			},
			"ClaimPropery" : {
				"contactName" : "Tom Smith",
				"contactNumber1" : "3412341234",
				"contactNumber2" : "341234123412",
				"incidentLocationPlantBranch" : "Utah",
				"incidentCity" : "Tampa",
				"incidentState" : "Florida",
				"incidentDateTime" : "2015-05-05T12:30:00",
				"incidentDescription" : "MyBad",
				"incidentInjuries" : "Yes",
				"incidentPersonsInvolved" : 1,
				"incidentOnPremise" : "Yes",
				"mediaOnSite" : "Yes",
				"evacuationRequired" : "No",
				"firstResponders" : [
					"EMS",
					"Fire",
					"Police",
					"None"
				]
			},
			"ClaimWorkersComp" : {
				"contactName" : "Tom Smith",
				"contactNumber1" : "3412341234",
				"contactNumber2" : "341234123412",
				"incidentLocationPlantBranch" : "Utah",
				"incidentCity" : "Tampa",
				"incidentState" : "Florida",
				"incidentDateTime" : "2015-05-05T12:30:00",
				"incidentDescription" : "MyBad",
				"incidentInjuries" : "Yes",
				"incidentPersonsInvolved" : 1,
				"incidentOnPremise" : "Yes"
			},
			"ClaimAllOther" : {
				"contactName" : "Tom Smith",
				"contactNumber1" : "3412341234",
				"contactNumber2" : "341234123412",
				"incidentLocationPlantBranch" : "Utah",
				"incidentCity" : "Tampa",
				"incidentState" : "Florida",
				"incidentDateTime" : "2015-05-05T12:30:00",
				"incidentDescription" : "MyBad",
				"incidentInjuries" : "Yes",
				"incidentPersonsInvolved" : 1,
				"incidentOnPremise" : "Yes",
				"mediaOnSite" : "Yes",
				"evacuationRequired" : "No",
				"firstResponders" : [
					"EMS",
					"Fire",
					"Police",
					"None"
				]
			}
		}
	},
	{
		"_id" : ObjectId("59d74abdb5975b4626125baa"),
		"reportId" : 12347,
		"type" : "Incident",
		"category" : "WorkersComp",
		"reportDateTIme" : "2015-05-05T12:30:00",
		"open" : 1,
		"submittedStaffId" : 12341,
		"submittedStaffName" : "Bob Thomas",
		"contactPhone" : "1234454444",
		"detail" : {
			"Incident" : {
				"contactName" : "Tom Smith",
				"contactNumber1" : "3412341234",
				"incidentUri" : "https://loc/loc/abc123.jpg",
				"incidentUriThumb" : "https://loc/loc/abc123_thumb.jpg"
			},
			"ClaimAuto" : {
				"contactName" : "Tom Smith",
				"contactNumber1" : "3412341234",
				"injuries" : "No",
				"autoLicensePlate" : "asfd234",
				"auto1DamageUri" : "'https://loc/loc/abc123.jpg'",
				"auto1DamageUriThumb" : "https://loc/loc/abc123_thumb.jpg",
				"auto2DamageUri" : "'https://loc/loc/abc123.jpg'",
				"auto2DamageUriThumb" : "https://loc/loc/abc123_thumb.jpg",
				"auto2VINUri" : "'https://loc/loc/abc123.jpg'",
				"auto2VINUriThumb" : "https://loc/loc/abc123_thumb.jpg",
				"auto2TagUri" : "'https://loc/loc/abc123.jpg'",
				"auto2TagUriThumb" : "https://loc/loc/abc123_thumb.jpg",
				"auto2CardUri" : "'https://loc/loc/abc123.jpg'",
				"auto2CardUriThumb" : "https://loc/loc/abc123_thumb.jpg",
				"auto2Name" : "Sorry Sam",
				"auto2Number1" : "3412341234",
				"auto3DamageUri" : "'https://loc/loc/abc123.jpg'",
				"auto3DamageUriThumb" : "https://loc/loc/abc123_thumb.jpg",
				"auto3VINUri" : "'https://loc/loc/abc123.jpg'",
				"auto3VINUriThumb" : "https://loc/loc/abc123_thumb.jpg",
				"auto3TagUri" : "'https://loc/loc/abc133.jpg'",
				"auto3TagUriThumb" : "https://loc/loc/abc123_thumb.jpg",
				"auto3CardUri" : "'https://loc/loc/abc133.jpg'",
				"auto3CardUriThumb" : "https://loc/loc/abc123_thumb.jpg",
				"auto3Name" : "Sorry Sam",
				"auto3Number1" : "3412341234"
			},
			"ClaimReleaseSpill" : {
				"contactName" : "Tom Smith",
				"contactNumber1" : "3412341234",
				"contactNumber2" : "341234123412",
				"incidentLocationPlantBranch" : "Utah",
				"incidentCity" : "Tampa",
				"incidentState" : "Florida",
				"incidentDateTime" : "2015-05-05T12:30:00",
				"incidentDescription" : "MyBad",
				"incidentInjuries" : "Yes",
				"incidentPersonsInvolved" : 1,
				"incidentOnPremise" : "Yes",
				"mediaOnSite" : "Yes",
				"evacuationRequired" : "No",
				"firstResponders" : [
					"EMS",
					"Fire",
					"Police",
					"None"
				]
			},
			"ClaimPropery" : {
				"contactName" : "Tom Smith",
				"contactNumber1" : "3412341234",
				"contactNumber2" : "341234123412",
				"incidentLocationPlantBranch" : "Utah",
				"incidentCity" : "Tampa",
				"incidentState" : "Florida",
				"incidentDateTime" : "2015-05-05T12:30:00",
				"incidentDescription" : "MyBad",
				"incidentInjuries" : "Yes",
				"incidentPersonsInvolved" : 1,
				"incidentOnPremise" : "Yes",
				"mediaOnSite" : "Yes",
				"evacuationRequired" : "No",
				"firstResponders" : [
					"EMS",
					"Fire",
					"Police",
					"None"
				]
			},
			"ClaimWorkersComp" : {
				"contactName" : "Tom Smith",
				"contactNumber1" : "3412341234",
				"contactNumber2" : "341234123412",
				"incidentLocationPlantBranch" : "Utah",
				"incidentCity" : "Tampa",
				"incidentState" : "Florida",
				"incidentDateTime" : "2015-05-05T12:30:00",
				"incidentDescription" : "MyBad",
				"incidentInjuries" : "Yes",
				"incidentPersonsInvolved" : 1,
				"incidentOnPremise" : "Yes"
			},
			"ClaimAllOther" : {
				"contactName" : "Tom Smith",
				"contactNumber1" : "3412341234",
				"contactNumber2" : "341234123412",
				"incidentLocationPlantBranch" : "Utah",
				"incidentCity" : "Tampa",
				"incidentState" : "Florida",
				"incidentDateTime" : "2015-05-05T12:30:00",
				"incidentDescription" : "MyBad",
				"incidentInjuries" : "Yes",
				"incidentPersonsInvolved" : 1,
				"incidentOnPremise" : "Yes",
				"mediaOnSite" : "Yes",
				"evacuationRequired" : "No",
				"firstResponders" : [
					"EMS",
					"Fire",
					"Police",
					"None"
				]
			}
		}
	}
]
); 

db.role.insertMany([
	{
		"_id" : ObjectId("59d615628c44d26e1f19e4e0"),
		"roleId" : 25,
		"name" : "CAT"
	},
	{
		"_id" : ObjectId("59d615628c44d26e1f19e4e1"),
		"roleId" : 25,
		"name" : "CAT"
	},
	{
		"_id" : ObjectId("59d615628c44d26e1f19e4e2"),
		"roleId" : 25,
		"name" : "CAT"
	}
]
);


db.staffs.insertMany([
	{
		"_id" : ObjectId("59cbcbc0472ad37a8b939775"),
		"companyId" : 11111,
		"stafId" : 1234,
		"memberOfCMT" : 0,
		"fname" : "'Stan'",
		"lname" : "'Smith'",
		"cell" : 3033341234,
		"work" : 3033341234,
		"email" : "'stan@mail.com'",
		"active" : 0,
		"activationCode" : "er432",
		"security" : {
			"bitwise" : 7
		},
		"SecurityZones" : {
			"TaskManagement" : 1,
			"MeetingCreate" : 1,
			"CrisisActivationOptions" : 1,
			"CrisisActivation" : 1,
			"CrisisReporting" : 1,
			"ClaimsReporting" : 1,
			"SingleCrisisMode" : 0,
			"Admin" : 0,
			"CmtAdmin" : 0,
			"Cmt" : 1
		}
	},
	{
		"_id" : ObjectId("59cbcbc0472ad37a8b939776"),
		"companyId" : 22222,
		"stafId" : 1234,
		"memberOfCMT" : 0,
		"fname" : "'Stan'",
		"lname" : "'Smith'",
		"cell" : 3033341234,
		"work" : 3033341234,
		"email" : "'stan@mail.com'",
		"active" : 1,
		"activationCode" : "er432",
		"security" : {
			"bitwise" : 7
		},
		"SecurityZones" : {
			"Cmt" : 1,
			"CmtAdmin" : 0,
			"Admin" : 0,
			"SingleCrisisMode" : 0,
			"ClaimsReporting" : 1,
			"CrisisReporting" : 1,
			"CrisisActivation" : 1,
			"CrisisActivationOptions" : 1,
			"MeetingCreate" : 1,
			"TaskManagement" : 1
		}
	},
	{
		"_id" : ObjectId("59cbcbc0472ad37a8b939777"),
		"companyId" : 33333,
		"stafId" : 1234,
		"memberOfCMT" : 0,
		"fname" : "'Stan'",
		"lname" : "'Smith'",
		"cell" : 3033341234,
		"work" : 3033341234,
		"email" : "'stan@mail.com'",
		"active" : 1,
		"activationCode" : "er432",
		"security" : {
			"bitwise" : 7
		},
		"SecurityZones" : {
			"Cmt" : 1,
			"CmtAdmin" : 0,
			"Admin" : 0,
			"SingleCrisisMode" : 0,
			"ClaimsReporting" : 1,
			"CrisisReporting" : 1,
			"CrisisActivation" : 1,
			"CrisisActivationOptions" : 1,
			"MeetingCreate" : 1,
			"TaskManagement" : 1
		}
	}
]
);


db.teams.insertMany([
	{
		"_id" : ObjectId("59d640408c44d26e1f19e4e5"),
		"teamId" : 1345326,
		"name" : "CMT",
		"members" : [
			{
				"memberId" : 12412,
				"staff" : {
					"stafId" : 1234,
					"memberOfCMT" : 0,
					"fname" : "'Stan'",
					"lname" : "'Smith'",
					"cell" : 3033341234,
					"work" : 3033341234,
					"email" : "'stan@mail.com'",
					"active" : 1,
					"activationCode" : "er432",
					"security" : {
						"bitwise" : 7
					},
					"SecurityZones" : {
						"Cmt" : 1,
						"CmtAdmin" : 0,
						"Admin" : 0,
						"SingleCrisisMode" : 0,
						"ClaimsReporting" : 1,
						"CrisisReporting" : 1,
						"CrisisActivation" : 1,
						"CrisisActivationOptions" : 1,
						"MeetingCreate" : 1,
						"TaskManagement" : 1
					}
				},
				"teamId" : 1345327,
				"role" : {
					"roleId" : 25,
					"name" : "CAT"
				},
				"teamLead" : "True"
			},
			{
				"memberId" : 12412,
				"staff" : {
					"stafId" : 1234,
					"memberOfCMT" : 0,
					"fname" : "'Stan'",
					"lname" : "'Smith'",
					"cell" : 3033341234,
					"work" : 3033341234,
					"email" : "'stan@mail.com'",
					"active" : 1,
					"activationCode" : "er432",
					"security" : {
						"bitwise" : 7
					},
					"SecurityZones" : {
						"Cmt" : 1,
						"CmtAdmin" : 0,
						"Admin" : 0,
						"SingleCrisisMode" : 0,
						"ClaimsReporting" : 1,
						"CrisisReporting" : 1,
						"CrisisActivation" : 1,
						"CrisisActivationOptions" : 1,
						"MeetingCreate" : 1,
						"TaskManagement" : 1
					}
				},
				"teamId" : 1345327,
				"role" : {
					"roleId" : 25,
					"name" : "CAT"
				},
				"teamLead" : "True"
			}
		],
		"documents" : [
			{
				"_id" : ObjectId("59d640408c44d26e1f19e4ef"),
				"documentId" : 1345327,
				"crisisId" : "'7892345'",
				"teamId" : 1345326,
				"teamName" : "CMT",
				"name" : "'ProceduresX'",
				"category" : "'plan'",
				"global" : "Yes",
				"mobileSticky" : "'Yes'",
				"type" : "'PDF'",
				"uri" : "'https://loc/loc/abc123.pdf'",
				"Uri_thumb" : "'https://loc/loc/abc123.pdf'",
				"updated" : "2015-05-05T12:30:00"
			},
			{
				"_id" : ObjectId("59d640408c44d26e1f19e4fe"),
				"documentId" : 1345321,
				"crisisId" : "'7892345'",
				"teamId" : 1345326,
				"teamName" : "CMT",
				"name" : "'ProceduresX'",
				"category" : "'plan'",
				"global" : "'no'",
				"mobileSticky" : "'Yes'",
				"type" : "'PDF'",
				"uri" : "'https://loc/loc/abc123.pdf'",
				"Uri_thumb" : "'https://loc/loc/abc123.pdf'",
				"updated" : "2015-05-05T12:30:00"
			},
			{
				"_id" : ObjectId("59d640408c44d26e1f19e4fe"),
				"documentId" : 13453299,
				"crisisId" : "'7892345'",
				"teamId" : 1345326,
				"teamName" : "CMT",
				"name" : "'ProceduresX'",
				"category" : "'plan'",
				"global" : "'no'",
				"mobileSticky" : "'Yes'",
				"type" : "'PDF'",
				"uri" : "'https://loc/loc/abc123.pdf'",
				"Uri_thumb" : "'https://loc/loc/abc123.pdf'",
				"updated" : "2015-05-05T12:30:00"
			}
		]
	},
	{
		"_id" : ObjectId("59db49d27753cab427f33a38"),
		"teamId" : 1345327,
		"name" : "CMT",
		"members" : [
			{
				"memberId" : 12412,
				"staff" : {
					"stafId" : 1234,
					"memberOfCMT" : 0,
					"fname" : "'Stan'",
					"lname" : "'Smith'",
					"cell" : 3033341234,
					"work" : 3033341234,
					"email" : "'stan@mail.com'",
					"active" : 1,
					"activationCode" : "er432",
					"security" : {
						"bitwise" : 7
					},
					"SecurityZones" : {
						"Cmt" : 1,
						"CmtAdmin" : 0,
						"Admin" : 0,
						"SingleCrisisMode" : 0,
						"ClaimsReporting" : 1,
						"CrisisReporting" : 1,
						"CrisisActivation" : 1,
						"CrisisActivationOptions" : 1,
						"MeetingCreate" : 1,
						"TaskManagement" : 1
					}
				},
				"teamId" : 1345327,
				"role" : {
					"roleId" : 25,
					"name" : "CAT"
				},
				"teamLead" : "True"
			},
			{
				"memberId" : 12412,
				"staff" : {
					"stafId" : 1234,
					"memberOfCMT" : 0,
					"fname" : "'Stan'",
					"lname" : "'Smith'",
					"cell" : 3033341234,
					"work" : 3033341234,
					"email" : "'stan@mail.com'",
					"active" : 1,
					"activationCode" : "er432",
					"security" : {
						"bitwise" : 7
					},
					"SecurityZones" : {
						"Cmt" : 1,
						"CmtAdmin" : 0,
						"Admin" : 0,
						"SingleCrisisMode" : 0,
						"ClaimsReporting" : 1,
						"CrisisReporting" : 1,
						"CrisisActivation" : 1,
						"CrisisActivationOptions" : 1,
						"MeetingCreate" : 1,
						"TaskManagement" : 1
					}
				},
				"teamId" : 1345327,
				"role" : {
					"roleId" : 25,
					"name" : "CAT"
				},
				"teamLead" : "True"
			}
		],
		"documents" : [
			{
				"documentId" : 12345,
				"crisisId" : "'7892345'",
				"teamId" : 1345325,
				"teamName" : "CMT",
				"name" : "'ProceduresX'",
				"category" : "'plan'",
				"global" : "'no'",
				"mobileSticky" : "'Yes'",
				"type" : "'PDF'",
				"uri" : "'https://loc/loc/abc123.pdf'",
				"Uri_thumb" : "'https://loc/loc/abc123.pdf'",
				"updated" : "2015-05-05T12:30:00"
			},
			{
				"documentId" : 1234,
				"crisisId" : "'7892345'",
				"teamId" : 1345325,
				"teamName" : "CMT",
				"name" : "'ProceduresX'",
				"category" : "'plan'",
				"global" : "'no'",
				"mobileSticky" : "'Yes'",
				"type" : "'PDF'",
				"uri" : "'https://loc/loc/abc123.pdf'",
				"Uri_thumb" : "'https://loc/loc/abc123.pdf'",
				"updated" : "2015-05-05T12:30:00"
			}
		]
	}
]
);

db.messages.insertMany([
	{
		"_id" : ObjectId("59de76f49016edb7e7e814f1"),
		"key" : "USER_ACTIVATED",
		"message" : "Your access code was sent to your email."
	},
	{
		"_id" : ObjectId("59de775f9016edb7e7e8150c"),
		"key" : "USER_DE-ACTIVATED",
		"message" : "Your access code was turned off.  Please contact 111 222 1234 if you need to be given access."
	},
	{
		"_id" : ObjectId("59f7471e9016edb7e7e846b8"),
		"key" : "USER_REQUEST_PENDING",
		"message" : "The administration team is looking into your request.  Check back soon in your email for a response."
	},
	{
		"_id" : ObjectId("59f747cf9016edb7e7e846d9"),
		"key" : "USER_REQUEST_PENDING_CMT",
		"message" : "The administration team is looking into your request.  For immediate attention, please call 111 222 3333."
	},
	{
		"_id" : ObjectId("59f7481f9016edb7e7e846e7"),
		"key" : "USER_REQUEST_REJECT",
		"message" : "Your request for access has not been accepted.  For immediate attention, please call 111 222 3333."
	},
	{
		"_id" : ObjectId("59f748639016edb7e7e846f3"),
		"key" : "USER_EXPIRED_SESSION",
		"message" : "Your session has expired and you will need to log in again.  If you forgot your access code, please use the forgot access option."
	},
	{
		"_id" : ObjectId("59f748819016edb7e7e846f9"),
		"key" : "USER_EMAIL_NOT_FOUND",
		"message" : "Your email was not found, please verify or request access to Claim Management or Crisis Team Membership."
	},
	{
		"_id" : ObjectId("59f748a79016edb7e7e846fb"),
		"key" : "USER_CODE_NOT_VALID",
		"message" : "We were unable to log you in.  Please check your access code, or use the forgot access code option for a reminder."
	}
]
);



