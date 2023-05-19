import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import TabPerfil  from './perfil'
import MenuHome from './menuHome';

const TabBottom = createBottomTabNavigator();

export default function Tabs() {
    return (
      <TabBottom.Navigator screenOptions={{ tabBarShowLabel: false, tabBarStyle:{
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
                    <TabBottom.Screen name="TabHome" component={MenuHome} options={{ headerShown: false,
                                                                                tabBarIcon: ({ color, size, focused })=>{
                                                                                if(focused){
                                                                                    return <Ionicons name='home' size={size} color={color}/>
                                                                                }
                                                                                return <Ionicons name='home-outline' size={size} color={color}/>                                                                      
                                                                                }
                                                                            }}
                    />
                    <TabBottom.Screen name="TabPerfil" component={TabPerfil} options={{ headerShown: false,
                                                                            tabBarIcon: ({ color, size, focused })=>{
                                                                            if(focused){
                                                                                return <Ionicons name='person' size={size} color={color}/>
                                                                            }
                                                                            return <Ionicons name='person' size={size} color={color}/>
                                                                            }
                                                                        }}
                    />
      </TabBottom.Navigator>
    );
}
