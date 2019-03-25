import React from 'react';
import { Button, Text } from 'native-base';
import styles from './styles.js'

const FlashButton = props => {
    const { text, method } = props;

    return (
        <Button style={styles.button} onPress={method}>
            <Text>{text}</Text>
        </Button>
    )
}

export default FlashButton;