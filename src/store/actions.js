// https://vuex.vuejs.org/en/actions.html
import firebase from '@/utils/firebase'

export default {
  fetchSensor ({ commit }, sensorName) {
    console.log(sensorName)
    firebase.database().ref(sensorName)
      .on('value',
        (snapshot) => {
          commit('receiveSensor', { sensorName, val: snapshot.val() })
        },

        (err) => console.error(err)
      )
  }
}
