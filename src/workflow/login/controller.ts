import {AUTH_EVENTS} from './events'
import LoginApiGateway from './LoginApiGateway'

export class AccountsController {
  private readonly emitter: any

  constructor(eventEmitter: any) {
    this.emitter = eventEmitter
  }

  /**
   * Function responsible for validating inputs and calling Login API
   * @param email Email
   * @param password Password
   */
  signUp = async (email: string, password: string) => {
    try {
      // this.emitter.emit(AUTH_EVENTS.LOGIN_START)
      const response = LoginApiGateway.signUp(email,password)
      console.log('response', response)
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      console.log(error)
      // this.emitter.emit(AUTH_EVENTS.LOGIN_FAILURE, error?.response?.data?.title)
    }
  }

}
