import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyARfeM-mdVXKrs0kmUkZaju8An_f0A66-U",
    authDomain: "todomanager-249c4.firebaseapp.com",
    databaseURL: "https://todomanager-249c4.firebaseio.com",
    projectId: "todomanager-249c4",
    storageBucket: "todomanager-249c4.appspot.com",
    messagingSenderId: "729811217171"
};

export const initializeFirebaseApi = () => firebase.initializeApp(config);

export const createUserOnFirebaseAsync = async (email, password) => {
    const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
    return user;
};

export const signOnFirebaseAsync = async (email, password) => {
    const user = await firebase.auth().signInWithEmailAndPassword(email, password);
    return user;
}