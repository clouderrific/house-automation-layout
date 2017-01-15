import FloorplanModule from './floorplan'
import FloorplanController from './floorplan.controller';
import FloorplanComponent from './floorplan.component';
import FloorplanTemplate from './floorplan.html';

describe('Floorplan', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FloorplanModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new FloorplanController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(FloorplanTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = FloorplanComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(FloorplanTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(FloorplanController);
      });
  });
});
