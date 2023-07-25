import auth from '@react-native-firebase/auth';

class AccountsApiGateway {
  /**
   * Function to call sign-up API
   * @param email Validated email
   * @param password Validated password
   */
  signUp = async (
    email: string,
    password: string,
  ) => {
    const request = auth().createUserWithEmailAndPassword(email, password)
    return request
  }

}

export default new AccountsApiGateway()
