import React from 'react';
import SecondActivity from './secondActivity.js'
import LoginActivity from './login.js'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const App = () => {
   return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginActivity}
          
        />
        <Stack.Screen name="Home" component={SecondActivity} />
      </Stack.Navigator>
    </NavigationContainer>

   )
}
export default App