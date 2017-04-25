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
    
    moivesArr=this.props.response.data.movies;
    stringArr=moivesArr;
    
    for(k=0;k<moivesArr.length;k++){
      stringArr[k]=moivesArr[k].title;
    }
    
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(stringArr)
    };
  }
  
  render() {
    return(
    <View style={{flex: 1, paddingTop: 22}}>
    <ListView
      dataSource={this.state.dataSource}
      renderRow={(rowData) => <Text>{rowData}</Text>}
    />
      </View>
    );
  }
  
}