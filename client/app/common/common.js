import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Floorplan from './floorplan/floorplan';
import Path from './path/path';
import FloorMenu from './floor-menu/floor-menu';
import HomeAssistant from './home-assistant/home-assistant';
import Tile from './tile/tile';
import Clock from './clock/clock';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  Floorplan,
  Path,
  FloorMenu,
  HomeAssistant,
  Tile,
  Clock
])

.name;

export default commonModule;
