import React from 'react';
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { firebase } from '../../firebase/config'
import {useState,useEffect} from 'react'
const Home = (props) => {

    const [todoText, setTodoText] = useState('')
    const [todos, setTodos] = useState([])


    const todoRef = firebase.firestore().collection('todos')
    const userID = props.extraData.id;

    useEffect(() => {
        todoRef
            .where("authorID", "==", userID)
            .orderBy('createdAt', 'desc')
            .onSnapshot(
                querySnapshot => {
                    const newTodos = []
                    querySnapshot.forEach(doc => {
                        const todo = doc.data()
                        todo.id = doc.id
                        newTodos.push(todo)
                    });
                    setTodos(newTodos)
                },
                error => {
                    console.log(error)
                }
            )
    }, [])

    const addTodo = () => {
        if (todoText && todoText.length > 0) {
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                text: todoText,
                authorID: userID,
                createdAt: timestamp,
            };
            todoRef
                .add(data)
                .then(_doc => {
                    settodoText('')
                    Keyboard.dismiss()
                })
                .catch((error) => {
                    alert(error)
                });
        }
    }


    const renderTodo = ({item, index}) => {
        return (
            <View style={styles.todoContainer}>
                <Text style={styles.todoText}>
                    {index}. {item.text}
                </Text>
            </View>
        )
    }
    return (
        <View>
            <Text>My TODOs</Text>
        <View>
            <TextInput
                placeholder='Add new todo'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setTodoText(text)}
                value={todoText}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TouchableOpacity onPress={addTodo}>
                <Text>Add</Text>
            </TouchableOpacity>
        </View>
        { todos && (
            <View>
                <FlatList
                    data={todos}
                    renderItem={renderTodo}
                    keyExtractor={(item) => item.id}
                    removeClippedSubviews={true}
                />
            </View>
        )}
    </View>
    );
};

export default Home;