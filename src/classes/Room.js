class Room {
  constructor(room) {
    this.roomNumber = room.number;
    this.roomType = room.roomType;
    this.bidet = room.bidet;
    this.bedSize = room.bedSize;
    this.costPerNight = room.costPerNight;
    this.isAvailable = true;
    this.datesBooked = [];
  }

  setDatesBooked() {
    
    // will find all booking with same date, room # and type and push that into the dates booked
  }
}


export default Room;