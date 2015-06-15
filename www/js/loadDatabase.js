$(document).ready(function () {
	
//-----------------------------------------------------------------------------
//----------------------------GLOBAL DATABASE DATA-----------------------------

riderDataSet_ = [];
bewerbeDataSet_ = [];
programmDataSet_ = [];
sideEventsDataSet_ = [];
partyDataSet_ = [];
sponsorsDataSet_ = [];
	
//-----------------------------------------------------------------------------	
//------------------------------LOAD RIDERS DATA-------------------------------

$.ajax({
	type: "GET",
	url: "php/Rider.php",
	dataType: "json",
	success: function (data) {
		riderDataSet_ = data;
		console.log(riderDataSet_);
	},
	error: function (result) {
		loadRiderJSON();
	}
});
//-----------------------------------------------------------------------------	
//------------------------------LOAD BEWERBE DATA------------------------------

$.ajax({
	type: "GET",
	url: "php/Bewerbe.php",
	dataType: "json",
	success: function (data) {
		bewerbeDataSet_ = data;
		console.log(bewerbeDataSet_);
	},
	error: function (result) {
		loadBewerbeJSON();
	}
});
//-----------------------------------------------------------------------------	
//------------------------------LOAD PROGRAM DATA------------------------------

$.ajax({
	type: "GET",
	url: "php/Programm.php",
	dataType: "json",
	success: function (data) {
		programmDataSet_ = data;
		console.log(programmDataSet_);
	},
	error: function (result) {
		loadProgramJSON();
	}
});
//-----------------------------------------------------------------------------	
//---------------------------LOAD SIDE EVENTS DATA-----------------------------

$.ajax({
	type: "GET",
	url: "php/SideEvents.php",
	dataType: "json",
	success: function (data) {
		sideEventsDataSet_ = data;
		console.log(sideEventsDataSet_);
	},
	error: function (result) {
		loadSideEventJSON();
	}
});
//-----------------------------------------------------------------------------	
//---------------------------LOAD PARTY EVENTS DATA-----------------------------

$.ajax({
	type: "GET",
	url: "php/getPartys.php",
	dataType: "json",
	success: function (data) {
		partyDataSet_ = data;
		console.log(partyDataSet_);
	},
	error: function (result) {
		console.log("error");
	}
});

//-----------------------------------------------------------------------------	
//------------------------------LOAD SPONSORS DATA-----------------------------

$.ajax({
	type: "GET",
	url: "php/getSponsors.php",
	dataType: "json",
	success: function (data) {
		sponsorsDataSet_ = data;
		console.log(sponsorsDataSet_);
	},
	error: function (result) {
		loadSponsorsJSON();
	}
});
//-----------------------------------------------------------------------------	

	
//-----------------------------LOAD RIDER FROM JSON----------------------------
function loadRiderJSON()
{
	$.ajax({
		type: "GET",
		url: "json/Rider.json",
		dataType: "json",
		success: function (data) {
			for(var x = 0; x < data.length; x++)
				riderDataSet_.push($.map(data[x], function(el) { return el; }));
			console.log(riderDataSet_);		
		},
		error: function (result) {
			console.log(result);
		}
	  });
}
//-----------------------------LOAD BEWERBE JSON-------------------------------
function loadBewerbeJSON()
{
	$.ajax({
		type: "GET",
		url: "json/Bewerbe.json",
		dataType: "json",
		success: function (data) {
			for(var x = 0; x < data.length; x++)
				bewerbeDataSet_.push($.map(data[x], function(el) { return el; }));
			console.log(bewerbeDataSet_);		
		},
		error: function (result) {
			console.log(result);
		}
	  });
}
//-----------------------------LOAD PROGRAM JSON-------------------------------
function loadProgramJSON()
{
	$.ajax({
		type: "GET",
		url: "json/Program.json",
		dataType: "json",
		success: function (data) {
			for(var x = 0; x < data.length; x++)
				programmDataSet_.push($.map(data[x], function(el) { return el; }));
			console.log(programmDataSet_);	

			loadPartysJSON()
		},
		error: function (result) {
			console.log(result);
		}
	  });
}
//-----------------------------LOAD SIDE EVENT JSON----------------------------
function loadSideEventJSON()
{
	$.ajax({
		type: "GET",
		url: "json/SideEvents.json",
		dataType: "json",
		success: function (data) {
			for(var x = 0; x < data.length; x++)
				sideEventsDataSet_.push($.map(data[x], function(el) { return el; }));
			console.log(sideEventsDataSet_);		
		},
		error: function (result) {
			console.log(result);
		}
	  });
}

//-----------------------------LOAD PARTY EVENT JSON----------------------------
function loadPartysJSON()
{
	for(var x = 0; x < programmDataSet_.length; x++)
	{
		if(programmDataSet_[x][5] == 5)
			partyDataSet_.push(programmDataSet_[x]);
						   }
	
	console.log(partyDataSet_);
}

	//-----------------------------LOAD SIDE EVENT JSON----------------------------
function loadSponsorsJSON()
{
	$.ajax({
		type: "GET",
		url: "json/Sponsors.json",
		dataType: "json",
		success: function (data) {
			for(var x = 0; x < data.length; x++)
				sponsorsDataSet_.push($.map(data[x], function(el) { return el; }));
			console.log(sponsorsDataSet_);		
		},
		error: function (result) {
			console.log(result);
		}
	  });
}
	
	
});