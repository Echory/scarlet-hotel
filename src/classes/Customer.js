class Customer {
  constructor(customer) {
    this.id = customer.id;
    this.name = customer.name;
    this.allBookings = [];
    this.previousBookings = [];
    this.futureBookings = [];
    this.totalSpent = 0;
  }

  setCustomerBookings(bookings) {
    this.allBookings = bookings.filter(booking => booking.userId === this.id)
    
    let todaysDate = new Date();
    todaysDate = todaysDate.toISOString().split('T')[0]

    this.previousBookings = this.allBookings.filter(booking => booking.date < todaysDate)

    this.futureBookings = this.allBookings.filter(booking => booking.date >= todaysDate)
    debugger
  }

  setTotalSpent(rooms) {
    const roomsBooked = this.allBookings.map(booking => booking.roomNumber)

    roomsBooked.forEach(roomBooked => {
      const foundRoom = rooms.find(room => room.roomNumber === roomBooked)
      this.totalSpent += foundRoom.costPerNight
    });
  }
}




export default Customer;