import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import Boletim from './boletim'
import Financeiro from './financeiro'
import Horario from './horario'
import Agenda from './agenda'

const MenuHomeStack = createStackNavigator();

export default function MenuHome(){
    return(
        <MenuHomeStack.Navigator>
            <MenuHomeStack.Screen options={{headerShown: false}} name='Home' component={Home} />
            <MenuHomeStack.Screen name='Boletim' component={Boletim}/>
            <MenuHomeStack.Screen name='Horario' component={Horario}/>
            <MenuHomeStack.Screen name='Agenda' component={Agenda}/>
            <MenuHomeStack.Screen name='Financeiro' component={Financeiro}/>
        </MenuHomeStack.Navigator>
    )
}