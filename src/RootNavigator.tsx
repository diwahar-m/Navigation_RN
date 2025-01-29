import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import HomeScreen from "./screens/HomeScreen"
import StackNavigationDemo from "./components/stack/StackNavigationDemo"


export type RootStackParamsList = {
    Home: undefined
    StackDemo: undefined
}

const Stack = createStackNavigator<RootStackParamsList>()

const RootNavigator: React.FC = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="StackDemo" component={StackNavigationDemo} />
        </Stack.Navigator>
    )
}

export default RootNavigator