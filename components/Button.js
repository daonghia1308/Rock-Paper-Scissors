import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import styles from "../styles/styles"
const Button = props => {
    return (
        <TouchableOpacity style={styles.buttonStyle} onPress={() => props.onPress(props.name)}>
            <Text style={styles.buttonText}>
                {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
            </Text>
        </TouchableOpacity>
    )
}
export default Button;