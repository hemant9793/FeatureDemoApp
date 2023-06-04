import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text, useTheme} from '@ui-kitten/components';
import {RootScreenProps} from '../../../types';
import {STRINGS} from './strings';

export const Splash: React.FC<RootScreenProps<'Splash'>> = ({navigation}) => {
  React.useEffect(() => {
    navigation.replace('Auth');
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
  },
});
