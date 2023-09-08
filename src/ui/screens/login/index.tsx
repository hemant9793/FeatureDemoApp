import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text, Input, Button, Spinner} from '@ui-kitten/components';
import auth from '@react-native-firebase/auth';

import {AccountsController} from '../../../workflow/login';
import EventEmitter from '../../../services/eventEmitter';
import {LocalStorage} from '../../../common/localStorage/localStorageHandler';
import {LOCAL_STORAGE} from '../../../constants';

import {STRINGS} from './strings';

const eventEmitter = new EventEmitter();
const controller = new AccountsController(eventEmitter);

export const Login: React.FC = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [isLoginShown, setIsLoginShown] = useState(false);
  const [isCreatingUser, setisCreatingUser] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle user state changes
  function onAuthStateChanged(user: any) {
    console.log('user', user);
    LocalStorage.setValue(LOCAL_STORAGE.USER, user);
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
      isLoginShown
        ? await controller.signIn(email, password)
        : await controller.signUp(email, password);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  const handleScreenChange = () => {
    setIsLoginShown(prev => !prev);
  };

  return (
    <Layout style={styles.container}>
      <Text category="h4" style={styles.title}>
        {isLoginShown ? STRINGS.LOGIN : STRINGS.SIGN_UP}
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
        status={'primary'}
        disabled={loading}
        // accessoryLeft={loading && <Spinner status="basic" />}
      >
        {/* {loading ? 'Loading' : STRINGS.LOGIN} */}
        {isLoginShown ? STRINGS.LOGIN : STRINGS.SIGN_UP}
      </Button>
      <Text style={styles.existingUser}>
        {isLoginShown ? STRINGS.NEW_USER : STRINGS.ALREADY_EXISTING_USER}
        <Text style={styles.signUpText} onPress={handleScreenChange}>
          {isLoginShown ? STRINGS.SIGN_UP : STRINGS.LOGIN}
        </Text>
      </Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textChange: {
    alignSelf: 'flex-end',
    marginRight: 14,
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
    width: '40%',
    borderRadius: 10,
    marginTop: 20,
  },
  existingUser: {
    marginVertical: 10,
  },
  signUpText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
