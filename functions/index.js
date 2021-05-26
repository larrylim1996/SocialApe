const functions = require('firebase-functions');

const app = require('express')();

const FBAuth = require('./util/fbAuth');

const { getAllScreams, postOneScream,getScream } = require('./handlers/screams')
const {signup, login, uploadImage, addUserDetails, getAuthenticatedUser} = require('./handlers/users')


//Scream route
app.get('/screams', getAllScreams);
app.post('/scream', FBAuth, postOneScream);
app.get('/scream/:screamId', getScream);

//TODO
//Delete scream
//Like a scream
//Unlike a scream
//Comment on scream


//Users route
app.post('/signup',signup);
app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage);
app.post('/user', FBAuth, addUserDetails);
app.get('/user',FBAuth, getAuthenticatedUser);


//Signup route

/*
  firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then(data=>{
      return res.status(201).json({message: `user ${data.user.uid} signed up successfully`});
    })
    .catch(err=>{
      console.error(err);
      return res.status(500).json({error: err.code});
    });



    */





// https://baseurl.com/api/
// exports.api = functions.region('europe-west1').https.onRequest(app); to change region
  exports.api = functions.https.onRequest(app);
  