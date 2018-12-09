// https://vuex.vuejs.org/en/mutations.html
import _ from 'lodash'
import { set } from 'vue'

export default {
  receiveSensor (state, { sensorName, val: { flowrate } }) {
    const flowRateArray = _.map(flowrate).map(({ flowRate: flow, ...rest }) => ({ flow, ...rest }))

    state.sensors[sensorName] = {
      ...state.sensors[sensorName],
      readings: flowRateArray
    }
  }
}
