import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './tabs';
import Login  from './login'


export default function TabsNavigator() {

  const Nave = createStackNavigator();

    return (
        <NavigationContainer >
            <Nave.Navigator>
                <Nave.Screen options={{headerShown: false}} name='Login' component={Login} />
                <Nave.Screen options={{headerShown: false}} name='Tabs' component={Tabs}/>
            </Nave.Navigator>
        </NavigationContainer>
    );
}


