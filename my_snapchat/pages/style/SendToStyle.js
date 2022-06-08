import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    scroll:{
        backgroundColor: '#21022b',
        paddingTop : '20%',
    },
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ViewText:{
        borderBottomWidth : 1,
        borderColor : '#554B05',
        borderTopWidth : 1,
        width : '80%',
    },
    ViewTextSelect:{
        borderBottomWidth : 1,
        borderColor : 'black',
        borderTopWidth : 1,
        width : '80%',
    },
    text: {
        color: 'white', 
        textAlign : 'center',
        fontSize: 20,
        marginTop: '3%',
        marginBottom: '3%',
    },
    ViewSearch:{
        width : '80%',
        flexDirection : 'row',
        alignItems : 'center',
        borderWidth : 1,
        borderColor : '#554B05',
        height : 40,
        borderRadius : 20,
        padding : 10,
        marginBottom : '5%',
    },
    TextSearch:{
        color : 'white',
        width : '90%',
        height : 30,
        marginLeft : '2%',
    },
    send:{
        textAlign : "center",
        backgroundColor: '#21022b',
    }
});

export default styles;