import React, {
  Component
}
from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  StackNavigator,
  ActivityIndicator,
  List,
}
from 'react-native';

export default class Home extends Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (<View><Text>{this.props.response.data.title}</Text></View>
    );
  }
  
}