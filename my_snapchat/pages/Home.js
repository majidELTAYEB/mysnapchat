import React, { useState, useRef, useEffect } from "react";
import {StyleSheet,Dimensions,View,Text,TouchableOpacity,SafeAreaView,} from "react-native";
import { Camera } from "expo-camera";
import styles from "./style/HomeStyle";
import Icon from 'react-native-vector-icons/FontAwesome';
import Icone from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DoubleClick from 'react-native-double-click';

const WINDOW_HEIGHT = Dimensions.get("window").height;
import AsyncStorage from '@react-native-async-storage/async-storage';

// const closeButtonSize = Math.floor(WINDOW_HEIGHT * 0.032);
// const captureSize = Math.floor(WINDOW_HEIGHT * 0.09);

export default function Home({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [isPreview, setIsPreview] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [videoSource, setVideoSource] = useState(null);
  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const onCameraReady = () => {
    setIsCameraReady(true);
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true, skipProcessing: true };
      const data = await cameraRef.current.takePictureAsync(options);
      const source = data.uri;
      if(source){
        await cameraRef.current.pausePreview();
        setIsPreview(true);
        await AsyncStorage.setItem('image',source);
        console.log("picture source", source);
      }
    }
  };


  const Deconnexion = async () => {
    await AsyncStorage.clear();
    navigation.navigate('Login');
  }

  const switchCamera = () => {
    if (isPreview) {
      return;
    }
    setCameraType((prevCameraType) =>
      prevCameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const cancelPreview = async () => {
    await cameraRef.current.resumePreview();
    setIsPreview(false);
   // setVideoSource(null);
  };

  const LogoutFunc = ()=>{

   // fonction pour la deconnexion
   
  }

 

  const renderCancelPreviewButton = () => (
    <>
      <TouchableOpacity onPress={cancelPreview} style={styles.closeButton}>
      <Icon name="close" size={30} color="white" />
    </TouchableOpacity>
    
    <TouchableOpacity>
      <Icon name="send" size={50} color="white" style={styles.send} onPress={()=> navigation.navigate('SendTo')}/>
    </TouchableOpacity>

    </>
  );

  const renderCaptureControl = () => (
    <>
      <View style={styles.control}>
        <TouchableOpacity disabled={!isCameraReady} onPress={switchCamera}>
        <Icon name="camera" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          disabled={!isCameraReady}
          onPress={takePicture}
          style={styles.capture}
        />
        <AntDesign name="logout" size={30} color="white" style={styles.logout} onPress={()=>Deconnexion()} />
      </View>
 <TouchableOpacity disabled={!isCameraReady}>
    <AntDesign name="message1" size={35} color="white" style={styles.receive} onPress={()=> navigation.navigate('Receivedsnaps')} />
  </TouchableOpacity>

    </>
    );

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text style={styles.text}>Non accès à la camera</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>


      <Camera
        ref={cameraRef}
        style={styles.container}
        type={cameraType}
        flashMode={Camera.Constants.FlashMode.off}
        onCameraReady={onCameraReady}
        onMountError={(error) => {
          console.log("cammera error", error);
        }}
      />
      <View style={styles.container}>
        {isPreview && renderCancelPreviewButton()}
        {!isPreview && renderCaptureControl()}
       </View>
    </SafeAreaView>
  );
}