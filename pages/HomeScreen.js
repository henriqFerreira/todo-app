import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, Modal, TextInput, Keyboard, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

{/* Import dos componentes */}
import Task from "../components/Tasks"
import DrawerButton from "../components/DrawerButton";

export default function HomeScreen ({ navigation }) {

    {/* Váriaveis state que vão armazenar o estado do modal (Visíve=>true, Inivisível=>false) */}
    const [modalVisible, setModalVisibility] = useState(false)

    {/* Variáveis state que vão armazenar o nome da task a ser adicionada */}
    const [taskName, setTaskName] = useState();

    {/* Variáveis state que vão armazenar todas as tasks já adicionadas (Apaga tudo quando fecha o app :c ) */}
    const [allTasks, setAllTasks] = useState([]);

    {/* Constante que lida com o tratamento dos dados vindo dos inputs do modal, no caso, a task a ser adicionada */}
    const handleTask = () => {
        Keyboard.dismiss();
        if (!taskName || taskName.trim().length === 0) {
            Alert.alert("Invalido")
        } else {
            setAllTasks([...allTasks, taskName]);
            setTaskName(null);
            setModalVisibility(false);
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar backgroundColor={"#EDF2FB"} barStyle="dark-content" />
            <DrawerButton/>
            <ScrollView>
                <View style={ styles.container }>
                    <Modal transparent={true} animationType="slide" visible={modalVisible} onRequestClose={() => setModalVisibility(false)}>
                        <View style={ styles.modalContainer }>
                            <View  style={ styles.modalView }>
                                <View style={ styles.insideModalContainer }>
                                    <ScrollView>
                                        {/* Título do modal */}
                                        <Text style={ styles.modalTitle }>Nova tarefa</Text>
                                        <View>
                                            <Text style={ styles.inputTitle }>Titulo</Text>
                                            <TextInput
                                                style={ styles.textInput }
                                                maxLength={50}
                                                placeholder="Título da nova tarefa"
                                                value={taskName}
                                                onChangeText={name => setTaskName(name)}
                                            />
                                        </View>
                                        <View>
                                            <Text style={ styles.inputTtitle }>
                                                Descrição 
                                                <Text style={ styles.optional }> (opcional)</Text>
                                            </Text>
                                            <TextInput style={ styles.multilineInput } multiline numberOfLines={4} placeholder="Descrição da tarefa" />
                                        </View>
                                    </ScrollView>
                                    <View style={ styles.addTaskContainer }>
                                        <TouchableOpacity style={ styles.addTaskButtonModal } onPress={() => handleTask()}>
                                            <Icon name="plus" size={18} color="#000"/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Modal>
                    <View style={ styles.header }>
                        {/* Título da seção */}
                        <Text style={ styles.title }>Tarefas de hoje</Text>
                        {/* Botão que abre o pop-up de nova tarefa */}
                        <TouchableOpacity style={ styles.addTaskButton } onPress={() => setModalVisibility(true)}>
                            <Icon name="plus" size={14} color="#000"/>
                        </TouchableOpacity>
                    </View>
                    {/* Container que terá todas as tasks, (hoje) */}
                    <View style={ styles.tasksContainer }>
                        {/* Cada task será inserida aqui */}
                        {
                            allTasks.map((item, index) => {
                                return (
                                    <Task text={item} />
                                )
                            })
                        }
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
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalView: {
        height: '95%',
        borderTopStartRadius: 40,
        borderTopEndRadius: 40,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
        backgroundColor: '#D7E3FC'
    },
    insideModalContainer: {
        flex: 1,
        padding: 25,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    inputTitle: {
        marginTop: 20,
        fontSize: 16,
    },
    optional: { fontSize: 10 },
    textInput: {
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 12,
        paddingRight: 12,
        marginTop: 10,
        borderRadius: 20,
        backgroundColor: 'white'
    },
    multilineInput: {
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 12,
        paddingRight: 12,
        marginTop: 10,
        borderRadius: 20,
        textAlignVertical: 'top',
        backgroundColor: 'white'
    },
    addTaskContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addTaskButtonModal: {
        width: 120,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#ABC4FF',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
});