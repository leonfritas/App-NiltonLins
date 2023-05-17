import { View, Text } from "react-native"


export default function Boletim(props){
    return(
        <View>
            <Text>
                Boletim
                {/* ASSIM PEGO OS PARÂMETROS PASSADOS NA TELA HOME COMO OBJETO*/ }
                {props.route.params.AssimPassoParametros}
            </Text>
        </View>

    )
}