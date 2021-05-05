import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDkl8IVltTM1tj2fjKPje-OuIlkZ43BO1Q',
  authDomain: 'habr-968c2.firebaseapp.com',
  projectId: 'habr-968c2',
  storageBucket: 'habr-968c2.appspot.com',
  messagingSenderId: '908183526503',
  appId: '1:908183526503:web:53416112a1d57e71c1c8c2',
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date().getTime();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("ERROR: can't create a user", error.message);
    }
  }

  return userRef;
};

export const convertUserSnapshotToMap = (users) => {
  const transformedUsers = users.docs.map((doc) => {
    const { displayName, email } = doc.data();
   
    return {
      displayName,
      email,
    };
  });

  return transformedUsers.reduce((accumulator, collection) => {
    accumulator.push(collection);
    return accumulator;
  }, []);
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
