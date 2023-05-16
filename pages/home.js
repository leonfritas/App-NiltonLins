import {
    StyleSheet,
    Image,
    Text,
    View,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    Animated,
    Pressable,
    useColorScheme,
    Button,
    Touchable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import App from '../App'

export default function Home({ navigation }) {
    return (
        <View style={styles.Home}>

            <TouchableOpacity style={[styles.btn, styles.shadowProp]} title='Boletim' onPress={() => { navigation.navigate('Boletim') }}>
                <Ionicons style={styles.icon} name='document-text-outline' size={80} color='white'/>
                <Text style={styles.txtBtn}>BOLETIM</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.btn, styles.shadowProp]} title='Horário' onPress={() => { navigation.navigate('Horario') }}>
                <Ionicons style={styles.icon} name='md-time-outline' size={80} color='white'/>
           
                <Text style={styles.txtBtn}>HORÁRIO</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.btn, styles.shadowProp]} title='Agenda' onPress={() => { navigation.navigate('Agenda') }}>
                <Ionicons style={styles.icon} name='book-outline' marginLeft={3} size={70} color='white'/>
                <Text style={styles.txtBtn}>AGENDA</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.btn, styles.shadowProp]} title='Financeiro' onPress={() => { navigation.navigate('Financeiro') }}>
                <Ionicons style={styles.icon} name='cash-outline' size={70} color='white'/>
            
                <Text style={styles.txtBtn}>FINANCEIRO</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.btn, styles.shadowProp]} >

                <Ionicons style={styles.icon} name='exit-outline' marginLeft={4} size={70} color='white'/>
            
                <Text style={styles.txtBtn}>SAIR</Text>
            </TouchableOpacity>
            {/* )
            })} */}
            {/* <Button title='voltar'  /> */}
        </View>

    )
}

const styles = StyleSheet.create({
    Home: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap:50,
        flexWrap: 'wrap',
        marginVertical:50

    },
    Text: {
        fontSize: 20,
        color: 'black'
    },
    btn:{
        width:130,
        height:130,
        color:'green',
        backgroundColor: '#1E90FF',
        paddingHorizontal:30,
        shadowColor: 'black',
        borderRadius:4,
        alignItems:'center',    
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation:10
      },
    txtBtn:{
        color:'white',
        fontWeight:600,
        textAlign: 'center',
        position:'absolute',
        bottom:10,
        margin: 'auto',
        left:0,
        right:0
    },
    icon:{
        marginTop: 10

    }
})

