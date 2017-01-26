import TileModule from './tile'
import TileController from './tile.controller';
import TileComponent from './tile.component';
import TileTemplate from './tile.html';

describe('Tile', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TileModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TileController();
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
      expect(TileTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TileComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TileTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TileController);
      });
  });
});
