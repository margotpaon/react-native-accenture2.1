import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Details from './screens/Details';
import Home from './screens/Home';

const { Navigator, Screen } = createStackNavigator()
export default function Route(){
    return(
        <NavigationContainer>
            <Navigator 
                screenOptions={{ headerShown: false }}
            >
            <Screen
                name="home"
                component={Home}
            />
            <Screen
                name="details"
                component={Details}
            />
            </Navigator>

        </NavigationContainer>
    )
}