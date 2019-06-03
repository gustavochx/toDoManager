import { Platform } from 'react-native';
import { createStackNavigator,createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { MainApp, Login, Register, ToDoTasks, DoneTasks, Task, Perfil } from '../screens/Screens';

const taskListTabNavigator = createBottomTabNavigator({
    pageToDoTasks: {
        screen: ToDoTasks,
        title: 'To Do'
    },
    pageDoneTasks: {
        screen: DoneTasks,
        title: 'Done'
    },

    pagePerfil: {
        screen: Perfil,
        title: 'Perfil'
    }
});

const Routes = createStackNavigator(
    {
        pageApp: { screen: MainApp },
        pageLogin: { screen: Login },
        pageRegister: { screen: Register },
        pageTasksList: {
            screen: taskListTabNavigator,
            navigationOptions: {
            ...Platform.select({
                ios: { title: 'Task List' },
                android: { header: null }
                })
              }
        },
        pageTask: { screen: Task },
        pagePerfil: {screen: Perfil }
    },
    {
        headerMode: 'screen'
    }
);

export default App = createAppContainer(Routes);