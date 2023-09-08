import AsyncStorage from '@react-native-async-storage/async-storage';

export class LocalStorage {
    static getValue =async (key:string) => {
        try {
            const jsonValue = await AsyncStorage.getItem(key);
            return jsonValue != null ? JSON.parse(jsonValue) : null;
          } catch (e) {
            // error reading value
            console.log('local storage -> get error ',e)

          }
    }

    static setValue =async (key:string,value:any) => {
        try {
            const strValue = JSON.stringify(value)
            await AsyncStorage.setItem(key, strValue);
          } catch (e) {
            // saving error
            console.log('local storage -> set error ',e)
          }
    }

    static removeValue = async (key:string) => {
        try {
          await AsyncStorage.removeItem(key)
        } catch(e) {
          // remove error
          console.log('local storage -> remove error ',e)

        }
      }

    static clearAll = async () => {
        try {
          await AsyncStorage.clear()
        } catch(e) {
          // clear error
          console.log('local storage -> clear error ',e)

        }
      }
}