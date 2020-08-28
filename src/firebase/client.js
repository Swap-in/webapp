import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyClhm0v7aLAQyX_RY2xkt54IcGDU7sp4yc',
  authDomain: 'swapin-18b38.firebaseapp.com',
  databaseURL: 'https://swapin-18b38.firebaseio.com',
  projectId: 'swapin-18b38',
  storageBucket: 'swapin-18b38.appspot.com',
  messagingSenderId: '638517801258',
  appId: '1:638517801258:web:ff3ca2db5cbf1665f9ae53',
};

const app = firebase.initializeApp(firebaseConfig)

export default app
