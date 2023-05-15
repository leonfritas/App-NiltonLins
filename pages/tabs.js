import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './home';
import Cadastro from './cadastro';
import Boletim from './boletim'
import { createStackNavigator } from '@react-navigation/stack';



/* SUBMENU HOME */
const MenuHomeStack = createStackNavigator();

function MenuHome(){
    return(
        <MenuHomeStack.Navigator>
            <MenuHomeStack.Screen name='Home' component={Home}/>
            <MenuHomeStack.Screen name='Boletim' component={Boletim}/>
        </MenuHomeStack.Navigator>
    )
}

/* MENU PRINCIPAL TABS */
const Tab = createBottomTabNavigator();

  function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="MenuHome" component={MenuHome} />
        <Tab.Screen name="Cadastro" component={Cadastro} />
      </Tab.Navigator>
    );
  }
  
  
export default function TabsNavigator() {
return (
    <NavigationContainer>
        <MyTabs />
    </NavigationContainer>
);
}