import React,{useState} from 'react'
import styles from './style/LoginStyle';
import {View, Text,TextInput,Button,TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import doubleTap from 'react-native-double-tap';
import DoubleClick from 'react-native-double-click';


function register({ navigation, route }) {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const goToLogin = ()=>{

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(email) === false) {
            alert("email incorrect");
            return;
          }

        if(email != '' && password != ''){
            //alert('hello')
            axios.post('http://snapi.epitech.eu:8000/inscription',{'email':email, 'password':password}).then((response) => {
                alert('chacal tu es enregistré');
                navigation.navigate('Login')
            })
            .catch(function (error) {
                if (error.response) {
                  alert('chacal email deja pris');
               navigation.navigate('Login')
                }
            });
            
        }else{
            alert('Tu dois remplir tous les champs 😤 !');
        }
    }



  return (

 <View style={styles.main}>
    <Icon name="snapchat-ghost" size={80} color="white" />
    <Text style={styles.text}>INSCRIPTION</Text>
        <View style={styles.form}>
            <TextInput style={styles.input} placeholder='email'
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput patern style={styles.input} placeholder='mots de passe' secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity style={styles.button} 
                onPress={() => {goToLogin()} }
            >
                <Text style={{color:"white"}}>LET'S GO !!!!!</Text>
            </TouchableOpacity>
            <Text style={styles.register}
                onPress={() => navigation.navigate('Login')}>
            déja inscrit 🤔... ? {"\n"}Tien et si tu te connecter </Text>
        </View>



        <DoubleClick
          singleTap={() => {
            console.log("single tap");
          }}
          doubleTap={() => {
            console.log("double tap");
          }}
          delay={200}
        >
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </DoubleClick>
</View>
  )
}

export default register