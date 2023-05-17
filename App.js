import TabsNavigator from './pages/tabs';
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
import { Picker } from '@react-native-picker/picker'





export default function App() {

//DEFINE SE O USUARIO ESTÁ LOGADO OU NÃO, RETORNA FALSE COMO PADRÃO, AO ALTERAR PARA TRUE A TELA HOME É MOSTRADA
const [isLogged, setIsLogged] = useState(false)

//FUNÇÃO PRINCIPAL QUE ESTÁ SENDO CARREGADA NO APP
function Login(  ) {

      const acesso = (  )=>{
      /* FAZER CHAMADA NO BACK-END PARA ACESSO */ 
      if(matricula == '123' && senha == '123' && selectUnidade == false){
        setIsLogged(true)
        
      }else{
        alert('Preencha os campos corretamente.')
      }
 
      }
      //PASSA VALORES DO INPUT DE LOGIN PARA VARIÁVEIS 'matricula' E 'senha' 
      const [ matricula, setMatricula] = useState('')
      const [ senha, setSenha] = useState('')

      //SELECIONA A UNIDADE NO COMBOBOX, COMO PADRÃO VEM LARANJEIRAS = FALSE, QUALQUER OUTRA UNIDADE RETORNA TRUE
      const [selectUnidade, setSelectUnidade] = useState(false)


      
      //ANIMAÇÃO INICIAL
      const [larguraLogo, setLarguraLogo] = useState(new Animated.Value(400))
      const [ alturaLogo, setAlturaLogo ] = useState(new Animated.Value(400))
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
      //

      /* CONTAINER PRINCIPAL */ 
      return (
      <View style={stylesLogin.container}>
      <StatusBar />
      <View style={{width: '100%', display: 'flex', alignItems:'center'}}>

          <Animated.Image style={{opacity: escritaLogo, width: 200, height: 55}}  source={require('./assets/images/logoEscritoNLBlack.png')}/>
          <Animated.Image style={{width: larguraLogo , height: alturaLogo, marginVertical: 20}} source={require('./assets/images/logoNL.png')}/>
      
      </View>
      <Animated.View style={{width: '100%', display: 'flex', alignItems:'center', opacity: input}}>
      
          <TextInput placeholder = "Matrícula" placeholderTextColor={'#fefefe'} style={stylesLogin.textInput} onChangeText={text => setMatricula(text)}/>
          <TextInput secureTextEntry={true} placeholder = "Senha" placeholderTextColor={'#fefefe'} style={stylesLogin.textInput} onChangeText={text => setSenha(text)}/>
          
          <Pressable style={stylesLogin.btnAcesso} onPress={()=>acesso()}>

              <Text style={stylesLogin.textBtnAcesso}>
                Acessar
              </Text>

          </Pressable>
          <Text style={{marginTop:30, marginBottom:5, fontWeight:500}}>Unidade:</Text>
          <Picker selectedValue={selectUnidade}
                  onValueChange={(itemValue, itemIndex) =>{
                    setSelectUnidade(itemValue)
                  }
                  } style={{ height: 30, width: '50%',  borderRadius:10, backgroundColor:'#F0FFFF', elevation: 3}}>
                    
              <Picker.Item label="Laranjeiras" value= {false} />
              <Picker.Item label="Japiim" value={true} />
              <Picker.Item label="Manacapuru" value={true} />

          </Picker>
        
      </Animated.View>
      </View>
      );
      }

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
 
        {isLogged?<TabsNavigator/>:<Login/>}

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const stylesLogin = StyleSheet.create({
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
  marginVertical: 5 ,
  color: 'white'
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