import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text, Input, Button, Spinner} from '@ui-kitten/components';
import auth from '@react-native-firebase/auth';

import {STRINGS} from './strings';
import {AccountsController} from '../../../workflow/login';
import EventEmitter from '../../../services/eventEmitter';

const eventEmitter = new EventEmitter();
const controller = new AccountsController(eventEmitter);

export const Login: React.FC = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [isCreatingUser, setisCreatingUser] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle user state changes
  function onAuthStateChanged(user: any) {
    console.log('user', user);
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  async function handleSignUp() {
    try {
      setLoading(true);
      await controller.signUp(email, password);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  return (
    <Layout style={styles.container}>
      <Text category="h4" style={styles.title}>
        {initializing ? 'Loading' : STRINGS.LOGIN}
      </Text>
      <Input
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        textStyle={styles.inputText}
        size="large"
        status="primary"
      />
      <Input
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        textStyle={styles.inputText}
        size="large"
        status="primary"
      />
      <Button
        style={styles.button}
        onPress={handleSignUp}
        disabled={loading}
        // accessoryLeft={loading && <Spinner status="basic" />}
      >
        {loading ? 'Loading' : STRINGS.LOGIN}
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 32,
  },
  input: {
    marginBottom: 16,
    width: '100%',
    borderRadius: 10,
  },
  inputText: {
    color: '#000', // Customize the input text color if needed
  },
  button: {
    width: '100%',
    borderRadius: 10,
  },
});
