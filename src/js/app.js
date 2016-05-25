
var Vue = require('vue');
var _ = require('underscore');
var firebase = require('firebase');

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
		boards: [],
		matchingBoards: []
	},

	ready: function() {

		var config = {
			apiKey: "AIzaSyCbQKsvP7YycJY-YdiodmxmFSr1gCuTjdk",
			authDomain: "project-6186819983200980107.firebaseapp.com",
			databaseURL: "https://project-6186819983200980107.firebaseio.com",
			storageBucket: "project-6186819983200980107.appspot.com",
			};
		firebase.initializeApp(config);

		var that = this;
		firebase.database().ref('/boards/').once('value').then(function(snapshot) {
			  that.boards = snapshot.val();
			  that.query();
		});


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
