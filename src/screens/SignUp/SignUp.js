import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Button from '../../components/Button';
import {firebase} from '../../firebase/config'
const styles = StyleSheet.create({
    form: {
        marginHorizontal: 48,
        marginTop: 60,
    },
    input: {
        height: 40,
        borderBottomColor: "#ddd",
        borderBottomWidth: 1,
        marginBottom: 30,
        padding: 10
    },
    signupView: {
        flex: 1, justifyContent: "flex-end", alignItems: "center",
        alignItems: "center"
    }
});
export default function Signup({ navigation }) {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const signup = () => {


        if (!email || !password) {
            return Alert.alert("Error", "You need to fill in all the inputs",
                [{ text: "Ok", onPress: () => { } }])
        }

        
        console.log("started");
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
            
            const uid = response.user.uid
            const data = {
                id: uid,
                email,
            };

            const usersRef = firebase.firestore().collection('users')
            usersRef
                .doc(uid)
                .set(data)
                .then(() => {
                    console.log("starting home")
                    navigation.navigate('Home', {user: data})
                })
                .catch((error) => {
                    console.log("end home")
                    alert(error)
                });

        })
        console.log("end");
    }
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{
                alignSelf: "center",
                marginTop: 50,
            }}>
                
             
                <TextInput placeholder="Email"
                    style={styles.input}
                    onChangeText={(text) => setEmail(text)}
                    autoCapitalize="none"

                />
                <TextInput placeholder="Password"
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)
                    }

                />
                <Text>Password must include at least 8 characters, 1 symbol and 1 capital letter (example: @Bttr123)</Text>

             
                <Button onPress={signup} title="Signup" backgroundColor="#FFE600" />

            </View>
            <View style={styles.signupView}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ fontSize: 16 }}>By continuing, you accept the <Text style={{ color: "#27AE60", fontweight: "bold" }}>Terms of Use</Text> and <Text style={{ color: "#27AE60", fontweight: "bold" }}>Privacy Policy</Text></Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}