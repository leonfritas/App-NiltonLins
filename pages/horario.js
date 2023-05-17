import { View, Text } from "react-native"


export default function Horario(props){
    return(
        <View>
            <Text>
                Horario
                 {/* ASSIM PEGO OS PARÂMETROS PASSADOS NA TELA HOME COMO OBJETO*/ }
                 {props.route.params.AssimPassoParametros}
            </Text>
        </View>

    )
}