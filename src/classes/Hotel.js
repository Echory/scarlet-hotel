import Customer from "./Customer";

class Hotel {
  constructor(rooms, bookings) {
    this.rooms = rooms;
    this.bookings = bookings;
    this.roomsAvailable = [];
    this.newBookingInfo;
  }

  getAvailableRooms(date) {
    const bookingsDateAndRoom = this.bookings.filter(booking => {
      return booking.date === date
    }).map(booking => booking.roomNumber)

    this.roomsAvailable = this.rooms.filter(room =>
        !bookingsDateAndRoom.includes(room.roomNumber))

    if(this.roomsAvailable.length > 0) {
      return this.roomsAvailable;
    } else {
      return 'Oh no! We are sorry, there are no rooms available for this date! Please select a new date and try again.'
    }
  }

  getRoomsByTypeAndDate(date, type) {
    this.getAvailableRooms(date);
    let roomsByType = this.roomsAvailable.filter(room => room.roomType === type);
    return this.roomsAvailable = roomsByType;
  }

  formatBookingInfo(userID, date, roomNumber) {
    const newBooking = {
      userID: userID.id,
      date: date,
      roomNumber: Number(roomNumber)
    }
    this.newBookingInfo = newBooking
  }
}

export default Hotel;