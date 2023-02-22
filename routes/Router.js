import { createStackNavigator } from "@react-navigation/stack";
import AppStack from './AppStack';
import AuthStack from './AuthStack'
import { NavigationContainer } from "@react-navigation/native";


export default function Router(){
    return (
        <NavigationContainer>
            <AuthStack/>
        </NavigationContainer>
    )
}