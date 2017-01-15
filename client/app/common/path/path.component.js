import Room from '../floorplan/room.model';
import controller from './path.controller';
import './path.scss';

let pathComponent = (floorplanService) => {
  return {
    restrict: 'E',
    bindings: {},
    controller,
    link: (scope, element) => {
      let roomDetails = new Room(element[0]);
      floorplanService.rooms.push(roomDetails);
      element.on('click', (evt) => {

          scope.$apply(()=>{
            if (evt.type === 'click' && floorplanService.currentRoom.id !== roomDetails.id) {
              floorplanService.currentRoom = roomDetails;
            } else {
              floorplanService.currentRoom = {};
            }
          });
      });
    }
  };
};

pathComponent.$inject = ['floorplanService'];

export default pathComponent;
