import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function AppStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen/>
            <Stack.Screen/>
            <Stack.Screen/>
        </Stack.Navigator>
    )
}