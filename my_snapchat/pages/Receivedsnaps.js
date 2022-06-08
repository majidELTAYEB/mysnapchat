import React, {useEffect,useState} from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import styles from './style/ReceivedStyle';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

function Receivedsnaps({ navigation, route }) {
  
 

    let [data, setData] = useState([])
    let [snap, setSnap] = React.useState('')

    useEffect(() => {
      getData();
    }, []);

    const getData = async () => {
        let token = await  AsyncStorage.getItem('token')
         const config = {
            headers:{
            "token": token
            }
        };
        const url = "http://snapi.epitech.eu:8000/snaps";
        const response = await axios.get(url, config)
        setData(response.data.data);
        //console.log(token)
    }


    const getSnap = async (id, duration) => {
      let token = await  AsyncStorage.getItem('token')
       const config = {
          headers:{
          "token": token,
          //'Content-Type': 'multipart/form-data',
          responseType: "blob"
          }
      };
      const url = "http://snapi.epitech.eu:8000/snap/"+id;
      const result = await fetch(url,config);
      const blob = await result.blob();
      const objectURL = URL.createObjectURL(blob);


      //console.log(objectURL)

      navigation.navigate('RenderSnap',{image:objectURL,duration:duration, id:id})
    
    }


     
    
    

  return (
    <View style={styles.main}>
<View style={styles.main}>
         <Text style={styles.message}>Message Reçu</Text>
        { data.map((value)=> {
         return (
         
            <TouchableOpacity onPress={()=> getSnap(value.snap_id, value.duration)}>
            <Text style={styles.text}>snap reçu de  : {value.from}</Text>
            </TouchableOpacity>
         )
        })}
        
      </View>
      <TouchableOpacity style={styles.cam} onPress={()=> navigation.navigate('Home')}>
         <Icon name="camera" size={30} color="white" />
            </TouchableOpacity>
    </View>
    )
}

export default Receivedsnaps