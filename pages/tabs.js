import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons'
import Perfil  from './perfil'
import Home from './home';
import Boletim from './boletim'
import Financeiro from './financeiro'
import Horario from './horario'
import Agenda from './agenda'



/* SUBMENU HOME */
const MenuHomeStack = createStackNavigator();

function MenuHome(){
    return(
        <MenuHomeStack.Navigator>
            <MenuHomeStack.Screen name='Home' component={Home} />
            <MenuHomeStack.Screen name='Boletim' component={Boletim}/>
            <MenuHomeStack.Screen name='Horario' component={Horario}/>
            <MenuHomeStack.Screen name='Agenda' component={Agenda}/>
            <MenuHomeStack.Screen name='Financeiro' component={Financeiro}/>
        </MenuHomeStack.Navigator>
    )
}

/* MENU PRINCIPAL TABS */
const Tab = createBottomTabNavigator();

  function MyTabs() {
    return (
      <Tab.Navigator screenOptions={{ tabBarShowLabel: false,
                                      tabBarStyle:{
                                      position: 'absolute',
                                      backgroundColor: '#171626',
                                      borderTopWidth: 0,
                                      bottom: 14,
                                      left: 14,
                                      right: 14,
                                      elevation: 0,
                                      borderRadius: 8,
                                      height: 50
                                      }
                                  }}
      >
        <Tab.Screen name="MenuHome" component={MenuHome} options={{ headerShown: false,
                                                                    tabBarIcon: ({ color, size, focused })=>{
                                                                      if(focused){
                                                                        return <Ionicons name='home' size={size} color={color}/>
                                                                      }
                                                                      return <Ionicons name='home-outline' size={size} color={color}/>                                                                      
                                                                      }
                                                                  }}
        />
        <Tab.Screen name="Perfil" component={Perfil} options={{ headerShown: false,
                                                                tabBarIcon: ({ color, size, focused })=>{
                                                                  if(focused){
                                                                    return <Ionicons name='person' size={size} color={color}/>
                                                                  }
                                                                  return <Ionicons name='person' size={size} color={color}/>
                                                                  }
                                                              }}
        />
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