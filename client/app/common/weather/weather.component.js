import template from './weather.html';
import controller from './weather.controller';
import './weather.scss';

let weatherComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default weatherComponent;
