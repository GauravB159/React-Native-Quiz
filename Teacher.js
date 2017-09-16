import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';


export default class Teacher extends React.Component {
   static navigationOptions = ({navigation}) => {
    return{
      title: 'Welcome ${{navigation.state.params.screen}}',
    }
  };		
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <View>
        <TouchableOpacity onPress={()=> this.props.navigation.goBack() }>
          <Text>Go to Student Page</Text>
        </TouchableOpacity>
      </View>
    );
  }
}