function getDataSet(callback)
{
//-----------------------------------------------------------------------------
//3 Main Categories : Sport, Party, SideEvent
//Sport: TeamContest, PWA Freestyle, Tow-In EM
//Party: Kickoff, Big Partys, Body Partys
//SideEvent: Surfen, Trendsport, Shows, Food+Drinks, Ö3 Seebühne
//-----------------------------------------------------------------------------
var test_title1 = "Heineken Trink 2 Zahl 1!";
var test_organizer1 = "Heineken Bar";
var test_timeFrom1 = "17:00";
var test_timeTo1 = "19:00";
var test_category1 = "SideEvent";
var test_offset1 = 4;
var test_location1 = "HeinekenBar";
var test_date1 = "23.04.2015";
//-----------------------------------------------------------------------------

var test_title2 = "Surf Tutorial";
var test_organizer2 = "Surfschule DoIt";
var test_timeFrom2 = "13:00";
var test_timeTo2 = "14:30";
var test_category2 = "SideEvent";
var test_offset2 = 1;
var test_location2 = "SurfschuleDoIt";
var test_date2 = "23.04.2015";


//-----------------------------------------------------------------------------

var test_title3 = "StandUp Paddling";
var test_organizer3 = "Surfschule DoIt";
var test_timeFrom3 = "14:00";
var test_timeTo3 = "16:00";
var test_category3 = "SideEvent";
var test_offset3 = 2;
var test_location3 = "SurfschuleDoIt";
var test_date3 = "24.04.2015";


//-----------------------------------------------------------------------------

var test_title4 = "Skateboard Live Show";
var test_organizer4 = "Skatepark";
var test_timeFrom4 = "16:00";
var test_timeTo4 = "17:00";
var test_category4 = "SideEvent";
var test_offset4 = 3;
var test_location4 = "Skatepark";
var test_date4 = "25.04.2015";


//-----------------------------------------------------------------------------

var test_title5 = "TeamContest Bewerb";
var test_organizer5 = "Sportveranstalter";
var test_timeFrom5 = "10:00";
var test_timeTo5 = "17:00";
var test_category5 = "Sport";
var test_offset5 = 1;
var test_location5 = "Sportveranstalter";
var test_date5 = "23.04.2015";
var test_date5= "1.05.2015";


//-----------------------------------------------------------------------------

var test_title6 = "PWA Freestyle";
var test_organizer6 = "Sportveranstalter";
var test_timeFrom6 = "10:00";
var test_timeTo6 = "17:00";
var test_category6 = "Sport";
var test_offset6 = 2;
var test_location6 = "Sportveranstalter";
var test_date6 = "1.05.2015";


//-----------------------------------------------------------------------------

var test_title7 = "Tow-In EM";
var test_organizer7 = "Sportveranstalter";
var test_timeFrom7 = "10:00";
var test_timeTo7 = "17:00";
var test_category7 = "Sport";
var test_offset7 = 3;
var test_location7 = "Sportveranstalter";
var test_date7 = "23.04.2015";


//-----------------------------------------------------------------------------

var test_title8 = "Kickoff";
var test_organizer8 = "Seebühne";
var test_timeFrom8 = "20:00";
var test_timeTo8 = "02:00";
var test_category8 = "Party";
var test_offset8 = 1;
var test_location8 = "Seebühne";
var test_date8 = "1.05.2015";


//-------------------------1---------------------------------------------------

var test_title9 = "Bacardy Party";
var test_organizer9 = "Partyzelt Bacardi";
var test_timeFrom9 = "22:00";
var test_timeTo9 = "02:00";
var test_category9 = "Party";
var test_offset9 = 2;
var test_location9 = "PatyzeltBacardi";
var test_date9 = "1.05.2015";

//-----------------------------------------------------------------------------

var test_title10 = "Body Partys";
var test_organizer10 = "Desperados";
var test_timeFrom10 = "20:30";
var test_timeTo10 = "24:00";
var test_category10 = "Party";
var test_offset10 = 3;
var test_location10 = "DesperadosBar";
var test_date10 = "23.04.2015";


//-----------------------------------------------------------------------------
//Save the data into an array
//-----------------------------------------------------------------------------
var data_set_loc = [];

for(var x = 1; x < 11; x++)
{

    var title = eval("test_title" + x);
    data_set_loc.push(title);
    var organizer = eval("test_organizer" + x);
    data_set_loc.push(organizer);
    var from = eval("test_timeFrom" + x);
    data_set_loc.push(from);
    var to = eval("test_timeTo" + x);
    data_set_loc.push(to);
    var categ = eval("test_category" + x);
    data_set_loc.push(categ);
    var offset = eval("test_offset" + x);
    data_set_loc.push(offset);
    var loc = eval("test_location" + x);
    data_set_loc.push(loc);
    var date = eval("test_date" + x);
    data_set_loc.push(date);
    dataSet_.push(data_set_loc);
    data_set_loc = [];
}

       if (typeof callback === "function")
        {
            callback();
            return;
		}

	return;
}