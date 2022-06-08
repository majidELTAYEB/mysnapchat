import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#21022b',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 30,
        marginTop: '5%',
    },
    input:{
        width: "100%",
        height: '10%',
        backgroundColor: 'white',
        marginTop: '5%',
        borderRadius: 10,
        color: '#21022b',
        fontSize: 18,
        paddingLeft: '5%',
    },
    button:{
        marginLeft: "auto",
        marginRight: "auto",
        width: "60%",
        height: '11%',
        backgroundColor: '#21022b',
        marginTop: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderColor : 'white',
        borderWidth : 2,
    },
    form:{
        width: '70%',
        height: '30%',
        justifyContent: 'center',
        marginLeft: "auto",
        marginRight: "auto",
    },
    register:{
        color: 'white',
        fontSize: 20,
        marginTop: '15%',
        textAlign: 'center',
    }

});

export default styles;