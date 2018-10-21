import firebase from 'firebase';

export default class Firebase {
  constructor() {
    firebase.initializeApp({
      apiKey: "AIzaSyByA5zDK2EjVwrEcxPmpvPqd7syM0yRR9g",
      authDomain: "summa-7f5a4.firebaseapp.com",
      databaseURL: "https://summa-7f5a4.firebaseio.com",
      projectId: "summa-7f5a4",
      storageBucket: "summa-7f5a4.appspot.com",
      messagingSenderId: "201780012152"
    });

    const firestore = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    firestore.settings(settings);

    this.state = {};

    this.state.storage = firebase.storage().ref();
    this.state.db = firestore.collection('users');

    this.signin = this.signin.bind(this);
    this.signout = this.signout.bind(this);
    this.newNote = this.newNote.bind(this);
  }
  signin() {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(res => {
      let id = res.user.uid;
      let name = res.user.displayName;
      this.state.id = id;
      this.state.name = name;

      this.state.db.doc(id).get().then(snap => {
        if (snap.exists) { // previous user
          alert(`Welcome back ${name}!`);
          this.state.db.doc(id).collection('notes').get().then(snap => {
            console.log(snap);
          });
        }
        else { // new user
          this.state.db.doc(id).set({
            id,
            name
          });
        }
      });
    });
  }
  signout() { }

  newNote(aud, title) { // id = user id | time = identification | aud = blob
    let time = new Date().getTime().toString();
    console.log(typeof time);

    this.state.storage.child(`${this.state.id}/${time}.wav`).put(aud).then(snapshot => {
      console.log('Uploaded the audio!');
    });

    this.state.db.doc(this.state.id).collection('notes').doc(time).set({
      title
    });
  }
}
