import {expect} from 'chai';
import Booking from '../src/classes/Booking';

describe('Booking', function() {
  let booking1, booking2;
  beforeEach(() => {
    booking1 = new Booking({
      id: "5fwrgu4i7k55hl6sz",
      userID: 9,
      date: "2022/04/22",
      roomNumber: 15,
      roomServiceCharges: []
    })

  booking2 = new Booking({
    id: "5fwrgu4i7k55hl6t5",
    userID: 43,
    date: "2022/01/24",
    roomNumber: 24,
    roomServiceCharges: []
    })
  })
  it('should be a function', function() {
    expect(Booking).to.be.a('function');
  })

  it('should be an instance of Booking', function() {
    expect(booking1).to.be.an.instanceOf(Booking);
  })
})