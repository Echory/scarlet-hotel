class Hotel {
  constructor(rooms, bookings) {
    this.rooms = rooms;
    this.bookings = bookings;
    this.roomsAvailable = [];
  }

  getAvailableRooms(date) {
    const bookingsDateAndRoom = this.bookings.filter(booking => {
      return booking.date === date
    }).filter(booking => booking.roomNumber)

    this.roomsAvailable = this.rooms.filter(room =>
        !bookingsDateAndRoom.includes(room.number))

    if(this.roomsAvailable.length > 0) {
      return this.roomsAvailable;
    } else {
      return 'Oh no! We are sorry, there are no rooms available for this date! Please select a new date and try again.'
    }
  }
}

export default Hotel;