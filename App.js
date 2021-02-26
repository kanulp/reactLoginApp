import React from 'react';
import SecondActivity from './secondActivity.js'
import LoginActivity from './login.js'
import NFCActivity from './nfcActivity.js'
import NFCActivity2 from './nfcActivity2.js'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const App = () => {
   return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="NFC" component={NFCActivity} />
        <Stack.Screen name="Login" component={LoginActivity} />
        <Stack.Screen name="Home" component={SecondActivity} />
        <Stack.Screen name="NFC2" component={NFCActivity2} />

      </Stack.Navigator>
    </NavigationContainer>

   )
}
export default App