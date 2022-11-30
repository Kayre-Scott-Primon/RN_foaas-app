
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Splash from './screens/splash';
import Home from './screens/home'

const AppStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name='Splash' component={Splash} />
                <AppStack.Screen name='Home' component={Home} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}