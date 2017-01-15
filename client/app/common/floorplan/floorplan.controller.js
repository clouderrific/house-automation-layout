import angular from 'angular';
import Room from './room.model';

class FloorplanController {
  constructor($document, floorplanService) {
    this.$document = $document[0];
    this.floorplanService = floorplanService;
  }
  setCurrentRoom(room) {
    this.floorplanService.currentRoom = room;
  }
}

FloorplanController.$inject = ['$document', 'floorplanService'];

export default FloorplanController;
