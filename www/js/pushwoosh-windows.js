function registerPushwooshWP() {

	var pushNotification = cordova.require("com.pushwoosh.plugins.pushwoosh.PushNotification");
 
    //set push notifications handler
    document.addEventListener('push-notification', function(event) {
                //get the notification payload
                var notification = event.notification;

                var title = event.notification.content;

                function alertDismissed() {
                    // do something
                }

                // alert(notification.aps.alert);
                navigator.notification.alert(
                    title,  // message
                    alertDismissed,         // callback
                    'Alert',            // title
                    'Done'                  // buttonName
                );
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