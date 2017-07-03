# Read from a Seneye USB device
This is a simple NodeRED node to read from a Seneye (https://www.seneye.com) and output a javascript object with the measurement values.

## Usage
- install using your normal NodeRED installation command into your custom nodes directories
- configure (is any needed?)
- pipe the payload into whatever you need, such as a JSON converter then a MQTT output node to a public MQTT broker