import React, {useEffect,useState} from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import styles from './style/ReceivedStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


function RenderSnap({ navigation, route }) {

    const { image, duration, id} = route.params;

    let [snap, setSnap] = useState([])

    

  

    const Delete = async () => {
   let token = await AsyncStorage.getItem('token')
   var postData = {
   
  };
  
      //const url = "http://snapi.epitech.eu:8000/seen";

      const data = {
        id:id
      };
      
      const options = {
        headers: {
            'Content-Type': 'application/json',
            "token": token 
        }
      };
      
      axios.post('http://snapi.epitech.eu:8000/seen', data, options)
       .then((res) => {
         navigation.navigate('Home')
       })
       .catch((err) => {
        
       })
      

  }

  setTimeout(function(){
    
  Delete()
  } , duration*1000) ;


return (
      <View style={styles.main}>
         <TouchableOpacity>
    <Text style={styles.text} onPress={()=> Delete}>Back</Text>
  </TouchableOpacity>
        
        <Image style={{width: 300, height: 600, borderWidth: 1, borderColor: 'white'}} source={{uri: image}}/>
 
        
   </View>

    
  
)
}

export default RenderSnap