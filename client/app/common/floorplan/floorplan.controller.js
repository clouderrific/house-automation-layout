import angular from 'angular';
import Room from './room.model';

class FloorplanController {
  constructor($document, floorplanService, homeAssistantService) {
    this.$document = $document[0];
    this.floorplanService = floorplanService;
    this.homeAssistantService = homeAssistantService;
    homeAssistantService.getStates().then((data) => {
      console.log(data);
    });
  }
  setCurrentRoom(room) {
    this.floorplanService.currentRoom = room;
  }
}

FloorplanController.$inject = ['$document', 'floorplanService', 'homeAssistantService'];

export default FloorplanController;
