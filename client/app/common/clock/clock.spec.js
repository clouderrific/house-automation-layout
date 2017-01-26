import ClockModule from './clock'
import ClockController from './clock.controller';
import ClockComponent from './clock.component';
import ClockTemplate from './clock.html';

describe('Clock', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ClockModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ClockController();
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
      expect(ClockTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ClockComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ClockTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ClockController);
      });
  });
});
