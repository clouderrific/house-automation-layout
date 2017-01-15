class Room {
  constructor(data) {
    if (data && data.id) {
      this.data = data;
      return this.parseRoomDetails();
    } else {
      return {};
    }
  }
  parseRoomDetails() {
    let roomDetails = {};
    roomDetails.id = this.data.id;
    let nameSegments = this.data.id.split('-');
    let pos = nameSegments.length;
    while (pos--) {
      if(pos === nameSegments.length-1) {
        roomDetails.roomType = nameSegments[pos];
      } else {
        roomDetails.name = `${nameSegments[pos]} ${(roomDetails.name) ? roomDetails.name : ''}`;
      }
    }
    return roomDetails;
  }
}

export default Room;
