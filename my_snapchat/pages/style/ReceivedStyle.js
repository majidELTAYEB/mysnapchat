import { WhiteBalance } from 'expo-camera';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    
    main: {
        flex: 1,
        backgroundColor: '#21022b',
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        width: '100%',
        paddingLeft:10,
        paddingRight: 10,
        paddingTop:10,
        paddingBottom:10,
        color: 'white',
        fontSize: 20,
        marginTop: '5%',
    
    },

    cam:{
        bottom:50,
        backgroundColor: '#21022b',
        
    },

    message:{
        bottom:80,
        color: 'white',
        fontSize: 30,
        
    }
});

export default styles;