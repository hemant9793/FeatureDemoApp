import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Login} from '../screens/login';
import {AuthStackParamList} from '../../types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthenticationStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
