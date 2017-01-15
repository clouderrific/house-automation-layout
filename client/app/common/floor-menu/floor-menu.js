import angular from 'angular';
import uiRouter from 'angular-ui-router';
import floorMenuComponent from './floor-menu.component';

let floorMenuModule = angular.module('floor-menu', [
  uiRouter
])

.component('floormenu', floorMenuComponent)

.name;

export default floorMenuModule;
