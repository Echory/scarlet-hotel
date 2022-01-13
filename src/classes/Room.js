class Room {
  constructor(room) {
    this.roomNumber = room.number;
    this.roomType = room.roomType;
    this.bidet = room.bidet;
    this.bedSize = room.bedSize;
    this.costPerNight = room.costPerNight;
    this.isAvailable = true;
  }
}


export default Room;