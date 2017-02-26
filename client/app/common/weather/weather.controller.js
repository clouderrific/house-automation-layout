import Moment from 'moment';

class WeatherController {
  constructor($http, $interval) {
    this.$http = $http;
    this.cachedResponse = false;
    this.icon = '';
    this.apiKey = '12007aa00bea21e0c8f9c65e26dd8194';
    this.coordinates = '33.1916768,-96.7761042';
    this.url = `https://api.forecast.io/forecast/${this.apiKey}/${this.coordinates}`;
    this.fetchWeather();
    $interval(() => {
      this.fetchWeather();
    }, 900000)
  }
  fetchWeather() {

    if (this.weather === undefined) {
      this.$http.jsonp(this.url, {jsonpCallbackParam: 'callback', data: { units: 'auto' }}).then((response) => {
        this.lastRequested = new Moment();
        if (response && response.data && response.data.currently) {
          this.weather = response.data.currently;
          // Icon Data
          let iconArray = response.data.currently.icon.split('-');
          iconArray.map((icon) => {
            // Translation
            switch (icon) {
              case 'day':
                icon = 'sun';
                break;
              case 'night':
                icon = 'moon';
                break;
              case 'cloudy':
                icon = 'cloud';
                break;
            }
            this.icon = `${this.icon} ${icon}`;
          });
        }
      });
    }
  }
}

WeatherController.$inject = ['$http', '$interval'];
export default WeatherController;
