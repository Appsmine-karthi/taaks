import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { colors, fonts } from '../../components/theme';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

import Home_Screen1 from './Home_Screen1';

import Home_Screen2 from './Home_Screen2';

import Home_Screen3 from './Home_Screen3';

import Home_Screen4 from './Home_Screen4';

import Home_Screen5 from './Home_Screen5';

export default function Home_Screen() {

    return (

        <Tab.Navigator initialRouteName="Home"

            screenOptions={{

                tabBarShowLabel: true,

                tabBarActiveTintColor: colors.white_color,

                tabBarInactiveTintColor: colors.secondary_color,

                tabBarActiveBackgroundColor: colors.secondary_color,

                tabBarInactiveBackgroundColor: '#EBEEF2',

                tabBarStyle: {

                    width: '100%',

                    alignSelf: 'center',

                    backgroundColor: colors.white_color,

                    overflow: 'hidden',

                    height: 60,

                    borderTopWidth: 1,

                },

                tabBarLabelStyle: { fontSize: 11, fontFamily: fonts.semibold_font, bottom: 7.5 }

            }}>

            <Tab.Screen name="Home" component={Home_Screen1}

                options={{

                    tabBarLabel: 'Home',

                    headerShown: false,

                    tabBarIcon: ({ color }) => (

                        <MaterialCommunityIcons name="home" color={color} size={20} />

                    )

                }} />

            <Tab.Screen name="Connections" component={Home_Screen2}

                options={{

                    tabBarLabel: 'Connections',

                    headerShown: false,

                    tabBarIcon: ({ color }) => (

                        <MaterialIcons name="group-add" color={color} size={20} />

                    )

                }} />

            <Tab.Screen name="Jobs" component={Home_Screen3}

                options={{

                    tabBarLabel: 'Jobs',

                    headerShown: false,

                    tabBarIcon: ({ color }) => (

                        <MaterialIcons name="card-travel" color={color} size={20} />

                    )

                }} />

            <Tab.Screen name="Applications" component={Home_Screen4}

                options={{

                    tabBarLabel: 'Applications',

                    headerShown: false,

                    tabBarIcon: ({ color }) => (

                        <MaterialCommunityIcons name="content-paste" color={color} size={20} />

                    )

                }} />

            <Tab.Screen name="Profile" component={Home_Screen5}

                options={{

                    tabBarLabel: 'Profile',

                    headerShown: false,

                    tabBarIcon: ({ color }) => (

                        <MaterialIcons name="person" color={color} size={20} />

                    )

                }} />

        </Tab.Navigator>

    )
}