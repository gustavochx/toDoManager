import React, { Component } from 'react';
import { SafeAreaView, KeyboardAvoidingView, View, Image, TextInput, Button, Text, StyleSheet } from 'react-native';

const img = require('../assets/ToDoList.png');

export default class Login extends Component {
    state = {
        email: this.props.email,
        password: ''
    };

    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <KeyboardAvoidingView style={StyleSheet.container} behavior='padding'>
                    <View style={styles.topView}>
                        <Image style={styles.img} source={img}/>
                    </View>
                    <View style={styles.bottomView}>
                        
                        <TextInput style={styles.input} placeholder='Email'
                                    keyboardType={'email-address'} autoCapitalize='none'
                                    value={this.state.email}
                                    onChangeText={(text) => this.setState({ email: Text})} />
                        
                        <TextInput style={styles.input} placeholder='Password' secureTextEntry={true}
                                    onChangeText={(password) => this.setState({ password})}/>
                        
                        <Button title='Sign in' onPress={() => Alert.alert(`Email: ${this.state.email} \nPassword: ${this.state.password}`)}/>
                        
                        <View style={styles.textConteiner}>
                            <Text>Not a member? Let's</Text>
                        < Text style={styles.textRegister}>Register</Text>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
            );
    }
}

const styles = StyleSheet.create({
    safeArea: {
         flex: 1
    },
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    topView: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 50
    },
    img: {
        width:200,
        height: 200
    },
    bottomView: {
        flexDirection: 'column',
        paddingRight: 20,
        paddingLeft: 20
    },
    input: {
     marginBottom: 20,
     textAlign: 'center'
    },
    textConteiner: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    textRegister: {
        fontWeight: 'bold'
    }
});

