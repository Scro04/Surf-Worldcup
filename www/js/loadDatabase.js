$(document).ready(function () {

//-----------------------------------------------------------------------------
//----------------------------GLOBAL DATABASE DATA-----------------------------

riderDataSet_ = [];
bewerbeDataSet_ = [];
programmDataSet_ = [];
sideEventsDataSet_ = [];

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
		console.log(result);
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
		console.log(result);
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
		console.log(result);
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
		console.log(result);
	}
});
//-----------------------------------------------------------------------------	
	
	
//-----------------------------LOAD FROM JSON-----------------------------------
var loadRider = "json/Rider.json";
var loadBewerbe = "json/Bewerbe.json";
var loadProgram = "json/Program.json";
var loadSideEvents = "json/SideEvents.json";

function loadFromJson(data)
{
$.ajax({
	type: "GET",
	url: string,
	dataType: "json",
	success: function (data) {
		var arr = [];
		for(var x = 0; x < data.length; x++)
			arr.push($.map(data[x], function(el) { return el; }));
		console.log(arr);
	},
	error: function (result) {
		console.log(result);
	}
  }
});

		
});