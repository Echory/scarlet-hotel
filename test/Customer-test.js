import {expect} from 'chai';
import Booking from '../src/classes/Booking';
import Customer from '../src/classes/Customer';

describe.only('Customer', function() {
  let bookings, myCustomer;

  beforeEach(() => {
    myCustomer = new Customer({
      id: 1,
      name: "Leatha Ullrich"
    })

   bookings = [
      new Booking({
      id: "5fwrgu4i7k55hl6t8",
      userID: 1,
      date: "2022/02/05",
      roomNumber: 12,
      roomServiceCharges: []
    }),
      new Booking({
      id: "5fwrgu4i7k55hl6x8",
      userID: 1,
      date: "2022/01/11",
      roomNumber: 20,
      roomServiceCharges: [],
    }),
      new Booking({
      id: "5fwrgu4i7k55hl6x7",
      userID: 24,
      date: "2022/01/17",
      roomNumber: 4,
      roomServiceCharges: []
    })
   ]
    
  })
  it('should be a function', function() {
    expect(Customer).to.be.a('function');
  })

  it('should be an instance of Customer', function() {
    expect(myCustomer).to.be.an.instanceOf(Customer);
  })

  it('should find matching booking ids', function() {
    myCustomer.setCustomerBookings(bookings);
    expect(myCustomer.bookings.length).to.equal(2)
  })
})