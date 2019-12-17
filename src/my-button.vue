<template>
  <div>
	
	<h6>Last status :
	{{ this.myrack }} </h6>
	<BR>
	<b-row>
	<b-col align-self="center">
		<b-button  :pressed.sync="toggle1" @click="handleClick1" pill variant="outline-success" size="lg">C1:{{ bool2IO(toggle1) }}</b-button>
		<b-button  :pressed.sync="toggle2" @click="handleClick2" pill variant="outline-success" size="lg">C2:{{ bool2IO(toggle2) }}</b-button>
		<b-button  :pressed.sync="toggle3" @click="handleClick3" pill variant="outline-success" size="lg">C3:{{ bool2IO(toggle3) }}</b-button>
		<b-button  :pressed.sync="toggle7" @click="handleClick7" pill variant="outline-warning" size="lg">F1:{{ bool2IO(toggle7) }}</b-button>
	</b-col>
	<b-col align-self="center">
		<b-button  :pressed.sync="toggle4" @click="handleClick4" pill variant="outline-success" size="lg">C4:{{ bool2IO(toggle4) }}</b-button>
		<b-button  :pressed.sync="toggle5" @click="handleClick5" pill variant="outline-success" size="lg">C5:{{ bool2IO(toggle5) }}</b-button>
		<b-button  :pressed.sync="toggle6" @click="handleClick6" pill variant="outline-success" size="lg">C6:{{ bool2IO(toggle6) }}</b-button>
		<b-button  :pressed.sync="toggle8" @click="handleClick8" pill variant="outline-warning" size="lg">F2:{{ bool2IO(toggle8) }}</b-button>
	</b-col>
	</b-row>

	<b-row>
	<b-col align-self="center">
	<BR><BR>	
	<b-button @click="handleClick9" block pill variant="outline-success" size="lg">Toggle top half</b-button>
	</b-col>

	<b-col align-self="center">
	<BR><BR>	
	<b-button @click="handleClick10" block pill variant="outline-success" size="lg">Toggle bottom half</b-button>
	</b-col>
	</b-row>

	<BR><BR>
	<b-button @click="handleClick11" block pill variant="outline-warning" size="lg">All Toggle</b-button>
<BR><BR>
<h5>Power Usage : Lights: 5A  Fan1: 2A Fan2: 2A</h5>
<h5>Cultiva : </h5>
<h5>Start Time: </h5>
<h5>Stop Time: </h5>
<h5>Transplant Date: </h5>
<h5>Harvest Date: </h5>
<h5>Last cmds : 15th Nov 2019</h5>



 </div>
</template>


<script>
module.exports =  {
	props: {
		myrack: {
			type: Object
		}
	},
	data() {
		return {
	}
},
	computed: {
		toggle1: {
			get() {return this.myrack.L1;},
			set() {this.myrack.L1 = !this.myrack.L1;}
		},	
		toggle2: {
			get() {return this.myrack.L2;},
			set() {this.myrack.L2 = !this.myrack.L2;}
		},	
		toggle3: {
			get() {return this.myrack.L3;},
			set() {this.myrack.L3 = !this.myrack.L3;}
		},	
		toggle4: {
			get() {return this.myrack.L4;},
			set() {this.myrack.L4 = !this.myrack.L4;}
		},	
		toggle5: {
			get() {return this.myrack.L5;},
			set() {this.myrack.L5 = !this.myrack.L5;}
		},	
		toggle6: {
			get() {return this.myrack.L6;},
			set() {this.myrack.L6 = !this.myrack.L6;}
		},	
		toggle7: {
			get() {return this.myrack.F1;},
			set() {this.myrack.F1 = !this.myrack.F1;}
		},	
		toggle8: {
			get() {return this.myrack.F2;},
			set() {this.myrack.F2 = !this.myrack.F2;}
		},	



		}, // end of computed

	methods: {
		bool2IO: function(state) {
			return state ? '1' : '0'	
		},
		handleClick1() {
				console.log("click1",this.toggle1);
				this.myrack.L1 = this.toggle1;
				this.$emit('fromswitch',this.myrack);
		},	
		handleClick2() {
				console.log("click2",this.toggle2);
				this.myrack.L2 = this.toggle2;
				this.$emit('fromswitch',this.myrack);
		},	
		handleClick3() {
				console.log("click3",this.toggle3);
				this.myrack.L3 = this.toggle3;
				this.$emit('fromswitch',this.myrack);
		},
		handleClick4() {
				console.log("click4",this.toggle4);
				this.myrack.L4 = this.toggle4;
				this.$emit('fromswitch',this.myrack);
		},
		handleClick5() {
				console.log("click5",this.toggle5);
				this.myrack.L5 = this.toggle5;
				this.$emit('fromswitch',this.myrack);
		},
		handleClick6() {
				console.log("click6",this.toggle6);
				this.myrack.L6 = this.toggle6;
				this.$emit('fromswitch',this.myrack);
		},
		handleClick7() {
				console.log("click7",this.toggle7);
				this.myrack.F1 = this.toggle7;
				this.$emit('fromswitch',this.myrack);
		},
		handleClick8() {
				console.log("click8",this.toggle8);
				this.myrack.F2 = this.toggle8;
				this.$emit('fromswitch',this.myrack);
		},				 
		handleClick9() {
				this.myrack.L1 = !this.myrack.L1;
				this.myrack.L2 = !this.myrack.L2;
				this.myrack.L3 = !this.myrack.L3;
				// this.myrack.F1 = !this.myrack.F1;
				this.$emit('fromswitch',this.myrack);
		},				 
		handleClick10() {
				this.myrack.L4 = !this.myrack.L4;
				this.myrack.L5 = !this.myrack.L5;
				this.myrack.L6 = !this.myrack.L6;
				// this.myrack.F2 = !this.myrack.F2;
				this.$emit('fromswitch',this.myrack);
		},				 
		handleClick11() {
				this.myrack.L1 = !this.myrack.L1;
				this.myrack.L2 = !this.myrack.L2;
				this.myrack.L3 = !this.myrack.L3;
				//this.myrack.F1 = !this.myrack.F1;
				this.myrack.L4 = !this.myrack.L4;
				this.myrack.L5 = !this.myrack.L5;
				this.myrack.L6 = !this.myrack.L6;
				//this.myrack.F2 = !this.myrack.F2;
				this.$emit('fromswitch',this.myrack);
		},				 
		
	}, // end of methods 

	mounted: function () {
  	},
} // end of exports
</script>

<style scoped>
    b-button {
    	padding-bottom: 5px;
    	padding-top: 10px;
    	letter-spacing: 1px;
		line-height: 10px;
    }
    
    h5 {
        padding-top: 2px;
		padding-bottom: 2px;
        font-family:'Josefin Sans', sans-serif;
        font-size: 20px;
		color: #c6c6c6;
		font-kerning: normal;
		letter-spacing: 1px;
		line-height: 25px;
    }

    h6 {
        padding-top: 10px;
	padding-bottom: 10px;
        font-family:'Josefin Sans', sans-serif;
        font-size: 15px;
		color: #c6c6c6;
		font-kerning: normal;
		letter-spacing: 1px;
		line-height: 18px;
    }

</style>
