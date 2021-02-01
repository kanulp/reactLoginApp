import React, { Component } from 'react';
import { Button, View, Text,StyleSheet } from 'react-native';

export default class SecondActivity extends Component
{
     static navigationOptions =
     {
        title: 'SecondActivity',
     };
     render()
     {
        return(
           <View style = { styles.MainContainer }>
              <Text style = { styles.TextStyle }> Congratulation, You are logged In. </Text>
           </View>
        );
     }
}
const styles = StyleSheet.create({
    container: {
       paddingTop: 53
    },
    input: {
       margin: 15,
       height: 40,
       padding : 10,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
    submitButton: {
       backgroundColor: '#7a42f4',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    }
 })