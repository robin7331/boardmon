/**
 * Created by robin on 17.03.16.
 */



var images = {
    'analog_input' : 'Analog_Input.png',
    'analog_output' : 'Analog_Output.png',
    'arduino' : 'Arduino.png',
    'battery' : 'Battery.png',
    'btle' : 'BTLE.png',
    'ethernet' : 'Ethernet.png',
    'gps' : 'GPS.png',
    'mesh_radio' : 'Mesh_Radio.png',
    'tiny_formfactor' : 'Tiny_Formfactor.png',
    'usb' : 'USB.png',
    'voltage_regulator' : 'Voltage_Regulator.png',
    'wifi' : 'Wifi.png',
}

var titles = {
    'analog_input' : 'Analog Input',
    'analog_output' : 'Analog Output',
    'arduino' : 'Arduino',
    'battery' : 'Battery',
    'btle' : 'Bluetooth LE',
    'ethernet' : 'Ethernet',
    'gps' : 'GPS',
    'mesh_radio' : 'Mesh Radio',
    'tiny_formfactor' : 'Tiny Formfactor',
    'usb' : 'USB',
    'voltage_regulator' : 'Voltage Regulator',
    'wifi' : 'WiFi',
}

var blueImageFolder = 'img/icons/blue/';
var whiteImageFolder = 'img/icons/white/';

module.exports = {
    methods: {
        getBadgeImagePath: function(type, whiteImage) {
            var baseFolder = (whiteImage) ? whiteImageFolder : blueImageFolder;
            return baseFolder + images[type];
        },
        getTitleForBadgeType: function(type) {
            return titles[type];
        }
    },

    data: function() {
        return {
            badgeTypes: [
                'analog_input',
                'analog_output',
                'arduino',
                'battery',
                'btle',
                'ethernet',
                'gps',
                'mesh_radio',
                'tiny_formfactor',
                'usb',
                'voltage_regulator',
                'wifi'
            ]
        }
    }
}