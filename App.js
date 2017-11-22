/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {  Platform,  StyleSheet,  Text,  View, Button, TouchableOpacity, Alert} from 'react-native';

export default class App extends Component<{}> {

    constructor() {
        super()

        this.state = {
            backgroundColor1: "white",
            backgroundColor2: "white",
            backgroundColor3: "white",
            backgroundColor4: "white"
        };

    }
    
    render() {
        var boxNme = ["BOX1","BOX2","BOX3","BOX4"];

        return (
            <View style={styles.container}>
                <View style={styles.kairys}>
                    <TouchableOpacity style={styles.mygtukas}
                                      onPress={() => {this.setState({backgroundColor1: "yellow"})}}>
                        <Text style={styles.mygtukoText}>Button1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mygtukas}
                                      onPress={() => {this.setState({backgroundColor2: "orange"})}}>
                        <Text style={styles.mygtukoText}>Button2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mygtukas}
                                      onPress={() => {this.setState({backgroundColor3: "blue"})}}>
                        <Text style={styles.mygtukoText}>Button3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mygtukas}
                                      onPress={() => {this.setState({backgroundColor4: "purple"})}}>
                        <Text style={styles.mygtukoText}>Button4</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.desinys}>
                    <Text style={[styles.box, {backgroundColor: this.state.backgroundColor1}]}>{boxNme[0]}</Text>
                    <Text style={[styles.box, {backgroundColor: this.state.backgroundColor2}]}>{boxNme[1]}</Text>
                    <Text style={[styles.box, {backgroundColor: this.state.backgroundColor3}]}>{boxNme[2]}</Text>
                    <Text style={[styles.box, {backgroundColor: this.state.backgroundColor4}]}>{boxNme[3]}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10,
        flexDirection: 'row',
    },
    mygtukas:{
      marginTop:35,
      borderWidth: 5,
      padding:5,
      marginRight: 25,
      width:150,
      textAlign: 'center',
      fontSize: 26,
      marginLeft: 5,
      borderColor: 'yellow',
      backgroundColor: '#ffffff',
      color: 'black'
    },
    left: {
        height: '100%',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'red',
        paddingTop: "15%",
        paddingBottom: '40%',
    },
    right: {
        height: '100%',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'yellow',
    },
    box: {
        height: 80,
        width: 120,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop:15,
        textAlignVertical: "center"
    },
    button: {
        height: 50,
        width: 150,
        backgroundColor: 'green',
        alignItems: 'center',
        borderWidth: 5,
    },
    buttonText: {
        height: '100%',
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
});