import { CompositeNavigationProp, RouteProp } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"



export type RootStackParamList = {
    Splash: undefined
    Auth: undefined
  }

  export type RootScreenProps<T extends keyof RootStackParamList> = {
    route: RouteProp<RootStackParamList, T>
    navigation: NativeStackNavigationProp<RootStackParamList, T>
  }

  export type AuthStackParamList = {
    Login: undefined
  }

  export type AuthScreenProps<T extends keyof AuthStackParamList> = {
    route: RouteProp<AuthStackParamList, T>
    navigation: CompositeNavigationProp<
      NativeStackNavigationProp<AuthStackParamList, T>,
      NativeStackNavigationProp<RootStackParamList>
    >
  }