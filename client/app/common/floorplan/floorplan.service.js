let floorplanService = (homeAssistantService) => {
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

      homeAssistantService.getIndoorTemp(this.floor).then(temp => {
         this.currentTemperature = temp;
      })
    }
  };
};

floorplanService.$inject = ['homeAssistantService'];

export default floorplanService;
