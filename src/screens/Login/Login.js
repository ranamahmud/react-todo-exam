import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../../components/Button';

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
export default function Login({ navigation }) {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const login = () => {

    }
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{
                alignSelf: "center",
                marginTop: 50,
            }}>
                <Image style={{
                    width: "20%",
                    height: "20%",
                    alignSelf: "center",
                }}
                    source={require("../../../assets/landing-image.png")} />

                <TextInput placeholder="Email address"
                    style={styles.input}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput placeholder="Password"
                    style={styles.input}
                    onChangeText={(text) => setPassword(text)}

                />
                <Button onPress={login} title="Login" backgroundColor="#FFE600" />

            </View>
            <View style={styles.signupView}>
                <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                    <Text style={{ fontSize: 16 }}>Don't have an account? <Text style={{ color: "blue", fontweight: "bold" }}>Sign Up</Text></Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}