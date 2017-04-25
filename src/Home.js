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
  ListView,
}
from 'react-native';

export default class Home extends Component {
  
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.response.data.movies)
    };
  }
  
  renderRow(rowData) {
    return <Text style={{ color: 'red', fontWeight: 'bold', marginHorizontal: 10, fontSize: 20 }}>{rowData.title}</Text>
  }
  
  render() {
    return(
    <View style={{flex: 1, paddingTop: 22}}>
    <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderRow.bind(this)}
    />
      </View>
    );
  }
  
}