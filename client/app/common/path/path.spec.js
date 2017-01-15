import PathModule from './path'
import PathController from './path.controller';
import PathComponent from './path.component';
import PathTemplate from './path.html';

describe('Path', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PathModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PathController();
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
      expect(PathTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PathComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PathTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PathController);
      });
  });
});
