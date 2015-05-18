angular.module('starter.controllers', [])

.controller('appController', function ($scope, $state) {

    $scope.next = function (state) {
        console.log("testweed");
        $state.go("events");
        //$ionicSlideBoxDelegate.next();

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

.controller('sideEventsCtrl', function ($scope, $state) {   
    $scope.nextScreen = function (state) {
        $state.go(state);
    
    };

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

})


.controller('sideOE3Ctrl', function ($scope) {



})

//Competition Controller
.controller('compCtrl', function ($scope) {
 
  var table_size = document.getElementById('table').rows.length;
  
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
  }
})

function appController($scope, $ionicSideMenuDelegate) {
    $scope.toggleLeftSideMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };
};