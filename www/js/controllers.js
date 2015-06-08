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
    
    $scope.data = [];
  
    var surf = ["Gratis Windsurf Kurse!", "Auch in diesem Jahr gibt es natürlich wieder die Gratis Surfkurse von De Silva Windresort Kalpitiya für alle, die mal in den Windsurfsport hineinschnuppern möchten."];
    
    $scope.data.push(surf);
    
    var paddle = ["Joya Stand-Up Paddling!", "Die momentan am schnellsten wachsende Wassersportart bieten den perfekten Einstieg in den Windsurfsport. Der größte Stand Up Paddling Test mit den besten Marken der Welt, wo insgesamt 80 Boards zum Testen zur Verfügung stehen, wartet heuer in Podersdorf auf alle, die in das Surf-Feeling hineinschnuppern wollen. Einfach draufstellen, lospaddeln oder für die ganz Mutigen: Die Teilnahme an einem SUPstacles-Rennen, wo man mit dem SUP-Board Hindernisse am Wasser meistern muss."];
    
    $scope.data.push(paddle);
    
    var pit = ["Surfer Pit Walk!", "Der 'Pit Walk' kehrt zurück an den Neusiedler See: Die Top 8 Rider präsentieren sich im neu gestalteten Fahrerlager publikumsnahe wie selten zuvor: Die cool ausgestatteten Kojen bestaunen, Autogramme von den Besten der Welt holen, fachsimplen mit den Pros der Szene - da schlagen sowohl Mädchen- als auch Surferherzen höher."];
    
    $scope.data.push(pit);
    
    var beach = ["Beach Summer Games!", "Die Area der Beach Summer Games steht auch heuer wieder ganz im Zeichen des Ballsports. Die höchste Turnierklasse des Volleyballsports macht von 24. bis 26. April Halt und bietet die Möglichkeit sich direkt bei den Profis was abzuschauen. Natürlich kann auch vor Ort selber bei einem Schnuppertraining mitgemacht oder einfach so auf einem Platz gespielt werden. Die TimeOut Beachcamps mit professionellen Trainingseinheiten und Betreuung finden wieder an den Wochenenden statt - Anmeldung im Vorfeld hier oder nach Verfügbarkeit auch noch vor Ort möglich."];
    
    $scope.data.push(beach);
    
    var play = ["Skating Playground!", "Die Area to be für alle Skater! Der Treffpunkt am Mittelpunkt des Geländes ist der Traum für alle mit Scooter, Skateboard, Longboard, etc. Obstacles für Tricks, Shows und Contests über den Tag verteilt sorgen für reges Treiben in der Area."];
    
    $scope.data.push(play);
    
    var kids = ["Burgendland/Sportunion Kids Area!", "Die Sportunion Burgenland bringt die Kids zum Sport! Heuer wieder mit dabei: Ihre Airtrack Bahn, Mega-Zorbs (Riesenbälle aus Plastik), Discgolf, Bassalo, ..."];
    
    $scope.data.push(kids);
    
     var burger = ["Saftige Surf Burger!", "Lassen Sie sich uns von unseren Grillmeistern verwöhnen und genießen Sie den legendären, einzigartigen Surf-Burger. Nur echt beim Surfworldcup!"];
     
    $scope.data.push(burger);
    
    var pizza = ["Knusprige Pizza!", "Pizza - der beliebeste mediterrane Snack Österreichs ist natürlich auch bei uns in Podersdorf am Start - stellvertretend für die mediaterrane Kochkunst. Des weiteren gibt es für Feinschmecker Nudelboxen und Döner Kebap. Buon appetito!"];
     
    $scope.data.push(pizza);
    
      var kost = ["Echt österreichische Hausmannskost!", "Egal ob Wiener Schnitzel, eine herzhafte Käsekrainer oder Schinkenfleckerl - auch die traditionelle österreichische Küche ist ein Fixpunkt in unserem kulinarischen Programm."];
     
    $scope.data.push(kost);
    
    var bier = ["Kühles Bier!", "Ein kühles Blondes bitte! Unser Partner Heineken kommt diesem Wunsch gerne nach und bringt wieder alles rund um das beste Erfrischungsgetränk der Welt mit zum Surf-Opening. Hier muss keiner durstig nach Hause gehen"];
     
    $scope.data.push(bier);
    
    var cocktail = ["Coole Cocktails!", "Sex on the Beach, Caipirinha, Cuba Libre, ... sie alle und noch mehr sind an unseren Cocktailbars erhältlich. Was gibt es schöneres als den Tag bei Sonnenuntergang mit einem Cocktail ausklingen zu lassen?"];
     
    $scope.data.push(cocktail);
    
    var softdrink = ["Alkoholfreie Getränke!", "Auch alle Anti-Alkoholiker und Autofahrer kommen bei uns auf ihre Kosten. Unsere Getränkepartner bringen von Cola über Eistee bishin zu natürlichem Wasser alles was das Herz begehrt."];
     
    $scope.data.push(softdrink);
    
     var action = ["Action ohne Ende!", "Für alle denen die Surf-Contests am Wasser noch nicht genug Action bieten, haben wir auch heuer wieder unsere legendäre Action-Shows im Programm. Eine Flugshow von Hannes Arch, eine Trial-Bike Show von Tom Öhler oder ein Feuerwerk? Das alles und noch mehr gibts zu bestaunen - be surprised!"];
     
    $scope.data.push(action);
    
    var geschick = ["Was geht denn hier ab?", "Unsere Geschicklichkeitskünstler zeigen auch heuer wieder warum Sie die besten ihres Fachs sind. Lassen Sie sich in eine andere Welt entführen, die ohne Schwerkraft auszukommen scheint. Dog Dancing, Parcour und Slack-Line sind nur einige der Highlights die auf Sie warten"];
     
    $scope.data.push(geschick);
    
     var oe3 = ["Ö3 Seebühne mit DJ Lounge!", "Die perfekte musikalische Begleitung für den Tag am See kommt von Ö3-DJ Christian Prates. Mal fetzig-mitreißend, dann wieder chillig-entspannt - die Ö3-Seebühne ist der Mittelpunkt des Geländes."];
     
    $scope.data.push(oe3);
    
    var sundown = ["Sundowner Deluxe!", "Jeden Tag von 19 bis 21 Uhr. Feine Beats, atemberaubender Sonnenuntergang, coole Drinks - das heißt Ibiza-Feeling pur."];
     
    $scope.data.push(sundown);
    
    $scope.showInfo = function(value, screen) 
    {
        var blanket;
        var tmp_div;
        var tmp_div2;
        
        if(screen == 1)
        {
            blanket = document.getElementById("divContainer");
            tmp_div = document.getElementById("divTitle");
            tmp_div2 = document.getElementById("divText");
            
        }
        else if(screen == 2)
        {
            blanket = document.getElementById("divContainer2");
            tmp_div = document.getElementById("divTitle2");
            tmp_div2 = document.getElementById("divText2");
        }
        else if(screen == 3)
        {
            blanket = document.getElementById("divContainer3");
            tmp_div = document.getElementById("divTitle3");
            tmp_div2 = document.getElementById("divText3");
        }
        
        if(value <= 100)
        {
            if(blanket.style.display == "none")
            {
                blanket.style.display = "block";
            }
            
        tmp_div.innerHTML = $scope.data[value][0];
        tmp_div2.innerHTML = $scope.data[value][1];
        }
        else
        {
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


.controller('anfahrtCtrl', function ($scope) {

	  var directionsDisplay;
    var directionsService = new google.maps.DirectionsService();
    var map;

    var current_long;
    var current_lat;

    $scope.init = function () {
        directionsDisplay = new google.maps.DirectionsRenderer();
        var myLatLng = new google.maps.LatLng(47.8632526,16.83384984);
        var mapOptions = {
            zoom: 16,
            center: myLatLng
        };
        map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
        directionsDisplay.setMap(map);

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Hello World!'
        });
    }

    // Try W3C Geolocation (Preferred)
    if (navigator.geolocation) {
        browserSupportFlag = true;
        navigator.geolocation.getCurrentPosition(function (position) {
            initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            current_lat = position.coords.latitude;
            current_long = position.coords.longitude;
        }, function () {
            handleNoGeolocation(browserSupportFlag);
        });
    }
    // Browser doesn't support Geolocation
    else {
        browserSupportFlag = false;
        handleNoGeolocation(browserSupportFlag);
    }

    $scope.calcRoute = function () {
        console.log("calc");
        var request = {
            origin: new google.maps.LatLng(current_lat, current_long),
            destination: new google.maps.LatLng(47.8632526,16.83384984),
            travelMode: google.maps.TravelMode.DRIVING
        };
        directionsService.route(request, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setPanel(document.getElementById("googleMap"));
                directionsDisplay.setDirections(response);
            }
        });
    }

    function handleNoGeolocation(errorFlag) {
        if (errorFlag == true) {

            initialLocation = new google.maps.LatLng(47.078598, 15.450715);
        } else {
            initialLocation = siberia;
        }
        map.setCenter(initialLocation);
    }


})


.controller('partyCtrl', function ($scope) {
	
	$scope.partyData = partyDataSet_;	

    function isEventStored(ref) {
        var index = 0;
        for (var x = 0; x < storedEvents.length; x++) {
            if (storedEvents[x] == ref) {
                index = 1;
				console.log("event already stored");
            }
        }
        return index;
    }

	
     $scope.changeButton = function(data) {
        var index = isEventStored(data);	
		 setTimeout(function(){ 
			 console.log(data);
       if (!index) {
            var btn = document.getElementById(data);
            btn.removeAttribute("class");
            btn.removeAttribute("id");
            document.getElementById("added" + data).innerHTML = "Zu meinen Events hinzuf&uuml;gen";
            btn.setAttribute("class", "button button-block button-outline button-positive");
            btn.setAttribute("id", data);
        } else {
			console.log("changeeee");
            var btn = document.getElementById(data);
            document.getElementById("added" + data).innerHTML = "Hinzugef&uuml;gt";
            btn.removeAttribute("class");
            btn.removeAttribute("id");
            btn.setAttribute("class", "button button-block button-balanced icon ion-checkmark");
            btn.setAttribute("id", data);
        }
							   }, 100);

    }

	
    $scope.setParticipation = function (index) {
        if (isEventStored(index)) {

            for (var x = 0; x < storedEvents.length; x++) {
                if (storedEvents[x] == index) {
                    storedEvents.splice(x, 1);
                }
            }
            localStorage.clear();
            localStorage.setItem("myEvents", JSON.stringify(storedEvents));
            $scope.changeButton(index);
        } else {
            var inList = false;
            for (var x = 0; x < storedEvents.length; x++) {
                if (storedEvents[x] == index) {
                    inList = true;
                }
            }

            if (!inList) {
                console.log("Adding");
                storedEvents.push(index);
                localStorage.clear();
                localStorage.setItem("myEvents", JSON.stringify(storedEvents));
            }
            $scope.changeButton(index);
        }

    }
})

.controller('sponsorsCtrl', function ($scope, $window) {
	
	$scope.sponsorDataSet = sponsorsDataSet_;
	
	
	$scope.openUrl = function(item) {
            var ref = $window.open(item, '_system', 'location=yes');
        };
	
	
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
		map = new google.maps.Map(document.getElementById('googleMap2'), mapOptions);
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
  
  $scope.header = bewerbeDataSet_[1][1].split("-");
  
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

  //------------------------- Program -----------------------------
  var tmp_array_prog = []; 
    
  for(var x = 0; x < programmDataSet_.length; x++)
  {
    if(programmDataSet_[x][5] == 2)
    {
      tmp_array_prog.push(programmDataSet_[x]);    
    }
  }
  
  tmp_array_prog.sort(sortFunction); 
  
  function sortFunction(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
  }
  
  $scope.programData = tmp_array_prog;
  
  //------------------------- Buttons -----------------------------
  var is_prog_open = 0;
  var is_rider_open = 0;
  var button1 = document.getElementById('program_button');  
  var button = document.getElementById('rider_button');  
  var compare = "open";
  var compare1 = "open1";
  
  $(document).ready(function () {
    $('#rider_button').click(function () {
        $('.rider').slideToggle("fast");
        if(is_prog_open)
        {
          $('.program').slideToggle("fast");
          button1.className = "button icon-right ion-chevron-right";
          compare1 = "open1";
          is_prog_open = 0;    
        }
      
        if (compare == "open") {
          button.className = "button icon-right ion-chevron-down";
          compare = "close";
          is_rider_open = 1;
        } else {
          button.className = "button icon-right ion-chevron-right";
          compare = "open";
          is_rider_open = 0;
        }
    });
  });
 
  $(document).ready(function () {
    $('#program_button').click(function () {
        $('.program').slideToggle("fast");
        if(is_rider_open)
        {
          $('.rider').slideToggle("fast");
          button.className = "button icon-right ion-chevron-right";
          compare = "open";
          is_rider_open = 0;    
        } 
        if (compare1 == "open1") {
          button1.className = "button icon-right ion-chevron-down";
          compare1 = "close1";
          is_prog_open = 1;
        } else {
          button1.className = "button icon-right ion-chevron-right";
          compare1 = "open1";
          is_prog_open = 0;
        }
    });
  });
  
  //-------- calendar ---------------

  var q = new Date();
  var m = q.getMonth()+1;
  var d = q.getDay();
  var y = q.getYear();

  var pic_name = [];
  
  console.log(m);
  
  for(var i = 0; i < tmp_array_prog.length; i++)
  {
    var name;
    var split_ = tmp_array_prog[i][1].split("-");
    if(y <= split_[0])
    {  
      if(m <= split_[1])
      {
        if(d <= split_[2]) 
          {
             name = "img/date/" + split_[2] + "n.jpg";
          }
        else
           name = "img/date/" + split_[2] + ".jpg";
      }
      else             
        name = "img/date/" + split_[2] + ".jpg";
    }
    else      
      name = "img/date/" + split_[2] + ".jpg";
    
    pic_name.push(name);
  }
  $scope.picName = pic_name;

  
  //--------------------- Show More ---------------
  
  $(document).ready(function() {
    var showChar = 300;
    var ellipsestext = "...";
    var moretext = "more";
    var lesstext = "less";
    $('.more').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar-1, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ ' </span><span class="morecontent"><span>' + h + '</span>  <a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
  
  
  
  

})


//Competition Controller
.controller('compCtrl', function ($scope) {
	
	//console.log(riderDataSet_);
 
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