import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar } from "react-native";

{/* Import dos componentes */}
import Task from "../components/Tasks"

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={ styles.container }>
                <ScrollView>
                    <View>
                        {/* Título da seção */}
                        <Text style={ styles.title }>Tarefas de hoje</Text>
                        {/* Container que terá todas as tasks, (hoje) */}
                        <View style={ styles.tasksContainer }>
                            {/* Cada task será inserida aqui */}
                            <Task />
                        </View>
                    </View>
                </ScrollView>
            </View>
            <StatusBar backgroundColor={"#EDF2FB"} barStyle="dark-content" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        padding: 25,
        backgroundColor: '#EDF2FB'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000'
    },
    tasksContainer: {
        padding: 15
    }
});

export default HomeScreen;