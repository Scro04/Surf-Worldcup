// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  // Each tab has its own nav history stack:

  .state('events', {
      url: '/events',
      templateUrl: 'templates/events.html',
      controller: 'eventsCtrl'
    })
    .state('sponsors', {
      url: '/sponsors',
      templateUrl: 'templates/sponsors.html',
      controller: 'sponsorsCtrl'
    })


  // Competition States
  .state('competition', {
      url: '/competition',
      templateUrl: 'templates/comp_tabs.html',
    })

    .state('competition.pwa', {
      url: '/pwa',
      views: {
        'pwa': {
          templateUrl: "templates/comp_pwa.html",
          controller: 'pwaCtrl'
        }
      }
  })
  
    .state('competition.team', {
      url: '/team',
      views: {
        'team': {
          templateUrl: "templates/comp_team.html",
          controller: 'teamCtrl'
        }
      }
    })
    .state('competition.towin', {
      url: '/towin',
      views: {
        'towin': {
          templateUrl: "templates/comp_towin.html",
          controller: 'towinCtrl'
        }
      }
    })

   .state('side_events', {
        url: '/side_events_main',
        templateUrl: 'templates/side_events_main.html',
        controller: 'sideEventsCtrl'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});