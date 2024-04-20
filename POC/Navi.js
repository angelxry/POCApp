import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from './Routes';
import Main from './Main';
import PageA from './PageA';
import PageB from './PageB';

const Stack = createStackNavigator();

const Navi = () => {
    return (
        <Stack.Navigator
        screenOptions={{header: () => null, headerShown: false}}
        initialRouteName={Routes.Main}>
            <Stack.Screen name = {Routes.Main} component={Main}/>
            <Stack.Screen name = {Routes.PageA} component={PageA}/>
            <Stack.Screen name = {Routes.PageB} component={PageB}/>
        </Stack.Navigator>
    );
};

export default Navi;