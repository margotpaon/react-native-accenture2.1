import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Details from './screens/Details';
import Home from './screens/Home';
import ContactScreen from './screens/Contact';

import HeaderComponents from './components/Header';

const { Navigator, Screen } = createStackNavigator()
export default function Route(){
    return(
        <NavigationContainer>
            <Navigator 
                screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f2f2'} }}
            >
            <Screen
                name="home"
                component={Home}
            />
            <Screen
                name="details"
                component={Details}
                options={{
                    headerShown: true,
                    header: () => <HeaderComponents title="Detalhes" showCancel={false} />
                }}
            />
            <Screen
                name="contact"
                component={ContactScreen}
                options={{
                    headerShown: true,
                    header: () => <HeaderComponents title="Detalhes" showCancel={true} />
                }}
            />
            </Navigator>

        </NavigationContainer>
    )
}