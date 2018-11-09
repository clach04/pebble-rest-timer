'use strict';

/*global Pebble*/
var values = null;
var initialized = false;

Pebble.addEventListener('ready', function (e) {
  // console.log('connect: ' + e.ready);
  // console.log(e.type);
  initialized = true;
});

Pebble.addEventListener('showConfiguration', function (e) {
//	console.log('Configuration window opened. ');
  Pebble.openURL('https://clach04.github.io/pebble-rest-timer/config.html');
});

Pebble.addEventListener('webviewclosed', function (e) {
  //console.log('Configuration closed');
  //console.log('Response = ' + e.response.length + '   ' + e.response);
  if (e.response) { // user clicked Save/Submit, not Cancel/Done
    // console.log('User hit save');
    values = JSON.parse(decodeURIComponent(e.response));
    console.log('stringified options: ' + JSON.stringify((values)));
    Pebble.sendAppMessage(values);
    // Pebble.sendAppMessage(values, function () {
    //   // console.log('Successfully sent options to Pebble');
    // }, function (e) {
    //   // console.log('Failed to send options to Pebble.\nError: ' + e.error.message);
    // });
  }
});
