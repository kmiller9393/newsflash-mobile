import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

const styles = StyleSheet.create({
    newPostView: {
        alignItems: 'center',
        backgroundColor: '#181818',
        height: '85%',
        position: 'absolute',
        width: '85%',
        top: Constants.statusBarHeight,
        marginLeft: Constants.statusBarHeight / 2,
        zIndex: 3
    },
    header: {
        backgroundColor: '#181818'
    },
    icon: {
        color: '#f7f7f7'
    },
    newPostForm: {
        justifyContent: 'center'
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
    }
});

export default styles;