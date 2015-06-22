ISR - Interrupt Service Routine
============================
A simple node.js application that demonstrates how to call an ISR when an interrupt occurs.

An interrupt service routine (ISR) is a software routine that hardware invokes in response to an interrupt. ISRs examine an interrupt and determine how to handle it. ISRs handle the interrupt, and then return a logical interrupt value.

First, you need to identify the desired GPIO pin being observed to trigger an interrupt if the pin is low, high or changed. Besides the trigger, you will need to declare a function to call when the interrupt occurs.

```javascript
var m = require('mraa');
var x = new m.Gpio(14); //GPIO Pin 14
x.isr(mode, function(){}); //mode = m.EDGE_BOTH, m.EDGE_RISING, m.EDGE_NONE, or m.EDGE_FALLING
```


###Intel(R) Edison
In regards to Intel(R) Edison, all GPIO inputs on the Edison platform are interrupt-capable, and all interrupt types are supported on all inputs. libmraa is required in order to get started. 

###Intel(R) Galileo
**Note:** Galileo Gen1 only supports EDGE_BOTH.


For more information on a GPIO pin Guide, visit http://www.emutexlabs.com/project/215-intel-edison-gpio-pin-multiplexing-guide.

Intel(R) XDK 
-------------------------------------------
This template is part of the Intel(R) XDK IoT Edition. 
Download the Intel(R) XDK at http://software.intel.com/en-us/html5. To see the technical details of the sample, 
please visit the sample article page at TBA.

Important App Files
---------------------------
* main.js
* package.json
* README.md

mraa
--------------------------------------------
* Included on the IoTDevkit Linux Image
- Edison 	(https://software.intel.com/iot/hardware/edison/downloads)
- Galileo 	(https://software.intel.com/iot/hardware/galileo/downloads)

* source:  https://github.com/intel-iot-devkit/mraa
* license:  https://github.com/intel-iot-devkit/mraa/blob/9d488c8e869e59e1dff2c68218a8f38e9b959cd7/cmake/modules/LICENSE_1_0.txt
