'use strict'

var app1 = new Vue({
    el: '#app',

    /** Load external component files
     *  Make sure there is no leading / in the name
     *  To load from the common folder use like: 'common/component-name.vue' */
    components: {
        'my-button' : httpVueLoader('my-button.vue'),

    }, // --- End of components --- //

    data: {
		rack01: {},
		rack02: {}, 
		rack03: {}, 
		rack04: {}, 
		rack05: {}, 
		rack06: {}, 
		rack07: {}, 
		rack08: {}, 
		rack09: {}, 
		rack10: {}, 
		rack11: {}, 
		rack12: {}, 
		rack13: {}, 
		rack14: {}, 
		rack15: {}, 
    }, // --- End of data --- //

    computed: {
    }, // --- End of computed --- //

    methods: {
		// Getting updates from child component $emit back to parents
		updateswitch(obj) {
			console.log('updateswitch',obj.name, obj);

			if ( obj.name == "rack01" ) {
				console.log("rack01");
				this.rack01 = obj; 
				uibuilder.send( { 'topic': '/from-dashboard', 'payload': this.rack01 } )
				uibuilder.send( { 'topic': '/bg/fc/racks/cmds', 
							'payload': "{ name:" + this.rack01.name + ",STATUS:1}" } )
		    	}		
			if ( obj.name == "rack02" ) {
				this.rack02 = obj; 
				uibuilder.send( { 'topic': '/from-dashboard', 'payload': this.rack02 } )
				uibuilder.send( { 'topic': '/bg/fc/racks/cmds', 
							'payload': "{ name:" + this.rack02.name + ",STATUS:1}" } )
			}
			if ( obj.name == "rack03" ) {
				console.log("rack03");
				this.rack03 = obj; 
				uibuilder.send( { 'topic': '/from-dashboard', 'payload': this.rack03 } )
				uibuilder.send( { 'topic': '/bg/fc/racks/cmds', 
							'payload': "{ name:" + this.rack03.name + ",STATUS:1}" } )
			}
			if ( obj.name == "rack04" ) {
				this.rack04 = obj; 
				uibuilder.send( { 'topic': '/from-dashboard', 'payload': this.rack04 } )
				uibuilder.send( { 'topic': '/bg/fc/racks/cmds', 
							'payload': "{ name:" + this.rack04.name + ",STATUS:1}" } )
			}
			if ( obj.name == "rack05" ) {
				this.rack05 = obj; 
				uibuilder.send( { 'topic': '/from-dashboard', 'payload': this.rack05 } )
				uibuilder.send( { 'topic': '/bg/fc/racks/cmds', 
							'payload': "{ name:" + this.rack05.name + ",STATUS:1}" } )
			}
			if ( obj.name == "rack06" ) {
				this.rack06 = obj; 
				uibuilder.send( { 'topic': '/from-dashboard', 'payload': this.rack06 } )
				uibuilder.send( { 'topic': '/bg/fc/racks/cmds', 
							'payload': "{ name:" + this.rack06.name + ",STATUS:1}" } )
			}
			if ( obj.name == "rack07" ) {
				this.rack07 = obj; 
				uibuilder.send( { 'topic': '/from-dashboard', 'payload': this.rack07 } )
				uibuilder.send( { 'topic': '/bg/fc/racks/cmds', 
							'payload': "{ name:" + this.rack07.name + ",STATUS:1}" } )
			}
			if ( obj.name == "rack08" ) {
				this.rack08 = obj; 
				uibuilder.send( { 'topic': '/from-dashboard', 'payload': this.rack08 } )
				uibuilder.send( { 'topic': '/bg/fc/racks/cmds', 
							'payload': "{ name:" + this.rack08.name + ",STATUS:1}" } )
			}
			if ( obj.name == "rack09" ) {
				this.rack09 = obj; 
				uibuilder.send( { 'topic': '/from-dashboard', 'payload': this.rack09 } )
				uibuilder.send( { 'topic': '/bg/fc/racks/cmds', 
							'payload': "{ name:" + this.rack09.name + ",STATUS:1}" } )
			}
			if ( obj.name == "rack10" ) {
				this.rack10 = obj; 
				uibuilder.send( { 'topic': '/from-dashboard', 'payload': this.rack10 } )
				uibuilder.send( { 'topic': '/bg/fc/racks/cmds', 
							'payload': "{ name:" + this.rack10.name + ",STATUS:1}" } )
			}
			if ( obj.name == "rack11" ) {
				this.rack11 = obj; 
				uibuilder.send( { 'topic': '/from-dashboard', 'payload': this.rack11 } )
				uibuilder.send( { 'topic': '/bg/fc/racks/cmds', 
							'payload': "{ name:" + this.rack11.name + ",STATUS:1}" } )
			}
			if ( obj.name == "rack12" ) {
				this.rack12 = obj; 
				uibuilder.send( { 'topic': '/from-dashboard', 'payload': this.rack12 } )
				uibuilder.send( { 'topic': '/bg/fc/racks/cmds', 
							'payload': "{ name:" + this.rack12.name + ",STATUS:1}" } )
			}
			if ( obj.name == "rack13" ) {
				this.rack13 = obj; 
				uibuilder.send( { 'topic': '/from-dashboard', 'payload': this.rack13 } )
				uibuilder.send( { 'topic': '/bg/fc/racks/cmds', 
							'payload': "{ name:" + this.rack13.name + ",STATUS:1}" } )
			}
			if ( obj.name == "rack14" ) {
				this.rack14 = obj; 
				uibuilder.send( { 'topic': '/from-dashboard', 'payload': this.rack14 } )
				uibuilder.send( { 'topic': '/bg/fc/racks/cmds', 
							'payload': "{ name:" + this.rack14.name + ",STATUS:1}" } )
			}
			if ( obj.name == "rack15" ) {
				this.rack15 = obj; 
				uibuilder.send( { 'topic': '/from-dashboard', 'payload': this.rack15 } )
				uibuilder.send( { 'topic': '/bg/fc/racks/cmds', 
							'payload': "{ name:" + this.rack15.name + ",STATUS:1}" } )
			}
				
			} // updateswitch		
		},	// --- End of methods --- //	
		
    mounted: function(){
        // **REQUIRED** Start uibuilder comms with Node-RED @since v2.0.0-dev3
        
		var vm = this
        uibuilder.start()

        // Process new messages from Node-RED
        uibuilder.onChange('msg', function (msg) {
            // We are assuming that msg.payload is an number between 0 and 1

			// Save json into object 
        if (msg.payload.hasOwnProperty('name')) { 

		//console.log('msg ', msg.payload );

		if ( msg.payload.name == 'rack01') {
                	vm.rack01 = msg.payload;
       	}
		if ( msg.payload.name == 'rack02') {
                	vm.rack02 = msg.payload;
       	}
		if ( msg.payload.name == 'rack03') {
                	vm.rack03 = msg.payload;
       	}
		if ( msg.payload.name == 'rack04') {
                	vm.rack04 = msg.payload;
       	}
		if ( msg.payload.name == 'rack05') {
                	vm.rack05 = msg.payload;
       	}
		if ( msg.payload.name == 'rack06') {
                	vm.rack06 = msg.payload;
       	}
       	if ( msg.payload.name == 'rack07') {
                	vm.rack07 = msg.payload;
       	}
       	if ( msg.payload.name == 'rack08') {
       	        	vm.rack08 = msg.payload;
       	}
       	if ( msg.payload.name == 'rack09') {
                	vm.rack09 = msg.payload;
       	}
       	if ( msg.payload.name == 'rack10') {
       		       	vm.rack10 = msg.payload;
       	}
        if ( msg.payload.name == 'rack11') {
                	vm.rack11 = msg.payload;
        }
        if ( msg.payload.name == 'rack12') {
                	vm.rack12 = msg.payload;
        }
        if ( msg.payload.name == 'rack13') {
                	vm.rack13 = msg.payload;
        }
        if ( msg.payload.name == 'rack14') {
                	vm.rack14 = msg.payload;
        }
        if ( msg.payload.name == 'rack15') {
                	vm.rack15 = msg.payload;
        }

        } // have property name
		}) // onChange

		// Send a status upload on load
		uibuilder.send( { 'topic': '/bg/fc/racks/cmds', 'payload': "{HELLO:1}" } );
    } // --- End of mounted hook --- //

}) // --- End of app1 --- //
