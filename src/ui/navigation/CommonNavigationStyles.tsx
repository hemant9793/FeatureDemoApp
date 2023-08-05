import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export const commonHeaderStyle = (
  theme: Record<string, string>,
): NativeStackNavigationOptions => ({
  headerStyle: {
    backgroundColor: theme['color-primary-600'],
  },
  headerTintColor: theme['color-basic-100'],
  headerShown: true,
  headerTitleStyle: {fontSize: 18},
  headerTitleAlign: 'center',
  headerBackTitleVisible: false,
});
