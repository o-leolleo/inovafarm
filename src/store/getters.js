// https://vuex.vuejs.org/en/getters.html
import _ from 'lodash'

export default {
  getSensorById (state) {
    return sensorId => _.filter(state.sensors, ['id', sensorId])[0]
  },

  flowById (state) {
    return sensorId => _.last(_.find(state.sensors, ['id', sensorId]).readings)
  },

  flow (state, getters) {
    const flowById = getters.flowById

    return _.reduce(
      state.sensors,
      (acc, curr) => acc || flowById(curr.id),
      false
    )
  }
}
