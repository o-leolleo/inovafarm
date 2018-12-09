// https://vuex.vuejs.org/en/getters.html
import _ from 'lodash'

export default {
  getSensorById (state) {
    return sensorId => _.filter(state.sensors, ['id', sensorId])[0]
  }
}
