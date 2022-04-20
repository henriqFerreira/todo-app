import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task = () => {
    return (
        <View style={ styles.taskContainer }>
            <Text style={ styles.taskTitle }>task</Text>
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
        backgroundColor: 'white'
    },
    taskTitle: {
        fontSize: 14,
    }
});

export default Task;