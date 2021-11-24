
 const reservas = [
   {
     tipoHabitacion: "standard",
     pax: 1,
     noches: 3
   },
   {
     tipoHabitacion: "standard",
     pax: 1,
     noches: 4
   },
   {
     tipoHabitacion: "suite",
     pax: 2,
     noches: 1
   }
 ];


 /* Caso 1 */
class Reservation {
   constructor () {
   this.reservas = []; 
    this.IVA = 1.21; 


   this.calculate = () =>  {
      var subtotal = 0; 
     
      const roomTypes = {
      
        standard: 100,
        suite: 150
      }
      

      for (let i = 0; i < this.reservas.length; i++) {
         subtotal = subtotal + (this.reservas[i].noches * ((this.reservas[i].pax -1) * 40 + roomTypes[this.reservas[i].tipoHabitacion]))
      }
      console.log('Subtotal price of the reservations including quantity of people is ' + subtotal)
      console.log('Total price with IVA is ' + Math.round(subtotal * this.IVA * 100) / 100); 
   }

}
}

const myReservation = new Reservation(); 
myReservation.reservas = reservas; 
myReservation.calculate();


/* Caso 2  */

class TourOperatorReservation extends Reservation {
   constructor() { 
      super()

      this.calculationForTourOperator = () =>  {
         var subtotal = 0; 
         var discount = 0.15; 
         var pricePerNight = 100; 
         
         
   
         for (let i = 0; i < this.reservas.length; i++) {
            subtotal = subtotal + (this.reservas[i].noches * pricePerNight);
         }


        
         console.log('Tour operator price without additional discount is ' + Math.round(subtotal * this.IVA * 100) / 100); 
         console.log('Tour operator price with discount of 15% is ' + Math.round(subtotal * this.IVA * 100 * (1 - discount)) / 100 );
      }
   
   }
   }

const myTourOperatorReservation = new TourOperatorReservation(); 
myTourOperatorReservation.reservas = reservas; 
myTourOperatorReservation.calculationForTourOperator();




