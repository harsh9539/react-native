import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from "./Task"
export default function TodoList() {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);
    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task]);
        setTask(null);
    }
    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    }
    return (
        <View style={styles.container}>
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>Today's tasks</Text>
                <View style={styles.items}>
                    <ScrollView>
                        {
                            taskItems.map((items, key) => {
                                return (
                                    <TouchableOpacity onPress={()=>completeTask(key)}>
                                        <Task text={items} key={key} />
                                    </TouchableOpacity>
                                    )
                            })
                        }
                        {/* <Task text={"Task 1"} />
                        <Task text={"Task 2"} />
                        <Task text={"Task 3"} />
                        <Task text={"Task 4"} />
                        <Task text={"Task 5"} /> */}
                    </ScrollView>
                </View>
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTaskWrapper}
            >
                <TextInput value={task} onChangeText={text => setTask(text)} style={styles.input} placeholder={"Write a Task"} />
                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,

    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    items: {
        marginTop: 30
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 15,
        width: 250,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 60,
        borderColor: '#c0c0c0',
        borderWidth: 1
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#c0c0c0',
        borderWidth: 1
    }
});
