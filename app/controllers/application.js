import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		goTo(){
			return this.transitionToRoute('factura-nueva');
		}
	}
});
