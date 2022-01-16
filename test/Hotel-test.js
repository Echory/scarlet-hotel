import {expect} from 'chai';
import Customer from '../src/classes/Customer';
import Hotel from '../src/classes/Hotel';
import Room from '../src/classes/Room';
import Booking from '../src/classes/Booking';



describe.only('Hotel', function() {
  let rooms, bookings;
  let customer = new Customer({
    id: 1,
    name: "Leatha Ullrich"
  })

  rooms = [
    new Room({
      number: 1,
      roomType: "residential suite",
      bidet: true,
      bedSize: "queen",
      numBeds: 1,
      costPerNight: 358.4
    }),

    new Room({
      number: 2,
      roomType: "suite",
      bidet: false,
      bedSize: "full",
      numBeds: 2,
      costPerNight: 477.38
    }),

    new Room({
      number: 3,
      roomType: "single room",
      bidet: false,
      bedSize: "king",
      numBeds: 1,
      costPerNight: 491.14
    }),
    ]

    bookings = [
      new Booking({
       id: "5fwrgu4i7k55hl6tf",
       userID: 36,
       date: "2022/01/25",
       roomNumber: 2,
       roomServiceCharges: []
      }),
      
      new Booking({
        id: "5fwrgu4i7k55hl6tg",
        userID: 34,
        date: "2022/02/03",
        roomNumber: 17,
        roomServiceCharges: []
      }),

      new Booking({
        id: "5fwrgu4i7k55hl6th",
        userID: 19,
        date: "2022/02/26",
        roomNumber: 15,
        roomServiceCharges: []
      }),

      new Booking({
        id: "5fwrgu4i7k55hl6t8",
        userID: 1,
        date: "2022/02/05",
        roomNumber: 12,
        roomServiceCharges: []
      })
     ]

  let hotel = new Hotel(rooms, bookings)
  
  it('should be a function', function() {
    expect(Hotel).to.be.a('function');
  })

  it('should be an instance of Hotel', function() {
    expect(hotel).to.be.an.instanceOf(Hotel);
  })

  it('should find available rooms', function() {

    hotel.getAvailableRooms("2022/01/25")
    expect(hotel.roomsAvailable.length).to.equal(3)
  })

  it('should return a sorry message when no rooms are avilable', function() {
    
  })
})
