import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    loginView: {
        flex: 1
    },
    statusBar: {
        backgroundColor: '#191919'
    },
    loginContainer: {
        alignItems: 'center',
        backgroundColor: '#191919',
        justifyContent: 'center',
        flex: 1
    },
    logo: {
        height: 200,
        width: 200
    },
    loginForm: {
        alignItems: 'center',
        backgroundColor: '#191919',
        height: 150,
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
        width: '100%'
    },
    buttonContainer: {
        width: '85%'
    }
});

export default styles;