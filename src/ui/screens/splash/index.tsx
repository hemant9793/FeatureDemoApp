import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import {Layout, Text, useTheme} from '@ui-kitten/components';

import {RootScreenProps} from '../../../types';
import {STRINGS} from './strings';

export const Splash: React.FC<RootScreenProps<'Splash'>> = ({navigation}) => {
  function onAuthStateChanged(user: any) {
    console.log('user splash', user);
    if (!user) {
      navigation.replace('Auth');
    } else {
      navigation.replace('App');
    }
  }

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <Layout style={styles.safeAreaView}>
      <Text>{STRINGS.SPLASH}</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
