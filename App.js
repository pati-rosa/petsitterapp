import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Login} from './src/screens/Login';
import {ListVideos} from './src/screens/ListVideos';
import {Player} from './src/screens/Player';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ListVideos"
          component={ListVideos}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Player"
          component={Player}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
