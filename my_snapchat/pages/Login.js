import React,{useState,useEffect} from 'react';
import {View, Text,TextInput,TouchableOpacity,Alert,TouchableWithoutFeedback, Keyboard} from 'react-native';
import styles from './style/LoginStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
const axios = require('axios').default;
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = ({ navigation }) => {
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    useEffect(() => {
        const getToken = async () => {
            let token = await  AsyncStorage.getItem('token');
            if(token != null){
                navigation.navigate('Home');
            }
        }
        getToken();
    },[]);
    
    const goToHome = ()=>{
        if(email != '' && password != ''){
            const patern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            
            if(patern.test(email)){
                let url = "http://snapi.epitech.eu:8000/connection";
                axios.post(url,{
                    email: email,
                    password: password
                })
                .then( async function(response){
                    await AsyncStorage.setItem('token', response.data.data.token);
                    navigation.navigate('Home');
                })
                .catch(function(error){
                    Alert.alert("‼️","Email ou mot de passe incorrect");
                });
            }else{
                Alert.alert("Email incorrect 😒",'Tu dois rentrer un email valide');
            }
        }else{
            Alert.alert("‼️",'Tu dois remplir tous les champs 😤 !');
        }
    }

    return (
        <View style={styles.main}>
            <Icon name="snapchat-ghost" size={80} color="white" />
            <Text style={styles.text}>CONNEXION</Text>
                <View style={styles.form}>
                    <TextInput style={styles.input} placeholder='email'
                        onChangeText={(text) => setEmail(text)}
                    />
                    <TextInput style={styles.input} placeholder='mots de passe' secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <TouchableOpacity style={styles.button} 
                        onPress={() => {goToHome()} }
                    >
                        <Text style={{color:"white"}}>LET'S GO !!!!!</Text>
                    </TouchableOpacity>
                    <Text style={styles.register}
                        onPress={() => navigation.navigate('Register')}>
                    Pas de compte 🤔... ? {"\n"}Tien et si tu t'inscrivais </Text>
                </View>
        </View>
    );
};
export default Login;