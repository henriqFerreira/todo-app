import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const Task = () => {
    return (
        <View style={ styles.taskContainer }>
            <View style={ styles.leftContent }>
                <TouchableOpacity style={ styles.taskCheckbox } ></TouchableOpacity>
                <Text style={ styles.taskTitle }>Lorem ipsum dolor sit amet</Text>
            </View>
            <Image source={ require('../assets/Order-button.png') } />
        </View>
    )
}

const styles = StyleSheet.create({
    taskContainer: {
        width: '100%',
        padding: 10,
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 15,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    leftContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    taskCheckbox: {
        width: 20,
        height: 20,
        borderRadius: 5,
        marginRight: 10,
        backgroundColor: '#ABC4FF'
    },
    taskTitle: {
        maxWidth: '85%',
        fontSize: 14,
    },
    taskReorder: {
        width: 20,
        height: 20,
        borderRadius: 5,
        backgroundColor: '#ABC4FF'
    },
});

export default Task;