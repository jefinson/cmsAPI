
// update meetings
router.route("/api/1/meetings/",urlencodedParser)
.post(function(req,res){
	// console.log(req.body);	
	if(!req.session.sessionID){

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








