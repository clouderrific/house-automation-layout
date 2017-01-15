import angular from 'angular';
import weather from './weather.service';

let userModule = angular.module('weather', [])

.service('weatherService', weatherService)

.name;

export default userModule;
