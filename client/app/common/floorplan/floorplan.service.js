let floorplanService = () => {
  return {
    floor: 'downstairs',
    currentRoom: {},
    rooms: [],
    toggleFloor: function(floor) {
      if (floor) {
        this.floor = floor
      } else {
        this.floor = (this.floor === 'downstairs') ? 'upstairs' : 'downstairs';
      }
    }
  };
};

export default floorplanService;
