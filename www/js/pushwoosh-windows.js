function registerPushwooshWP() {

	var pushNotification = cordova.require("com.pushwoosh.plugins.pushwoosh.PushNotification");
 
    //set push notifications handler
    document.addEventListener('push-notification', function(event) {
                //get the notification payload
                var notification = event.notification;
 
                //display alert to the user for example
                alert(JSON.stringify(notification));
    });
 
    //initialize the plugin
    pushNotification.onDeviceReady({ appid: "8784F-8D699", serviceName: "" });
 
    //register for pushes
    pushNotification.registerDevice(
        function(status) {
            var pushToken = status;
            console.warn('push token: ' + pushToken);
        },
        function(status) {
            console.warn(JSON.stringify(['failed to register ', status]));
        }
    );

}