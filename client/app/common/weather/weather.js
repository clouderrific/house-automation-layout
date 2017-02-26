import angular from 'angular';
import uiRouter from 'angular-ui-router';
import weatherComponent from './weather.component';

let weatherModule = angular.module('weather', [
  uiRouter
])
  .config(['$sceDelegateProvider', ($sceDelegateProvider) => {
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'https://api.forecast.io/**'
    ]);
  }])
.component('weather', weatherComponent)

.name;

export default weatherModule;
