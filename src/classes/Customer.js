class Customer {
  constructor(customer) {
    this.id = customer.id
    this.name = customer.name;
    this.bookings = [];
    this.totalSpent = 0;
  }

  //takes in array of bookings and finds all of the ones that user is assigned to and then pushes is to customer bookings

  setCustomerBookings(bookings) {
    this.bookings = bookings.filter(booking => booking.userId === this.id)
  }

  setTotalSpent(rooms) {
    const roomsBooked = this.bookings.map(booking => booking.roomNumber)

    roomsBooked.forEach(roomBooked => {
      const foundRoom = rooms.find(room => room.roomNumber === roomBooked)
      this.totalSpent += foundRoom.costPerNight
    });
  }

  splitPastAndFutureBookings() {

  }
}




export default Customer;