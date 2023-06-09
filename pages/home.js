import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import api from '../services/api';
import React, { useState, useEffect } from 'react'

export default function Home({ navigation }) {

    const [ produtos, setProdutos ] = useState([])

    useEffect(()=>{
        api.get('/hep/student').then(({data})=>{
                setProdutos(data)
                console.warn(data)
        });
    }, [])

    return (
        <View style={styles.Home}>


        {/* {produtos.map(item =>
        (
        //    console.warn(item)
        ))} */}
        

            {/* <TouchableOpacity style={[styles.btn, styles.shadowProp]} title='Boletim' onPress={() => { navigation.navigate('Boletim', {AssimPassoParametros: 'Através de objetos.'}) }}>
                <Ionicons style={styles.icon} name='document-text-outline' size={80} color='white'/>
                <Text style={styles.txtBtn}>BOLETIM</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.btn, styles.shadowProp]} title='Horário' onPress={() => { navigation.navigate('Horario',  {AssimPassoParametros: 'Através de objetos.'}) }}>
                <Ionicons style={styles.icon} name='md-time-outline' size={80} color='white'/>
           
                <Text style={styles.txtBtn}>HORÁRIO</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.btn, styles.shadowProp]} title='Agenda' onPress={() => { navigation.navigate('Agenda',  {AssimPassoParametros: 'Através de objetos.'} )}}>
                <Ionicons style={styles.icon} name='book-outline' marginLeft={3} size={70} color='white'/>
                <Text style={styles.txtBtn}>AGENDA</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.btn, styles.shadowProp]} title='Financeiro' onPress={() => { navigation.navigate('Financeiro', {AssimPassoParametros: 'Através de objetos.'}) }}>
                <Ionicons style={styles.icon} name='cash-outline' size={70} color='white'/>
            
                <Text style={styles.txtBtn}>FINANCEIRO</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.btn, styles.shadowProp]} onPress={()=>{navigation.goBack()}} >

                <Ionicons style={styles.icon} name='exit-outline' marginLeft={4} size={70} color='white'/>
            
                <Text style={styles.txtBtn}>SAIR</Text>
            </TouchableOpacity> */}

        </View>

    )
}

// export { deslogar }

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

