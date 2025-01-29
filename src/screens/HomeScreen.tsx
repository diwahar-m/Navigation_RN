import { useNavigation } from "@react-navigation/native"
import { Button, StyleSheet, Text, View } from "react-native"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamsList } from "../RootNavigator"


type HomeScreenNavigationProp = StackNavigationProp<RootStackParamsList, 'Home'>

const HomeScreen: React.FC = () => {


    const navigation = useNavigation<HomeScreenNavigationProp>()

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Home screen</Text>
            <Button onPress={()=> navigation.navigate('StackDemo')} 
            title="Stack Navigation Demo"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
       flex: 1, 
       justifyContent: 'center', 
       alignItems: 'center'
    }, 
    text: {
        fontWeight: 'bold', 
        fontSize: 25
    }
})

export default HomeScreen