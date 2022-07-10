import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Splash_Screen from './Splash_Screen';

import Language_Screen from './Language_Screen';

import Slider_Screen from './Slider_Screen';

import SignInSelection_Screen from './SignInSelection_Screen';

import SignUp_Screen from './SignUp_Screen';

import SignIn_Screen from './SignIn_Screen';

import Otp_Screen from './Otp_Screen';

import SkillsSelect_Screen from './SkillsSelect_Screen';

import Home_Screen from '../home/Home_Screen';

const Root_Screen = ({ navigation }) => (

    <Stack.Navigator>

        <Stack.Screen name="Splash_Screen" component={Splash_Screen} options={{ headerShown: false }} />
        
        <Stack.Screen name="Language_Screen" component={Language_Screen} options={{ headerShown: false }} />
        
        <Stack.Screen name="Slider_Screen" component={Slider_Screen} options={{ headerShown: false }} />
        
        <Stack.Screen name="SignInSelection_Screen" component={SignInSelection_Screen} options={{ headerShown: false }} />
        
        <Stack.Screen name="SignUp_Screen" component={SignUp_Screen} options={{ headerShown: false }} />
        
        <Stack.Screen name="SignIn_Screen" component={SignIn_Screen} options={{ headerShown: false }} />
        
        <Stack.Screen name="Otp_Screen" component={Otp_Screen} options={{ headerShown: false }} />
        
        <Stack.Screen name="SkillsSelect_Screen" component={SkillsSelect_Screen} options={{ headerShown: false }} />
        
        <Stack.Screen name="Home_Screen" component={Home_Screen} options={{ headerShown: false }} />

    </Stack.Navigator>

)

export default Root_Screen;