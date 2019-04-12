/**
 * @format
 */

import React, { Component } from 'react'
import {AppRegistry} from 'react-native';
import Login from './src/screens/Login';
import {name as appName} from './app.json';

class Index extends Component {
    render() {
        return (<Login email='gustavochx@gmail.com'/>);
    }
}

AppRegistry.registerComponent(appName, () => Login);
