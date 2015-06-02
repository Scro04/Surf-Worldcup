angular.module('starter.controllers', [])


.controller('appController', function ($scope, $state) {
                                                
    $scope.next = function (state) {

		$state.go(state);

    }

    $scope.openmenue = function () {

        triggerBouncyNav(true);
    };


    $scope.closemenue = function () {
        triggerBouncyNav(false);
    };

    var is_bouncy_nav_animating = false;

    function triggerBouncyNav($bool) {

        //check if no nav animation is ongoing
        if (!is_bouncy_nav_animating) {
            is_bouncy_nav_animating = true;

            //toggle list items animation
            $('.cd-bouncy-nav-modal').toggleClass('fade-in', $bool).toggleClass('fade-out', !$bool).find('li:last-child').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                $('.cd-bouncy-nav-modal').toggleClass('is-visible', $bool);
                if (!$bool) $('.cd-bouncy-nav-modal').removeClass('fade-out');
                is_bouncy_nav_animating = false;
            });

            //check if CSS animations are supported... 
            if ($('.cd-bouncy-nav-trigger').parents('.no-csstransitions').length > 0) {
                $('.cd-bouncy-nav-modal').toggleClass('is-visible', $bool);
                is_bouncy_nav_animating = false;
            }
        }
    }


    
})      


.controller('NavCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.showMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };

})


.controller('homeCtrl', function ($scope, $state) {

    $scope.$watch('$viewContentLoaded', function () {

        getSlider();
		/*getDataSet(function()
		{
			console.log("Data loaded");
			var data = getUpcomingEventByIdandTime("Sport");
			var data2 = getUpcomingEventByIdandTime("SideEvent");
			var data3 = getUpcomingEventByIdandTime("Party");
			if(data != null && data.length > 0)
			{
				document.getElementById("event1_title").innerHTML = data[0];
        		document.getElementById("event1_time").innerHTML = data[2] + " - " + data[3];
        		document.getElementById("event1_descr").innerHTML = data[1];
			}
			if(data2 != null && data2.length > 0)
			{
				document.getElementById("event2_title").innerHTML = data2[0];
        		document.getElementById("event2_time").innerHTML = data2[2] + " - " + data2[3];
        		document.getElementById("event2_descr").innerHTML = data2[1];
			}
			if(data3 != null && data3.length > 0)
			{
				document.getElementById("event3_title").innerHTML = data3[0];
        		document.getElementById("event3_time").innerHTML = data3[2] + " - " + data3[3];
        		document.getElementById("event3_descr").innerHTML = data3[1];
			}
		})*/

		

    })
    $scope.openmap = function (index) {


        element = "map" + index;
		console.log(element);
        var image = document.getElementById(element);

        if (image.style.maxHeight == "500px") {
            image.style.maxHeight = '0px';
        } else {
            image.style.maxHeight = '500px';
        }
    }


})

.controller('eventsCtrl', function ($scope) {


})
.controller('sponsorsCtrl', function ($scope) {


})

.controller('sideEventsCtrl', function ($scope) {   
  
    $scope.surf = ["Gratis Windsurf Kurse!", "Auch in diesem Jahr gibt es natürlich wieder die Gratis Surfkurse von De Silva Windresort Kalpitiya für alle, die mal in den Windsurfsport hineinschnuppern möchten."];
    
    $scope.paddle = ["Joya Stand-Up Paddling!", "Die momentan am schnellsten wachsende Wassersportart bieten den perfekten Einstieg in den Windsurfsport. Der größte Stand Up Paddling Test mit den besten Marken der Welt, wo insgesamt 80 Boards zum Testen zur Verfügung stehen, wartet heuer in Podersdorf auf alle, die in das Surf-Feeling hineinschnuppern wollen. Einfach draufstellen, lospaddeln oder für die ganz Mutigen: Die Teilnahme an einem SUPstacles-Rennen, wo man mit dem SUP-Board Hindernisse am Wasser meistern muss."];
    
    $scope.pit = ["Surfer Pit Walk!", "Der 'Pit Walk' kehrt zurück an den Neusiedler See: Die Top 8 Rider präsentieren sich im neu gestalteten Fahrerlager publikumsnahe wie selten zuvor: Die cool ausgestatteten Kojen bestaunen, Autogramme von den Besten der Welt holen, fachsimplen mit den Pros der Szene - da schlagen sowohl Mädchen- als auch Surferherzen höher."];
    
    $scope.beach = ["Beach Summer Games!", "Die Area der Beach Summer Games steht auch heuer wieder ganz im Zeichen des Ballsports. Die höchste Turnierklasse des Volleyballsports macht von 24. bis 26. April Halt und bietet die Möglichkeit sich direkt bei den Profis was abzuschauen. Natürlich kann auch vor Ort selber bei einem Schnuppertraining mitgemacht oder einfach so auf einem Platz gespielt werden. Die TimeOut Beachcamps mit professionellen Trainingseinheiten und Betreuung finden wieder an den Wochenenden statt - Anmeldung im Vorfeld hier oder nach Verfügbarkeit auch noch vor Ort möglich."];
    
    $scope.play = ["Skating Playground!", "Die Area to be für alle Skater! Der Treffpunkt am Mittelpunkt des Geländes ist der Traum für alle mit Scooter, Skateboard, Longboard, etc. Obstacles für Tricks, Shows und Contests über den Tag verteilt sorgen für reges Treiben in der Area."];
    
    $scope.kids = ["Burgendland/Sportunion Kids Area!", "Die Sportunion Burgenland bringt die Kids zum Sport! Heuer wieder mit dabei: Ihre Airtrack Bahn, Mega-Zorbs (Riesenbälle aus Plastik), Discgolf, Bassalo, ..."];
    
    $scope.showInfo = function(value) 
    {
        var blanket = document.getElementById("divContainer");
        var tmp_div = document.getElementById("divTitle");
        var tmp_div2 = document.getElementById("divText");
        
        
        if(blanket.style.display == "none")
        {
            blanket.style.display = "block";
        }
        
        switch(value)
        {
           case 1:
             
             tmp_div.innerHTML = $scope.surf[0];
             tmp_div2.innerHTML = $scope.surf[1];
             break;
                
           case 2:
             
             tmp_div.innerHTML = $scope.paddle[0];
             tmp_div2.innerHTML = $scope.paddle[1];
             break;
                
          case 3:
             
             tmp_div.innerHTML = $scope.pit[0];
             tmp_div2.innerHTML = $scope.pit[1];
             break;
        
          case 4:
             
             tmp_div.innerHTML = $scope.beach[0];
             tmp_div2.innerHTML = $scope.beach[1];
             break;
                
        case 5:
            
             tmp_div.innerHTML = $scope.play[0];
             tmp_div2.innerHTML = $scope.play[1];
             break;
                
        case 6:
             
             tmp_div.innerHTML = $scope.kids[0];
             tmp_div2.innerHTML = $scope.kids[1];
             break;
                
        default:
            blanket.style.display = "none";     
    
        }
    }

})

.controller('sideSurfenCtrl', function ($scope) {


})

.controller('sideTrendsportCtrl', function ($scope) {


})

.controller('sideShowsCtrl', function ($scope) {


})

.controller('sideFoodCtrl', function ($scope) {


})


.controller('partyCtrl', function ($scope) {
	
	console.log(partyDataSet_[0][6]);
	$scope.partyData = partyDataSet_;

})


.controller('mapCtrl', function ($scope, $state) {
	var map;

	var current_long;
	var current_lat;
	
	

	$scope.init = function () {

		var MY_MAPTYPE_ID = 'custom_style';
		
  var featureOpts = [];
    
		var myLatLng = new google.maps.LatLng(47.8632526,16.8338498);
		var mapOptions = {
			zoom: 16,
			disableDefaultUI: true,
			navigationControl: false,
    mapTypeControl: false,
			scrollwheel: false,
    scaleControl: false,
    draggable: false,
			center: myLatLng,
			 mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
		};
		map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
		  var styledMapOptions = {
    name: 'Custom Style'
  };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);


  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

		
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Setting the position of the Glastonbury map marker.
var markerPositionGlastonbury = new google.maps.LatLng(47.8632526,16.83384984);
//Setting the icon to be used with the Glastonbury map marker.
var markerIconGlastonbury = {
 url: 'img/icon_rockness.png',
 //The size image file.
 size: new google.maps.Size(225, 120),
 //The point on the image to measure the anchor from. 0, 0 is the top left.
 origin: new google.maps.Point(0, 0),
 //The x y coordinates of the anchor point on the marker. e.g. If your map marker was a drawing pin then the anchor would be the tip of the pin.
 anchor: new google.maps.Point(139, 116)
};

//Setting the shape to be used with the Glastonbury map marker.
var markerShapeGlastonbury = {
 coord: [12,4,216,22,212,74,157,70,184,111,125,67,6,56],
 type: 'poly'
};
		
//Creating the Glastonbury map marker.
markerGlastonbury = new google.maps.Marker({
 //uses the position set above.
 position: markerPositionGlastonbury,
 //adds the marker to the map.
 map: map,
 title: 'Glastonbury Festival',
 //assigns the icon image set above to the marker.
 icon: markerIconGlastonbury,
 //assigns the icon shape set above to the marker.
 shape: markerShapeGlastonbury,
 //sets the z-index of the map marker.
 zIndex:102
})
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
var oe3marker = new google.maps.LatLng(47.861927, 16.830819);
//Setting the icon to be used with the Glastonbury map marker.
var icon_oe3_marker = {
 url: 'img/oe3mark.png',
 //The size image file.
 size: new google.maps.Size(60, 55),
 //The point on the image to measure the anchor from. 0, 0 is the top left.
 origin: new google.maps.Point(0, 0),
 //The x y coordinates of the anchor point on the marker. e.g. If your map marker was a drawing pin then the anchor would be the tip of the pin.
 anchor: new google.maps.Point(0, 46)
};

	
//Creating the Glastonbury map marker.
oe3mark = new google.maps.Marker({
 //uses the position set above.
 position: oe3marker,
 //adds the marker to the map.
 map: map,
 title: 'Glastonbury Festival',
 //assigns the icon image set above to the marker.
 icon: icon_oe3_marker,
 //assigns the icon shape set above to the marker.
 //sets the z-index of the map marker.
 zIndex:102
})
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
var heinekenmarker = new google.maps.LatLng(47.861927, 16.830819);
//Setting the icon to be used with the Glastonbury map marker.
var icon_heineken_marker = {
 url: 'img/heineken_marker.png',
 //The size image file.
 size: new google.maps.Size(90, 85),
 //The point on the image to measure the anchor from. 0, 0 is the top left.
 origin: new google.maps.Point(0, 0),
 //The x y coordinates of the anchor point on the marker. e.g. If your map marker was a drawing pin then the anchor would be the tip of the pin.
 anchor: new google.maps.Point(-100, 116)
};

	
//Creating the Glastonbury map marker.
hmark = new google.maps.Marker({
 //uses the position set above.
 position: heinekenmarker,
 //adds the marker to the map.
 map: map,
 title: 'Glastonbury Festival',
 //assigns the icon image set above to the marker.
 icon: icon_heineken_marker,
 //assigns the icon shape set above to the marker.
 //sets the z-index of the map marker.
 zIndex:102
})
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
var bacardimarker = new google.maps.LatLng(47.861927, 16.830819);
//Setting the icon to be used with the Glastonbury map marker.
var icon_bacardi_marker = {
 url: 'img/bacardi_marker.png',
 //The size image file.
 size: new google.maps.Size(80, 80),
 //The point on the image to measure the anchor from. 0, 0 is the top left.
 origin: new google.maps.Point(0, 0),
 //The x y coordinates of the anchor point on the marker. e.g. If your map marker was a drawing pin then the anchor would be the tip of the pin.
 anchor: new google.maps.Point(-100, 266)
};

	
//Creating the Glastonbury map marker.
bacmark = new google.maps.Marker({
 //uses the position set above.
 position: bacardimarker,
 //adds the marker to the map.
 map: map,
 title: 'Glastonbury Festival',
 //assigns the icon image set above to the marker.
 icon: icon_bacardi_marker,
 //assigns the icon shape set above to the marker.
 //sets the z-index of the map marker.
 zIndex:102
})
	
}

	
})
.controller('sideOE3Ctrl', function ($scope) {



})

.controller('pwaCtrl', function ($scope) {
  
  $scope.header = bewerbeDataSet_[1][1];
  $scope.descr = bewerbeDataSet_[1][4];
    
  //------------------------- Rider -----------------------------	
  var tmp_array = [];
  console.log(riderDataSet_);
  for(var x = 0; x < riderDataSet_.length; x++)
  {
      if(riderDataSet_[x][6] == 2)
      {
          tmp_array.push(riderDataSet_[x]);
      }
  }
  $scope.riderData = tmp_array;

  var button = document.getElementById('rider_button');  
  var compare = "open";
  $(document).ready(function () {
    $('#rider_button').click(function () {
        $('.rider').slideToggle("fast");
        if (compare == "open") {
          button.className = "button icon-right ion-chevron-down";
          compare = "close";
        } else {
          button.className = "button icon-right ion-chevron-right";
          compare = "open";
        }
    });
  });
  //------------------------- Program -----------------------------
  var tmp_array_prog = []; 
    
  for(var x = 0; x < programmDataSet_.length; x++)
  {
    if(programmDataSet_[x][5] == 2)
    {
      tmp_array_prog.push(programmDataSet_[x]);    
    }
  }
  $scope.programData = tmp_array_prog;
  
  
  var button1 = document.getElementById('program_button');  
  var compare1 = "open";
  $(document).ready(function () {
    $('#program_button').click(function () {
        $('.program').slideToggle("fast");
        if (compare1 == "open") {
          button1.className = "button icon-right ion-chevron-down";
          compare1 = "close";
        } else {
          button1.className = "button icon-right ion-chevron-right";
          compare1 = "open";
        }
    });
  });
})


//Competition Controller
.controller('compCtrl', function ($scope) {
	
	console.log(riderDataSet_);
 
 /* var table_size = document.getElementById('table').rows.length;
  
  for(var i = 0 ; i < table_size; i++)
  {
    start_time_el = "start_time" + i;
    var start_time = document.getElementById(start_time_el).innerHTML;

    end_time_el = "end_time" + i;
    var end_time = document.getElementById(end_time_el).innerHTML;

    date_el = "date" + i; 
    var date = document.getElementById(date_el).innerHTML;

    var status = isEventAtTime(start_time, end_time, date);

    event_el = "event"+i;

    if(status == "prev")
    {
      document.getElementById(event_el).className = "prev";
    }
    else if (status == "now")
    {
      document.getElementById(event_el).className = "now";
    }
    else if(status == "later")
    {
      document.getElementById(event_el).className = "later";
    }
    else
    {
      document.getElementById(event_el).className = "fail";
    }
  }*/
})

function appController($scope, $ionicSideMenuDelegate) {
    $scope.toggleLeftSideMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };
};