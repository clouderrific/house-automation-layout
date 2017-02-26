import Moment from 'moment';

class ClockController {
  constructor($scope, $timeout, dateFilter) {
    this.$timeout = $timeout;
    this.dateFilter = dateFilter;
    if (!this.format) {
      this.format = 'h:mm:ss';
    }
    $scope.$on('$destroy', () => {
      this.$timeout.cancel(this.timeoutId);
    });
    this.updateLater();
  }
  updateTime() {
    let time = new Moment();
    this.offsetText = this.dateFilter(new Date(), 'a');
    this.date = time.format('dddd[,] MMMM Do YYYY');
    this.time = this.dateFilter(new Date(), this.format);
  }
  updateLater() {
    // save the timeoutId for canceling
    this.timeoutId = this.$timeout(() => {
      this.updateTime(); // update DOM
      this.updateLater(); // schedule another update
    }, 1000);
  }
}

ClockController.$inject = ['$scope', '$timeout', 'dateFilter'];

export default ClockController;
