import { createStackNavigator,createAppContainer } from 'react-navigation';
import { Login, Register } from '../screens/Screens';

const Routes = createStackNavigator(
    {
        pageLogin: { screen: Login },
        pageRegister: { screen: Register }
    }, {
        headerMode: 'screen'
    }
);

export default App = createAppContainer(Routes);