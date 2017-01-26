import template from './tile.html';
import controller from './tile.controller';
import './tile.scss';

let tileComponent = {
  restrict: 'E',
  bindings: {
    title: '@',
    message: '@',
    offsetText: '@',
    size: '@'
  },
  template,
  controller
};

export default tileComponent;
