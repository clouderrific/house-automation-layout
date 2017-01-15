class FloorMenuController {
  constructor(floorplanService) {
    this.floorplanService = floorplanService;
    this.floors = ['downstairs', 'upstairs'];
  }
  toggleFloor(floor){
    this.floorplanService.toggleFloor(floor);
  }
}

FloorMenuController.$inject = ['floorplanService'];

export default FloorMenuController;
