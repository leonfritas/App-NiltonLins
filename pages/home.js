import { StyleSheet,
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


export default function Home({navigation}) {
    return(
        <View style={styles.Home}>
            <Text style={styles.Text}>
                Home
            </Text>
            {[1].map((item)=>{
                return(
                    <TouchableOpacity 
                    key={item}
                    onPress={()=>{navigation.navigate('Boletim')}}>
                        <Text>
                            Item: 0{item}
                           
                        </Text>

                    </TouchableOpacity>
                )
            })}
            {/* <Button title='voltar'  /> */}
        </View>

    )
}

const styles = StyleSheet.create({
    Home:{
        flex:1,
        width:'100%',
        height:'100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Text:{
        fontSize:20,
        color: 'black'
    }
    
})

