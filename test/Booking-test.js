import {expect} from 'chai';
import Booking from '../src/classes/Booking';

describe.only('Booking', function() {
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
    expect(Booking).to.be.a('function')
  })

  it('should be an instance of Booking', function() {
    expect(booking1).to.be.an.instanceOf(Booking)
  })

  it('should have an id', function() {
    expect(booking1.id).to.equal("5fwrgu4i7k55hl6sz")
  })

  it('should have a userId', function() {
    expect(booking2.userId).to.equal(43)
  })

  it('should have a booking date', function() {
    expect(booking1.date).to.equal("2022/04/22")
  })

  it('should have a roomNumber', function() {
    expect(booking2.roomNumber).to.equal(24)
  })

  it('should be able to store room service charges', function() {
    expect(booking1.roomServiceCharges).to.deep.equal([])
  })
})