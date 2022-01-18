import {expect} from 'chai';
import Booking from '../src/classes/Booking';
import Customer from '../src/classes/Customer';
import Room from '../src/classes/Room';

describe.only('Customer', function() {
  let bookings, rooms, myCustomer;

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

   rooms = [
    new Room({
      number: 12,
      roomType: "single room",
      bidet: false,
      bedSize: "twin",
      numBeds: 2,
      costPerNight: 172.09
    }),
    new Room({
      number: 20,
      roomType: "residential suite",
      bidet: false,
      bedSize: "queen",
      numBeds: 1,
      costPerNight: 343.95
    }),
    new Room({
      number: 13,
      roomType: "single room",
      bidet: false,
      bedSize: "queen",
      numBeds: 2,
      costPerNight: 423.92
    })
   ]
    
  })
  it('should be a function', function() {
    expect(Customer).to.be.a('function');
  })

  it('should be an instance of Customer', function() {
    expect(myCustomer).to.be.an.instanceOf(Customer);
  })

  it('should have an id', function() {
    expect(myCustomer.id).to.equal(1)
  })

  it('should have a name', function() {
    expect(myCustomer.name).to.equal("Leatha Ullrich")
  })

  it('should have an array of all bookings', function() {
    expect(bookings.length).to.equal(3)
  })

  it('should have a previous bookings array', function() {
    expect(myCustomer.previousBookings.length).to.equal(0)
  })

  it('should have a future bookings array', function() {
    expect(myCustomer.futureBookings.length).to.equal(0)
  })

  it('should have total spent start at 0', function() {
    expect(myCustomer.totalSpent).to.deep.equal(0)
  })

  it('should find matching booking ids', function() {
    myCustomer.setCustomerBookings(bookings);
    expect(myCustomer.allBookings.length).to.equal(2)
  })

  it('should find all previous bookings', function() {
    myCustomer.setCustomerBookings(bookings);
    expect(myCustomer.previousBookings.length).to.equal(0);
  })

  it('should find all future bookings', function() {
    myCustomer.setCustomerBookings(bookings);
    expect(myCustomer.futureBookings.length).to.equal(2);
  })

  it('should calculate total amount spent', function() {
    myCustomer.setCustomerBookings(bookings);

    myCustomer.setTotalSpent(rooms);
    expect(myCustomer.totalSpent).to.deep.equal(516.04)
  })
})