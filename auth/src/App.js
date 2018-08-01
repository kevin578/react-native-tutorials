import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header, Button, Spinner } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = {
    loggedIn: null
  };

  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAbQ1Uo8rCHZ6pIgcx6NA4FCfQJ7sN0tDU",
      authDomain: "auth-61fd8.firebaseapp.com",
      databaseURL: "https://auth-61fd8.firebaseio.com",
      projectId: "auth-61fd8",
      storageBucket: "auth-61fd8.appspot.com",
      messagingSenderId: "526578912064"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={styles.logOutButtonStyle}>
            <Button onPress={()=>firebase.auth().signOut()}>Log out</Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={styles.loaderStye}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

styles = {
  logOutButtonStyle: {
    height: 40,
    marginTop: 20
  },
  loaderStye: {
    marginTop: 70
  }
};

export default App;
