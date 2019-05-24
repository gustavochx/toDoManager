import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { readTasksFromFirebaseAsync } from '../services/FirebaseApi';
import { TaskListView } from '../components/Components';
const imgDone = require('../assets/done.png');

export default class DoneTasks extends Component {

    state = {
        tasks: []
    }

    static navigationOptions = {
        tabBarLabel: 'Done',
        tabBarIcon: ({ tintColor }) => (<Image source={imgDone}
            style={[styles.icon, { tintColor: tintColor }]} />)
    }



    render() {
        return (
            <View style={ styles.conteiner }>
                <TaskListView tasks={this.state.tasks}
                              navigation={this.props.navigation} />
            </View>
        );
    }

    componentDidMount() {
        readTasksFromFirebaseAsync(this._fetchTasks.bind(this)); 
    }

    _fetchTasks(tasks) {
        const tasksToDo = tasks.filter(t => t.isDone);
        this.setState({ tasks: tasksToDo});
    }
}


const styles = StyleSheet.create({ container: {
flex: 1,
flexDirection: 'column', paddingLeft: 10, paddingRight: 10
}, icon: {
width: 26,
height: 26 },
    img: {
        width: 50,
height: 50 }
});