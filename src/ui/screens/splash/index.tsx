import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import {Layout, Text, useTheme} from '@ui-kitten/components';

import {RootScreenProps} from '../../../types';
import {STRINGS} from './strings';
import {LocalStorage} from '../../../common/localStorage/localStorageHandler';
import {LOCAL_STORAGE} from '../../../constants';

export const Splash: React.FC<RootScreenProps<'Splash'>> = ({navigation}) => {
  async function onAuthStateChanged(user?: any) {
    console.log('user splash', user);
    const saveduser = await LocalStorage.getValue(LOCAL_STORAGE.USER);
    console.log('saveduser', saveduser);
    if (saveduser) {
      navigation.replace('Auth');
    } else {
      navigation.replace('App');
    }
  }

  React.useEffect(() => {
    onAuthStateChanged();
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
