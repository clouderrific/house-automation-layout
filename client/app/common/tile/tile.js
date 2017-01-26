import angular from 'angular';
import uiRouter from 'angular-ui-router';
import tileComponent from './tile.component';

let tileModule = angular.module('tile', [
  uiRouter
])

.component('tile', tileComponent)

.name;

export default tileModule;
