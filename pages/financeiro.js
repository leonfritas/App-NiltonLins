import { View, Text } from "react-native"


export default function Financeiro(props){
    return(
        <View>
            <Text>
                Financeiro
                {/* ASSIM PEGO OS PARÂMETROS PASSADOS NA TELA HOME COMO OBJETO*/ }
                {props.route.params.AssimPassoParametros}
            </Text>
        </View>

    )
}