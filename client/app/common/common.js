import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Floorplan from './floorplan/floorplan';
import Path from './path/path';
import FloorMenu from './floor-menu/floor-menu';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  Floorplan,
  Path,
  FloorMenu
])

.name;

export default commonModule;
