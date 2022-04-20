import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar } from "react-native";

{/* Import dos componentes */}
import Task from "../components/Tasks"
import DrawerButton from "../components/drawerButton";

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar backgroundColor={"#EDF2FB"} barStyle="dark-content" />
            <DrawerButton/>
            <ScrollView>
                <View style={ styles.container }>
                    <View>
                        {/* Título da seção */}
                        <Text style={ styles.title }>Tarefas de hoje</Text>
                        {/* Container que terá todas as tasks, (hoje) */}
                        <View style={ styles.tasksContainer }>
                            {/* Cada task será inserida aqui */}
                            <Task/>
                        </View>
                    </View>
                </View>
            </ScrollView>
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