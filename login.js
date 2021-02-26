import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import axios from 'axios'

class LoginActivity extends Component {
  state = {
    email: '',
    password: ''
 }
 
 handleEmail = (text) => {
    this.setState({ email: text })
 }
 handlePassword = (text) => {
    this.setState({ password: text })
 }
//  login = (email, pass) => {
//     //alert('email: ' + email + ' password: ' + pass)
//       //axios.post('http://localhost:4000/user/login',{
//       axios.post('http://192.168.0.21:4000/user/login',{
//          email: email,
//          password: pass
//          },
//          {
//             headers: {
//                 //'Content-Type': 'application/json'
//                 'Content-Type': 'multipart/form-data'
//             }
//          })
//          .then(res => {
//             const {navigate} = this.props.navigation;

//             console.log("Server Data : "+res.data);
//             console.log("token Data : "+res.data.token);
//             if(res.data.token==""){
//                alert('Wrong Credentials, please try again');

//             }
//             else if(res.data.message!=null){
//                alert(res.data.message);
//             }
//             else{
//             //this.setState({ token: res.token });
//             let tok = res.data.token;
//             navigate('Home', { email: email,token:tok })
//             }

//          }, (error) => {
//            console.log(error);
//          });
//  }
 nfcButton = ()=>{
   const {navigate} = this.props.navigation;
   navigate('NFC', {  })
 }
 nfcWriteButton = ()=>{
   const {navigate} = this.props.navigation;
   navigate('NFC2', {  })
 }


 render() {
    return (
       <View style = {styles.container}>
          <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "Email"
             placeholderTextColor = "#9a73ef"
             autoCapitalize = "none"
             onChangeText = {this.handleEmail}/>
          
          <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "Password"
             placeholderTextColor = "#9a73ef"
             autoCapitalize = "none"
             onChangeText = {this.handlePassword}/>
          
          <TouchableOpacity
             style = {styles.submitButton}
             //onPress = {
                //() => this.login(this.state.email, this.state.password)
             //}
             >
             <Text style = {styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
          <TouchableOpacity
             style = {styles.submitButton}
             onPress = {
                () => this.nfcButton()
             }>
             <Text style = {styles.submitButtonText}> NFC Read</Text>
          </TouchableOpacity>
          <TouchableOpacity
             style = {styles.submitButton}
             onPress = {
                () => this.nfcWriteButton()
             }>
             <Text style = {styles.submitButtonText}> NFC Write</Text>
          </TouchableOpacity>
       </View>
    )
 }
}
export default LoginActivity

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