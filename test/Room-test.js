import {expect} from 'chai';
import Room from '../src/classes/Room';

describe('Room', function() {
  let rooms, bookings;
  beforeEach(() => {


    rooms [
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
    })
  ]
  })
  it('should be a function', function() {
    expect(Room).to.be.a('function');
  })

  it('should be an instance of Booking', function() {
    expect(room1).to.be.an.instanceOf(Room);
  })

  it('should find all dates booked save them', function() {

  })
})