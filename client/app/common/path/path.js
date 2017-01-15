import angular from 'angular';
import uiRouter from 'angular-ui-router';
import pathComponent from './path.component';

let pathModule = angular.module('path', [])

.directive('path', pathComponent)

.name;

export default pathModule;
