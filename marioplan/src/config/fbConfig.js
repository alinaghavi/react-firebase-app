import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyCjttuwnod6aCsrJdyTENHPhOUgM5dk3lM",
    authDomain: "marioplan-252e1.firebaseapp.com",
    databaseURL: "https://marioplan-252e1.firebaseio.com",
    projectId: "marioplan-252e1",
    storageBucket: "",
    messagingSenderId: "151396897971",
    appId: "1:151396897971:web:e3777fd5a42beffe"
};

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;