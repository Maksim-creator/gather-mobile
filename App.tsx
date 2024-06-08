/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/navigation/AuthStack.tsx";


function App(): React.JSX.Element {
  return (
  <NavigationContainer>
    <AuthStack />
  </NavigationContainer>
  );
}

export default App;
