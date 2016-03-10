/*jslint node:true, vars:true, bitwise:true, unparam:true */
/*jshint unused:true */
// Leave the above lines for propper jshinting

/*
    The Interrupt Service Routine (ISR) sample application distributed within Intel® XDK IoT Edition under the IoT with Node.js Projects project creation option showcases how an ISR to call when an interrupt occurs.

    MRAA - Low Level Skeleton Library for Communication on GNU/Linux platforms
    Library in C/C++ to interface with Galileo & other Intel platforms, in a structured API with port names/numbering that match compatible boards & with bindings to javascript.

    Steps for installing MRAA & UPM Library on Intel IoT Platform with IoTDevKit Linux* image and an active internet connection
    Using a ssh client: 
    1. echo "src maa-upm http://iotdk.intel.com/repos/1.1/intelgalactic" > /etc/opkg/intel-iotdk.conf
    2. opkg update
    3. opkg upgrade

    Article: https://software.intel.com/en-us/node-js-templates-for-intel-xdk-iot-edition
*/
var mraa = require('mraa');

function myCallback() {
    var d = new Date();
    var time = d.getTime();
    console.log("The time is " + time);
}

var gpio8 = new mraa.Gpio(8); //GPIO Pin 8
// Note: Intel Galileo Gen1, Gen 2 and Intel Edison only supports EDGE_BOTH with mraa javascript implementation.
// EDGE_BOTH means either 0->1 or 1->0 transition
gpio8.isr(mraa.EDGE_BOTH, myCallback);

// this is meant to keep the Node process running continuously while waiting for the interruption
setInterval(function(){
    console.log("I'm alive");
},1000);

console.log("start");
