import angular from 'angular';

class HomeController {
  constructor(floorplanService) {
    this.floorplanService = floorplanService;
    this.floorplanService.toggleFloor('downstairs');
  }
}

HomeController.$inject = ['floorplanService'];

export default HomeController;
