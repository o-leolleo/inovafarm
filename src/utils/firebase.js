import firebase from 'firebase'

export const config = {
  apiKey: "AIzaSyC6h2tKVluciekxZyoOepJNd03jVIYNgKA",
  authDomain: "flowsensor-bfbed.firebaseapp.com",
  databaseURL: "https://flowsensor-bfbed.firebaseio.com",
  projectId: "flowsensor-bfbed",
  storageBucket: "flowsensor-bfbed.appspot.com",
  messagingSenderId: "529363595938"
}

let firebaseApp;

if (firebase.apps && firebase.apps.length > 0) {
  firebaseApp = firebase.apps[0]
} else {
  firebaseApp = firebase.initializeApp(config);
}

export default firebaseApp;
// export const nodesRef = firebase.database().ref('NODE1')
