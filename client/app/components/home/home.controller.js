import angular from 'angular';

class HomeController {
  constructor(floorplanService) {
    this.floorplanService = floorplanService;
    console.log(floorplanService)
  }
}

HomeController.$inject = ['floorplanService'];

export default HomeController;
