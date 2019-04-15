import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, KeyboardAvoidingView, View, Image, TextInput, Button, Alert, Text } from 'react-native';

const img = require('../assets/ToDoList.png');

export default class Register extends Component {

    static navigationOptions = {
        header: null
    };

    state = {
        email: '',
        password: ''
    };


    render() {
        return (
            <SafeAreaView style={{ flex:1 }}>
                <KeyboardAvoidingView style={styles.container} behavior='padding'>
                    <View style={styles.topView}>
                       <Image style={styles.img} source={img}/>
                       <Text style={styles.title}>Registering new user</Text>
                    </View>
                    <View style={styles.bottomView}>
                      <TextInput style={styles.input} placeholder='Email' keyboardType={'email-address'} autoCapitalize='none' 
                      onChangeText={email => this.setState({email})}>
                      </TextInput>
                      <TextInput style={styles.input} placeholder='Password' secureTextEntry={true}
                      onChangeText={password => this.setState({password})}>
                      </TextInput>
                      <Button title='Register User'
                      onPress={() => Alert.alert(`Email:  ${this.state.email}\n Password: ${this.state.password}`)}>
                      </Button>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    topView: {
        flex: 0.20,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 25
    },
    img: {
        width:  50,
        height: 50
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20
    },
    bottomView: {
        flex: 1,
        flexDirection: 'column',
        paddingRight: 20,
        paddingLeft: 20
    },
    input: {
        marginBottom: 20
    }
});