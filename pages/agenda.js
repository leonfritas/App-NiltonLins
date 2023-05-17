import { View, Text } from "react-native"


export default function Agenda(props){
    return(
        <View>
            <Text>
                Agenda
                 {/* ASSIM PEGO OS PARÂMETROS PASSADOS NA TELA HOME COMO OBJETO*/ }
                 {props.route.params.AssimPassoParametros}
            </Text>
        </View>

    )
}