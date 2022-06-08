import React, {useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './pages/Login';
import Register from './pages/Register'
import Home from './pages/Home';
import SendTo from './pages/SendTo';
 import Receivedsnaps from './pages/Receivedsnaps';
 import RenderSnap from './pages/RenderSnap';
const Stack = createNativeStackNavigator();

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SendTo" component={SendTo} />
        <Stack.Screen name="Receivedsnaps" component={Receivedsnaps} />
        <Stack.Screen name="RenderSnap" component={RenderSnap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
