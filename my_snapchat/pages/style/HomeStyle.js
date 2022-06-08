import {StyleSheet,Dimensions} from "react-native";

const WINDOW_HEIGHT = Dimensions.get("window").height;
const closeButtonSize = Math.floor(WINDOW_HEIGHT * 0.032);
const captureSize = Math.floor(WINDOW_HEIGHT * 0.09);

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
    },
    exit: {
      bottom: 670,
      left: 60
    },
  
    closeButton: {
      position: "absolute",
      marginTop: 20,
      top: 35,
      left: 15,
      height: closeButtonSize,
      width: closeButtonSize,
      borderRadius: Math.floor(closeButtonSize / 2),
      justifyContent: "center",
      alignItems: "center",
      zIndex: 2,
    },

  
    media: {
      ...StyleSheet.absoluteFillObject,
    },
    closeCross: {
      width: "68%",
      height: 1,
      backgroundColor: "black",
    },
  
    sendIcon:{
  
      width: "68%",
      height: 1,
      backgroundColor: "black",
    },
    control: {
      position: "absolute",
      flexDirection: "row",
      bottom: 38,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },

    capture: {
      backgroundColor: "#f5f6f5",
      borderRadius: 5,
      height: captureSize,
      width: captureSize,
      borderRadius: Math.floor(captureSize / 2),
      marginHorizontal: 31,
    },
    text: {
      color: "#fff",
    },
    send:{
      textAlign : "center",
      width : "auto",
      height : "auto",
      marginTop : "195%",
      marginLeft :"auto",
      marginRight :"auto",
    },

    receive:{
      textAlign : "center",
      width : "auto",
      height : "auto",
      marginTop : 70,
      marginLeft :20,
      marginRight :"auto",
    },
  
});

export default styles;