import {expect} from 'chai';
import Booking from '../src/classes/Booking';
import Customer from '../src/classes/Customer';

describe.only('Customer', function() {
  let customer1, customer2;
  let booking1, booking2;
  beforeEach(() => {
    customer1 = new Customer({
      id: 1,
      name: "Leatha Ullrich"
    })
    customer2 = new Customer({
      id: 2,
      name: "Rocio Schuster"  
    })
    booking1 = new Booking({
      id: "5fwrgu4i7k55hl6t8",
      userID: 1,
      date: "2022/02/05",
      roomNumber: 12,
      roomServiceCharges: []
    })
  })
  it('should be a function', function() {
    expect(Customer).to.be.a('function');
  })

  it('should be an instance of Customer', function() {
    expect(customer1).to.be.an.instanceOf(Customer);
  })
})