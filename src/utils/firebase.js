
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC6h2tKVluciekxZyoOepJNd03jVIYNgKA",
  authDomain: "flowsensor-bfbed.firebaseapp.com",
  databaseURL: "https://flowsensor-bfbed.firebaseio.com",
  projectId: "flowsensor-bfbed",
  storageBucket: "flowsensor-bfbed.appspot.com",
  messagingSenderId: "529363595938"
}

firebase.initializeApp(config);

export const nodesRef = firebase.database().ref('NODE1')