import React, { Component } from 'react';
import { SafeAreaView, KeyboardAvoidingView, View, Image, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { signOnFirebaseAsync } from '../services/FirebaseApi';

const img = require('../assets/ToDoList.png');

export default class Login extends Component {

    async _signInAsync() {
        try {
            const user = await signOnFirebaseAsync(this.state.email, this.state.password);
            Alert.alert("User Authenticated",`User ${user.email} has succesfuly been authenticated!`);
        } catch (error){
            Alert.alert('Failed on sign in User', error.message);
        }
    };


    static navigationOptions = {
        header: null
    };
    // AS telas do react é como se fosse uma funcao matematica 
    state = {
        email: this.props.email,
        password: ''
    };

    render() {
        return (
                <KeyboardAvoidingView style={StyleSheet.container} behavior='padding'>
                    <View style={styles.topView}>
                        <Image style={styles.img} source={img}/>
                    </View>
                    <View style={styles.bottomView}>
                        <TextInput style={styles.input} placeholder='Email'
                                    keyboardType={'email-address'} autoCapitalize='none'
                                    value={this.state.email}
                                    onChangeText={(text) => this.setState({ email: text})} />
                        <TextInput style={styles.input} placeholder='Password' secureTextEntry={true}
                                    onChangeText={(password) => this.setState({ password})}/>
                        <Button title='Sign in' onPress={() => this._signInAsync()}/>
                        <View style={styles.textConteiner}>
                            <Text>Not a member?</Text>
                            <Text style={styles.textRegister} onPress={
                            () => { const { navigate } = this.props.navigation;
                                                    navigate('pageRegister');
                            }}>{"\n"}Let's Register</Text>
                        </View>
                    </View>
                </KeyboardAvoidingView>
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

