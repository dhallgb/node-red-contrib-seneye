# Read from a Seneye USB device
This is a simple NodeRED node to read from a Seneye (https://www.seneye.com) and output a javascript object with the measurement values.

## Requirements
- needs libusb installed with `sudo apt install libusb-1.0-0 libusb-1.0-0-dev`
- node-hid installed using `sudo npm install -g node-hid`
- normally USB devices are owned by root and in order to read them as a normal user, you need to add rules to /etc/udev/rules.d and trigger these new rules
	- add the file 10-local.rules to /etc/udev/rules.d/
	- add the user who will run NodeRED to the __plugdev__ group `sudo usermod -a -G plugdev userid`
	- trigger the new rules using `sudo udevadm control --reload-rules`

## Usage
- install using your normal NodeRED installation command into your custom nodes directories
- if no device id is specified it will read from the first Seneye device found
- pipe the payload into whatever you need, such as a JSON converter then a MQTT output node to a public MQTT broker
- display on a public dashboard such as Crouton http://crouton.mybluemix.net/crouton/gettingStarted