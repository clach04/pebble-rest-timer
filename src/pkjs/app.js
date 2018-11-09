var Clay = require('./clay.js');
var clayConfig = require('./config');
//var clay = new Clay(clayConfig);
var clay = new Clay(clayConfig, null, { autoHandleEvents: false });


// as autoHandleEvents set to false need a basic showConfiguration action
Pebble.addEventListener('showConfiguration', function(e) {
    // for what ever reason this then causes Clay display to work in emulatpr
    var emulator = !Pebble || Pebble.platform === 'pypkjs';
    console.log('showConfiguration');
    console.log('emulator  =' + JSON.stringify(emulator));

    Pebble.openURL(clay.generateUrl());
});

Pebble.addEventListener('webviewclosed', function(e) {
    if (e && !e.response) {
    return;
    }

    // Get the keys and values from each config item
    var dict = clay.getSettings(e.response);

    console.log('string config data =' + JSON.stringify(dict));
    console.log('string config data length=' + JSON.stringify(dict).length);
    // Send settings values to watch side
    Pebble.sendAppMessage(dict, function(e) {
        console.log('Sent config data to Pebble');
    }, function(e) {
        console.log('Failed to send config data!');
        //console.log(JSON.stringify(e));
    });
});

