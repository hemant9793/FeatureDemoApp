import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from '@ui-kitten/components';

import {HomeScreen} from '../screens/homescreen';
import {AppStackParamList} from '../../types';
import {commonHeaderStyle} from './CommonNavigationStyles';

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  const theme = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{...commonHeaderStyle(theme)}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}
