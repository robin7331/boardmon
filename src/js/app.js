
var Vue = require('vue');
var _ = require('underscore');

Vue.config.debug = true;

var Header = require('./components/Header.vue');
var Sidemenu = require('./components/Sidemenu.vue');
var Content = require('./components/Content.vue');



new Vue({
	el: 'body',

	components: {
		'bm-header': Header,
		'bm-sidemenu': Sidemenu,
		'bm-content': Content
	},

	data: {
		boards: [
            {
                name: "Raspberry Pi",
                released: "15.02.2016",
                image: "https://cdn-reichelt.de/bilder/web/xxl_ws/A300/RASPBERRY_PI_B_PLUS_02.png",
                features: [
                    "analog_input", 
                    "wifi"                            
                ],
                gpios: 10,
                flash: 128,
                ram: 16,
                link: "https://www.raspberrypi.org/"
            },
            {
                name: "Raspberry Pi",
                released: "15.02.2016",
                image: "https://cdn-reichelt.de/bilder/web/xxl_ws/A300/RASPBERRY_PI_B_PLUS_02.png",
                features: [
                    "analog_input", 
                    "wifi"                            
                ],
                gpios: 4,
                flash: 256,
                ram: 4,
                link: "https://www.raspberrypi.org/"
            },
            {
                name: "Raspberry Pi",
                released: "15.02.2016",
                image: "https://cdn-reichelt.de/bilder/web/xxl_ws/A300/RASPBERRY_PI_B_PLUS_02.png",
                features: [
                    "analog_input", 
                    "wifi"                            
                ],
                gpios: 2,
                flash: 64,
                ram: 8,
                link: "https://www.raspberrypi.org/"
            },
            {
                name: "Raspberry Pi",
                released: "15.02.2016",
                image: "https://cdn-reichelt.de/bilder/web/xxl_ws/A300/RASPBERRY_PI_B_PLUS_02.png",
                features: [
                    "analog_input", 
                    "wifi"                            
                ],
                gpios: 16,
                flash: 512,
                ram: 10,
                link: "https://www.raspberrypi.org/"
            },
            {
                name: "Raspberry Pi",
                released: "15.02.2016",
                image: "https://cdn-reichelt.de/bilder/web/xxl_ws/A300/RASPBERRY_PI_B_PLUS_02.png",
                features: [
                    "analog_input", 
                    "wifi"                            
                ],
                gpios: 0,
                flash: 128,
                ram: 64,
                link: "https://www.raspberrypi.org/"
            }
        ],
        matchingBoards: []
	},

	ready: function() {

		this.query();
	},

    methods: {
        query: function() {

        	var sidemenu = this.$refs.sidemenu;
        	var activeFeatures = sidemenu.getAllActiveFeatures();

        	this.matchingBoards = _.filter(this.boards, function(board) {

        		if (board.gpios < sidemenu.currentGPIOValue) return false;
        		if (board.flash < sidemenu.currentFlashValue) return false;
        		if (board.ram < sidemenu.currentRAMValue) return false;
        		if (_.intersection(board.features, activeFeatures).length < activeFeatures.length) return false;

        		return true;

        	});

        }
    },

    events: {
    	'slider-value-changed' : function() {
    		this.query();
    	},
    	'badge-value-changed' : function() {
    		this.query();
    	},
    }
});


	

    