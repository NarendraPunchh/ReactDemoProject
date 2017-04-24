import React, {
  Component
}
from 'react';
import {
  AppRegistry,
  View,
  Navigator,
}
from 'react-native';
import Splash from './Splash';
import Login from './Login';
import Home from './Home';

export default class MainComponent extends Component {


  constructor(props) {
    super(props);
    this.state = { scene: 'Splash' };
    setTimeout(() => {
      this.setState({scene: 'Login'})
    }, 2000);
  }
  
  render() {
    switch (this.state.scene) {
      case 'Splash':
        return Splash;
      case 'Login':
        return Login;
      case 'Home':
        return Home;
    }
  }

}
