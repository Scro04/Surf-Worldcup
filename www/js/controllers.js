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

.controller('homeCtrl', function ($scope) {

        $scope.openmap = function (index) {
            //alert("goes");
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


function appController($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeftSideMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
};
