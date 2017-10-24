/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flexBox1}>
        <View style={styles.containerTwo}>
        <TouchableOpacity>
            <Text style = {styles.textButton}> Button1 </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style = {styles.textButton}> Button2 </Text>
          </TouchableOpacity>
          </View>
          <View style={styles.containerThree}>
          <TouchableOpacity>
            <Text style = {styles.textButton}> Button3 </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style = {styles.textButton}> Button4</Text>
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.flexBox2}>
            <Text style = {styles.text1}> textOne </Text>
            <Text style = {styles.text2}> textOne1 </Text>
            <Text style = {styles.text3}> textOne2 </Text>
            <Text style = {styles.text4}> textOne3 </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
  },
  containerTwo: {
    flex:2,
    flexDirection: 'row',
  },
  containerThree: {
    flex:2,
    flexDirection: 'row',
  },
  flexBox1: {
    flex: 1,
    backgroundColor: '#666666',
    justifyContent: 'space-around'//between
  },
 
  flexBox2: {
    flex:1,
    backgroundColor:'#4286f4',
  },
  textButton:{
    marginTop:5,
    borderWidth: 6,
    padding:5,
    width:150,
    textAlign: 'center',
    fontSize: 26,
    marginLeft: 20,
    borderColor: 'yellow',
    backgroundColor: '#ffffff',
    color: 'black'
  },
  text1:{
    marginTop:10,
    borderWidth: 6,
    padding:5,
    width:150,
    textAlign: 'center',
    fontSize: 26,
    marginLeft: 95,
    borderColor: 'yellow',
    color: '#f441ee'
  },
  text2:{
    marginTop:10,
    borderWidth: 6,
    padding:5,
    width:150,
    textAlign: 'center',
    fontSize: 26,
    marginLeft: 95,
    borderColor: 'yellow',
    color: '#2bb1ff'
  },
  text3:{
    marginTop:10,
    borderWidth: 6,
    padding:5,
    width:150,
    textAlign: 'center',
    fontSize: 26,
    marginLeft: 95,
    borderColor: 'yellow',
    color: '#2aff6e'
  },
  text4:{
    marginTop:10,
    borderWidth: 6,
    padding:5,
    width:150,
    textAlign: 'center',
    fontSize: 26,
    marginLeft: 95,
    borderColor: 'yellow',
    color: '#2856ff'
  }
  
});
