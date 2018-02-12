// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('App', ['ionic'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('tour',{
    url:'/tour',
    templateUrl:'views/tour/tour.html'
  })
  .state('home',{
    url:'/home',
    templateUrl:'views/home/home.html'
  })
  .state('reservation',{
    url:'/reservation',
    controller:'ReservationController',
    templateUrl:'views/reservation/reservation.html'
  })
  .state('weather',{
    url:'/weather',
    controller:'WeatherController',
    templateUrl:'views/weather/weather.html'
  })
  .state('restaurants',{
    url:'/restaurants',
    controller:'RestaurantsController',
    templateUrl:'views/restaurants/restaurants.html'
  });
  $urlRouterProvider.otherwise('/tour');
})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);



    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
