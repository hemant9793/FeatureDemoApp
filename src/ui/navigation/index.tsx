import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import {default as theme} from '../../../theme.json'; // <-- Import app theme

import {AuthenticationStack} from './AuthenticationStack';

import {RootStackParamList} from '../../types';
import {Splash} from '../screens/splash';

// Global Constants
const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <ApplicationProvider {...eva} theme={{...theme}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Auth" component={AuthenticationStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
};
