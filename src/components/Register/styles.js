import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

const styles = StyleSheet.create({
    registerView: {
        flex: 1
    },
    statusBar: {
        backgroundColor: '#191919'
    },
    registerContainer: {
        paddingTop: Constants.statusBarHeight,
        alignItems: 'center',
        backgroundColor: '#191919',
        justifyContent: 'center',
        flex: 1
    },
    registerHeader: {
        alignItems: 'center',
        paddingBottom: Constants.statusBarHeight
    },
    headerText: {
        color: '#f7f7f7',
        fontSize: 30
    },
    registerForm: {
        alignItems: 'center',
        backgroundColor: '#191919',
        marginLeft: 0,
        paddingLeft: 0,
        width: '85%'
    },
    inputItem: {
        borderColor: 'transparent',
        marginLeft: 0,
        paddingLeft: 0
    },
    input: {
        alignItems: 'flex-end',
        backgroundColor: '#191919',
        borderColor: '#2be664',
        borderBottomWidth: 0.5,
        color: '#f7f7f7',
        fontSize: 17,
        height: 40,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 0,
        paddingLeft: 0,
        width: '100%'
    },
    buttonContainer: {
        width: '85%'
    },
    button: {
        backgroundColor: '#2be664',
        borderRadius: 0,
        height: 55,
        justifyContent: 'center',
        marginTop: 20,
        width: '100%'
    }
});

export default styles;