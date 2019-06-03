import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, KeyboardAvoidingView, View, Image, TextInput, Button, Alert, Text } from 'react-native';
import { logoutFromFirebase } from '../services/FirebaseApi';
import { StackActions, NavigationActions } from 'react-navigation';
const img = require('../assets/profileImg.png');

export default class Perfil extends Component {

    async _logoutUser() {
        logoutFromFirebase();
        const resetNavigation = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({
                        routeName:'pageApp'
            })]
        });
        this.props.navigation.dispatch(resetNavigation);
    }

    static navigationOptions = {
        tabBarLabel: 'Perfil',
        tabBarIcon: ({ tintColor }) => (
            <Image source={img} style={[styles.icon, { tintColor }]} /> )
    }

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
                       <Text style={styles.title}>User</Text>
                    </View>
                    <View style={styles.bottomView}>
                      <Button title='Logout User'
                        onPress={() => this._logoutUser()}>
                      </Button>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26
    },
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