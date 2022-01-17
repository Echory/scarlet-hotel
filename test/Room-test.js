import {expect} from 'chai';
import Customer from '../src/classes/Customer';
import Room from '../src/classes/Room';

describe('Room', function() {
  let customer, bookings;
  let room = new Room({"number": 12,
  "roomType": "single room",
  "bidet": false,
  "bedSize": "twin",
  "numBeds": 2,
  "costPerNight": 172.09})

  beforeEach(() => {
    customer = new Customer({
      id: 1,
      name: "Leatha Ullrich"
    })


  })
  it('should be a function', function() {
    expect(Room).to.be.a('function');
  })

  it('should be an instance of Room', function() {
    expect(room).to.be.an.instanceOf(Room);
  })
})