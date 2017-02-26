import WeatherModule from './weather'
import WeatherController from './weather.controller';
import WeatherComponent from './weather.component';
import WeatherTemplate from './weather.html';

describe('Weather', () => {
  let $rootScope, makeController;

  beforeEach(window.module(WeatherModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new WeatherController();
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
      expect(WeatherTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = WeatherComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(WeatherTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(WeatherController);
      });
  });
});
