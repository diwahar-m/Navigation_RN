import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Text, View } from "react-native"
import TabScreen1 from "./tabScreen1"
import TabScreen2 from "./tabScreen2"



type BottomTabParamsList= {
    TabScreen1: undefined, 
    TabScreen2:undefined 
}

const BottomTab = createBottomTabNavigator<BottomTabParamsList>()


const TabNavigationDemo : React.FC =() => {
    return(
        <BottomTab.Navigator>
            <BottomTab.Screen name="TabScreen1" component={TabScreen1}/>
            <BottomTab.Screen name="TabScreen2" component={TabScreen2}/>
        </BottomTab.Navigator>
    )
}

export default TabNavigationDemo