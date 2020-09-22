import React, { useState } from 'react'
import Styles from './Styles.js';
import Button from '@material-ui/core/Button';
import firebase from "firebase/app";
import "firebase/auth";

function FacebookAuthentication(props) {
  const classes = Styles();

  function handleLogin() {
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          console.log(user);
          // ...
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
    }
  return (
    <div>
      <Button onClick={this.handleLogin} name="submit" type="submit">
        Use Facebook
      </Button>
    </div>
  );
}
export default FacebookAuthentication;
