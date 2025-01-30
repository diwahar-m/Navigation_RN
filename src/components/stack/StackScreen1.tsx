import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { Button, Text, View } from "react-native"
import { StackParamsList } from "./StackNavigationDemo"

type StackScreen1NavigationProps = StackNavigationProp<StackParamsList,'StackScreen1' >

const StackScreen1: React.FC = () => {

    const navigation = useNavigation<StackScreen1NavigationProps>()
    return (
        <View>
            <Text> Stack Screen 1</Text>
            <Button 
                onPress={()=> navigation.navigate('StackScreen2', {itemId: 100})}
                title="Go to Stack Screen 2"
             />
        </View>
    )
}

export default StackScreen1