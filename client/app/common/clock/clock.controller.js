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
    this.offsetText = this.dateFilter(new Date(), 'a');
    this.date = this.dateFilter(new Date(), 'M/d/yy');
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
