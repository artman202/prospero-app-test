// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ui.router', 'proportalControllers', 'uiGmapgoogle-maps', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (device.platform == "Android" || device.platform == "iPhone" || device.platform == "iOS")
    {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    initPushwoosh();

  });

})

.config(function($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider, $compileProvider) {

  uiGmapGoogleMapApiProvider.configure({
    //    key: 'your api key',
    v: '3.20', //defaults to latest 3.X anyhow
    libraries: 'weather,geometry,visualization'
  });

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider

    .state('home', {      
      url: "/home",     
      templateUrl: "templates/home.html",
      controller: "HomeCtrl"
    })

    .state('about-us', {      
      url: "/about-us",     
      templateUrl: "templates/about-us.html",
      controller: "AboutCtrl"
    })

    .state('contact-us', {      
      url: "/contact-us",     
      templateUrl: "templates/contact-us.html",
      controller: "ContactCtrl"
    })

  $compileProvider.imgSrcSanitizationWhitelist('img/');
  
})