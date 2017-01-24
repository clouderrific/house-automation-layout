import angular from 'angular';
import homeAssistantService from './home-assistant.service';

let homeAssistant = angular.module('homeAssistant', [])

.service('homeAssistantService', homeAssistantService)

.name;

export default homeAssistant;
