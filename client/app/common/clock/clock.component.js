import template from './clock.html';
import controller from './clock.controller';
import './clock.scss';

let clockComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default clockComponent;
