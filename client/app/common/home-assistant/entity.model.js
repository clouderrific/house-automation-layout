class Entity {
  constructor(data) {
    if (data) {
      this.state = data.state;
      this.id = data.entity_id;
      this.name = data.attributes.friendly_name;
      this.lastChanged = data.last_changed;
      this.lastUpdated = data.last_updated;
      this.currentTemperature = data.attributes.current_temperature;
    }
  }
}

export default Entity;
