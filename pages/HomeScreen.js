import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

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
                        <View style={ styles.header }>
                            {/* Título da seção */}
                            <Text style={ styles.title }>Tarefas de hoje</Text>
                            {/* Botão que abre o pop-up de nova tarefa */}
                            <TouchableOpacity style={ styles.addTaskButton }>
                                <Icon style={ styles.addTaskText } name="plus" size={14} color="#000"/>
                            </TouchableOpacity>
                        </View>
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000'
    },
    addTaskButton: {
        width: 30,
        height: 30,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#ABC4FF',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tasksContainer: {
        padding: 15
    }
});

export default HomeScreen;