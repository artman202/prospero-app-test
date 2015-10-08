angular.module('proportalControllers', [])

.controller('HomeCtrl', ['$scope', function($scope){
	$scope.imagePath = "img/logo.png"
}])

.controller('AboutCtrl', ['$scope', function($scope){
  
}])

.controller('ContactCtrl', ['$scope', 'uiGmapGoogleMapApi', '$cordovaGeolocation', function($scope, uiGmapGoogleMapApi, $cordovaGeolocation){
	
	$scope.map = {
		center: { latitude: -25.797440, longitude: 28.323988 },
		zoom: 16
	};

	$scope.marker = {
      	id: 1,
      	show: false,
      	coords: {
        	latitude: -25.797440,
        	longitude: 28.323988
      	},
      	options: { 
      		draggable: false,
      	},
      	events: {
        	dragend: function (marker, eventName, args) {
	          	$log.log('marker dragend');
	          	var lat = -25.797440;
	          	var lon = 28.323988;
	          	$log.log(lat);
	          	$log.log(lon);

	          	$scope.marker.options = {
	            	draggable: true,
	            	labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
	            	labelAnchor: "100 0",
	            	labelClass: "marker-labels"
	          	};
        	}
      	}
    };

    $scope.windowOptions = {
        visible: false
    };

    $scope.onClick = function() {
        $scope.windowOptions.visible = !$scope.windowOptions.visible;
    };

    $scope.closeClick = function() {
        $scope.windowOptions.visible = false;
    };

    $scope.windowTitle = "Window Title!";

}])