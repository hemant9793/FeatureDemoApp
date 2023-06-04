import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import {STRINGS} from './strings';

export const Login: React.FC = ({}) => {
  return (
    <Layout style={styles.safeAreaView}>
      <Text>{STRINGS.LOGIN}</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});
