import { createStackNavigator } from "@react-navigation/stack";
import login from '../screens/login'
import registerScreen from '../screens/signUp'
import Welcome from "../screens/welcome";
const Stack = createStackNavigator();

export default function AuthStack() {
    return(
        <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
            <Stack.Screen name="welcome" component={Welcome}/>
            <Stack.Screen name="signIn" component={login}/>
            <Stack.Screen name="Register" component={registerScreen}/>
        </Stack.Navigator>
    )
}