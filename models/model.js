var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CompanySchema   = new Schema({}, {strict: false});
var StaffsSchema   = new Schema({}, {strict: false});
var MockSchema   = new Schema({});
var RolesSchema   = new Schema({});

var TeamsSchema   = new Schema({
	"members" : [
		{
			staff: {
				
			}
		}
	],	
	"documents" : [{	
	}]

}, {strict: false} );

var ReportsSchema   = new Schema({}, {strict: false});

var MeetingsSchema   = new Schema({
	"documents" : Array
}, {strict: false});

var CrisisSchema   = new Schema({}, {strict: false});
var Sample1Schema   = new Schema({}, {strict: false});
var Sample2Schema   = new Schema({}, {strict: false});
var Sample3Schema   = new Schema({}, {strict: false});
var ChecklistSchema   = new Schema({"items": Array});

// New
var DocumentsSchema   = new Schema({});
var VehicleRegSchema   = new Schema({}, {strict: false});
var NotificationsSchema   = new Schema({}, {strict: false});

exports.mockdata = mongoose.model('mockrecords', MockSchema);
exports.companies = mongoose.model('companies', CompanySchema);
exports.staffs = mongoose.model('staffs', StaffsSchema);
exports.roles = mongoose.model('role', RolesSchema, 'role');

exports.teams = mongoose.model('teams', TeamsSchema);

exports.reports = mongoose.model('reports', ReportsSchema);
exports.meetings = mongoose.model('meetings', MeetingsSchema);
exports.crisis = mongoose.model('crisis', CrisisSchema, 'crisis');
exports.checklist = mongoose.model('checklist', ChecklistSchema, 'checklist');

// New
exports.documents = mongoose.model('documents', DocumentsSchema);
exports.vehicleregistration = mongoose.model('vehicle.registration', VehicleRegSchema);
exports.notifications = mongoose.model('notifications', NotificationsSchema);