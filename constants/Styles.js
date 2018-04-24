import { StyleSheet, Dimensions } from 'react-native';

// const width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#5fa6bf',
        backgroundColor: '#7E0800',
        // justifyContent: 'center'
      },
    header: {
        height: 50,
        paddingTop: 10,
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#137EA8',
        width: "50%"
    }
})