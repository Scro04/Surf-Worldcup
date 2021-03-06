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
        document.getElementById("event1_title").innerHTML = getUpcomingEventByIdandTime()[0];
        document.getElementById("event1_time").innerHTML = getUpcomingEventByIdandTime()[2];
        document.getElementById("event1_descr").innerHTML = getUpcomingEventByIdandTime()[1];

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