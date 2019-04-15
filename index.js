import React from 'react';
import { AppRegistry, SafeAreaView } from 'react-native';
import Routes from './src/services/Routes';
import { name as appName } from './app.json';

const wrappedRoutes = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
                <Routes />
        </SafeAreaView>
    );
};
AppRegistry.registerComponent(appName, () => wrappedRoutes);