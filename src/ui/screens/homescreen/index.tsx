import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import {AppScreenProps} from '../../../types';
import {STRINGS} from './strings';

export const HomeScreen: React.FC<AppScreenProps<'HomeScreen'>> = ({
  navigation,
}) => {
  return (
    <Layout style={styles.safeAreaView}>
      <Text>{STRINGS.HOMESCREEN}</Text>
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
