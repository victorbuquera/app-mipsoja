import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import Router from './routes/Router';


// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
        <Router/>
    </NativeBaseProvider>
  );
}


