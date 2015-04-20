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
		getDataSet(function()
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
		})

		

    })
    $scope.openmap = function (index) {


        element = "map" + index;
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

.controller('sideOE3Ctrl', function ($scope) {


})


//Competition Controller
.controller('teamCtrl', function ($scope) {
  //Function to show the Riders

  var button = document.getElementById('rider_button');  
  
  $(document).ready(function () {
  $('#rider_button').click(function () {
    $('.rider').slideToggle("fast");
    if (button.innerHTML == "Show Rider") {
      button.innerHTML = "Hide Rider";
    } else {
      button.innerHTML = "Show Rider";
    }
  });
  });
  })
.controller('pwaCtrl', function ($scope) {

})

.controller('towinCtrl', function ($scope) {

});


function appController($scope, $ionicSideMenuDelegate) {
    $scope.toggleLeftSideMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };
};