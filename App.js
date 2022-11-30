/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MyShifts from './src/screens/Myshift';
import AvailableShifts from './src/screens/AvailableShifts';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const Tab = createBottomTabNavigator();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Tab.Screen
          options={{
            tabBarLabelStyle:{
              fontSize:16,
              fontWeight:'bold'
            },
            tabBarLabel: "My shifts",
            tabBarIcon:()=>(
              <View/>
            )
          }}
          name="MyShifts" component={MyShifts} />
        <Tab.Screen options={{
          tabBarLabelStyle:{
            fontSize:16,
            fontWeight:'bold'
          },
          tabBarLabel: "Available shifts",
          tabBarIcon:()=>(
            <View/>
          )
        }} name="AvailableShifts" component={AvailableShifts} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
