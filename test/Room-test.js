import {expect} from 'chai';
import Customer from '../src/classes/Customer';
import Room from '../src/classes/Room';

describe.only('Room', function() {
  let customer;
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

  it('should have a roomNumber', function() {
    expect(room.roomNumber).to.equal(12)
  })

  it('should have a room type', function() {
    expect(room.roomType).to.equal("single room")
  })

  it('should be able to tell if room has a bidet', function() {
    expect(room.bidet).to.equal(false)
  })

  it('should have a bed size', function() {
    expect(room.bedSize).to.equal("twin")
  })

  it('should have a cost per night', function() {
    expect(room.costPerNight).to.equal(172.09)
  })

  it('should be able to tell if room is available', function() {
    expect(room.isAvailable).to.equal(true)
  })
})