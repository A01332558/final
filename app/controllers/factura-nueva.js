import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		guardar(){
	      let factura = this.get('model');
	      factura.save().then(()=>{
	        Ember.RSVP.all( factura.get('conceptos').invoke('save') ).then(()=>
	        {
	          window.swal({
	          	position: 'center',
  				type: 'success',
  				title: '¡Se ha guardado!',
  				showConfirmButton: false,
  				timer: 3000
	          });
	        })        
	      })
	    },
	    nuevoConcepto(){
	      let concepto = this.store.createRecord('concepto', {
	        factura: this.get('model')
	      });
	    },
	    goTo(){
			return this.transitionToRoute('lista-facturas');
		}
	}
});
