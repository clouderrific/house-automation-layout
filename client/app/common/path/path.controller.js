class PathController {
  constructor(floorplanService) {
    this.floorplanService = floorplanService;
    this.name = 'path';
  }
  setCurrentRoom(room) {
    this.floorplanService.currentRoom = room;
  }
}

PathController.$inject = ['floorplanService'];

export default PathController;
