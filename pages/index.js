import {    StyleSheet,
            Image, 
            Text, 
            View, 
            ScrollView,
            SafeAreaView,
            TouchableOpacity,
            TextInput, 
            Animated,
            Pressable,
            useColorScheme
        } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import  React, { useState } from 'react';

export default function Login(setIsLogged) {

  console.warn(setIsLogged)

const [ matricula, setMatricula] = useState('')
const [ senha, setSenha] = useState('')

const [larguraLogo, setLarguraLogo] = useState(new Animated.Value(400))
const [ alturaLogo, setAlturaLogo ] = useState(new Animated.Value(400))
//
const [escritaLogo, setEscritaLogo] = useState(new Animated.Value(0))
const [input, setInput] = useState(new Animated.Value(0))


setTimeout(()=>{
Animated.timing(
larguraLogo,{
toValue: 190, 
duration: 1000,
useNativeDriver: false
}
).start()
Animated.timing(
alturaLogo,{
toValue: 180, 
duration: 1000,
useNativeDriver: false
}
).start()
}, 500)

setTimeout(()=>{
Animated.timing(
escritaLogo,{
  toValue: 1,
  duration:500,
  useNativeDriver: false 
}
).start()
Animated.timing(
input,{
  toValue: 1,
  duration: 500,
  useNativeDriver: false
}
).start()
}, 1000)


const acesso = ()=>{

()=> setIsLogged(true)

/* FAZER CHAMADA NO BACK-END PARA ACESSO */ 

if(matricula == '123' && senha == '123'){
    

}
//Por fim limpar os campos

}

return (
/* CONTAINER */ 
<View style={styles.container}>
<StatusBar />
<View style={{width: '100%', display: 'flex', alignItems:'center'}}>
  <Animated.Image style={{opacity: escritaLogo, width: 200, height: 55}}  source={require('../assets/images/logoEscritoNLBlack.png')}/>
  <Animated.Image style={{width: larguraLogo , height: alturaLogo, marginVertical: 20}} source={require('../assets/images/logoNL.png')}/>
</View>
<Animated.View style={{width: '100%', display: 'flex', alignItems:'center', opacity: input}}>
  <TextInput placeholder = "Matrícula" placeholderTextColor={'#fefefe'} style={styles.textInput} onChangeText={text => setMatricula(text)}/>
  <TextInput secureTextEntry={true} placeholder = "Senha" placeholderTextColor={'#fefefe'} style={styles.textInput} onChangeText={text => setSenha(text)}/>
    <Pressable style={styles.btnAcesso} onPress={()=>acesso()}>
      <Text style={styles.textBtnAcesso}>
        Acessar
      </Text>
    </Pressable>
</Animated.View>
</View>
);
}


const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
justifyContent: 'space-evenly',
backgroundColor: '#F0FFFF',
padding: 20
},
textInput:{
width: '80%',
height: 40,
backgroundColor: '#4169E1',
borderRadius:10,
paddingLeft: 10,
// outline: '1px',
marginVertical: 5  
},
btnAcesso:{
width: '80%',
height: 40,
backgroundColor: '#191970',
justifyContent:'center',
borderRadius: 10,
marginVertical:10
},
textBtnAcesso:{
textAlign:'center',
color: '#fefefe',
fontSize:16,
fontWeight:'600',
letterSpacing: 1,
width: 300
}
});
