import angular from 'angular';
import uiRouter from 'angular-ui-router';
import floorplanComponent from './floorplan.component';
import floorplanService from './floorplan.service';

let floorplanModule = angular.module('floorplan', [
  uiRouter
])
.service('floorplanService', floorplanService)
.component('floorplan', floorplanComponent)
.name;

export default floorplanModule;
