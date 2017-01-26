import angular from 'angular';
import uiRouter from 'angular-ui-router';
import clockComponent from './clock.component';

let clockModule = angular.module('clock', [
  uiRouter
])

.component('clock', clockComponent)

.name;

export default clockModule;
