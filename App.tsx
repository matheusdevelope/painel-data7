import 'react-native-gesture-handler';
import { useEffect } from 'react';
import * as Updates from 'expo-updates'
import Router from './src';

export default function App() {
  useEffect(() => {
    
    try{async function updateApp() {
      const { isAvailable } = await Updates.checkForUpdateAsync();
      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync(); 
      }
    }
     updateApp();
  }catch(e){
    
  }

  }, []);
  return (
      <Router/>
  );
}

