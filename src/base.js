import firebase from "firebase/app";
import database from "firebase/database";
import "firebase/auth"; //pulling in the auth service here
import Rebase from "re-base";

var app = firebase.initializeApp({
  //apiKey: "AIzaSyDYxNotP1yz0UyEIYhkYFh4IfieqQ453Xw",
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  //authDomain: "reading-list-cd977.firebaseapp.com",
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  //databaseURL: "https://reading-list-cd977.firebaseio.com"
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL
});

/* var app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL
}); */

var base = Rebase.createClass(app.database());

export const provider = new firebase.auth.GithubAuthProvider();
export const auth = firebase.auth();

export default base;