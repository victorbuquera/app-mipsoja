import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../commom/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Router() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    const checkLoggedIn = async () => {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        dispatch(setToken(true));
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <NavigationContainer>
      {loggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
