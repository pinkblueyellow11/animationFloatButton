import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import FloatingButton from './FloatingButton';

export default class App extends Component {

  render() {

    return (
      <View style={styles.container}>
        <FloatingButton />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
  }
});

