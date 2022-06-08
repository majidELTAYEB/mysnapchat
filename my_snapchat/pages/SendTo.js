import React, {useEffect,useState} from 'react';
import { View, Text, ScrollView, TextInput,TouchableOpacity} from 'react-native';
import styles from './style/SendToStyle';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

const SendTo = ({navigation}) => {
    const [users, setUsers] = useState([]);
    const [uri, setUri] = useState(null);
    const [search, setSearch] = useState('');
    const [userSelect, setUserSelect] = useState([]);
    useEffect(() => {
      const getAllUsers = async () => {
        let url = "http://snapi.epitech.eu:8000/all";
        let token = await  AsyncStorage.getItem('token')
        axios.get(url,{
            headers:{
              token : token
            }
        })
        .then( async (response)=>{
            await setUsers(response.data.data);
        })
        .catch(error => {
          console.log(error);
        });
      }
      getAllUsers();
    },[]);

    const selectUser = (user) => {
      setUserSelect([...userSelect,user]);
    }
    
    const sendSnap = async () => {
      
      const token = await  AsyncStorage.getItem('token');
      const image = await  AsyncStorage.getItem('image');
      
      for(let i = 0; i < userSelect.length; i++){
        let data = new FormData();
        data.append("duration", 5);
        data.append("to", userSelect[i]);
        data.append("image", {
          uri: image,
          name: `image${Math.floor(Math.random() * 1000000000000)}.jpg`,
          type: "image/jpg",
        });

        var config = {
          method: "post",
          url: "http://snapi.epitech.eu:8000/snap",
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
            token: token,
          },
          data: data,
        };
    
        axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    navigation.navigate('Receivedsnaps');

    }

    let SendIcon = null;
    if(userSelect.length > 0){
      SendIcon = <TouchableOpacity>
      <Icon name="send" size={50} color="white" style={styles.send}
      onPress={() => sendSnap()}
      />
    </TouchableOpacity> ;
    }

    return(
      <>
      <ScrollView style={styles.scroll}>
      <View style={styles.main}>
        <View style={styles.ViewSearch}>
          <Icon name="search" size={20} color="#554B05" />
          <TextInput style={styles.TextSearch} placeholder='Chercher un utilisateur' 
            onChangeText={(text) => setSearch(text)}
          />
        </View>
        {users.filter((user)=>{
          if(search == ''){
            return user;
          }else if(user.email.toLowerCase().includes(search.toLowerCase())){
            return user;
          }
        }).map((user) =>(
          <TouchableOpacity 
            style={styles.ViewText}
            onPress={()=> selectUser(user.email)}  
          >
            <Text style={styles.text}> <Icon name="snapchat-ghost" size={25} color="white"/> {user.email}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
    {SendIcon}
    </>
  )
}

export default SendTo;