import Entity from './entity.model';

class HomeAssistantService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
    this.baseUrl = 'http://10.5.1.253:8080';
  }
  getStates(overrideCache) {
    return this.$q((resolve, reject )=> {
      if (overrideCache || !Array.isArray(this.entityCollectionCache)) {
        return this.$http.get(`${this.baseUrl}/api/states`).then((response) => {
          let entityCollection = [];
          if (response && response.data && Array.isArray(response.data)) {
            response.data.map(entity => {
              entityCollection.push(new Entity(entity));
            });
            this.entityCollectionCache = entityCollection;
            resolve(entityCollection);
          } else {
            reject(entityCollection);
          }
        });
      } else {
        resolve(this.entityCollectionCache);
      }
    });
  }
  getIndoorTemp(floor) {
    return this.$q((resolve, reject)=>{
      return this.getStates().then((entities)=>{
        if (entities && Array.isArray(entities)) {
          let temp = -1000;
          entities.map((entity) => {
            if (entity && entity.currentTemperature && entity.id === `climate.${floor.toLowerCase()}`) {
              temp = entity.currentTemperature;
            }
          });
          if(temp !== -1000) {
            resolve(temp);
          } else {
            reject();
          }
        }
      });
    });
  }
}

HomeAssistantService.$inject = ['$http', '$q'];

export default HomeAssistantService;
