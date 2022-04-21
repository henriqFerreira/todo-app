import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";


export default function DrawerButton() {
    const navigation = useNavigation();
    return (
        <View style={ styles.buttonContainer } >
            <TouchableOpacity  style={ styles.button } onPress={() => navigation.openDrawer()}>
                <Icon name="arrow-right" size={20} color="#FFF" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        top: '50%',
        width: 30,
        height: 35,
        borderTopEndRadius: 12,
        borderBottomEndRadius: 12,
        backgroundColor: '#ABC4FF',
        zIndex: 10
    },
    button: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});