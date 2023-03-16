import React from "react";
import Main from "../screens/AppStack/main";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MapIcon from "../components/icon/map";

const Tab = createBottomTabNavigator();

export default function AppStack() {
  return (
    <Tab.Navigator
      initialRouteName="mapa"
      screenOptions={{
        tabBarStyle: {
          height: 70,
          backgroundColor: "#FFB534",
        },
      }}
    >
      <Tab.Screen
        name="fazendas"
        component={Main}
        options={{
          headerShown: false,
          tabBarLabel: "Fazendas",
          tabBarLabelStyle: {
            color: "#000000",
            fontSize: 12,
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="barn" color={"#000000"} size={60} />
          ),
        }}
      />
      <Tab.Screen
        name="Relatorios"
        component={Main}
        options={{
          headerShown: false,
          tabBarLabel: "Relatórios",
          tabBarLabelStyle: {
            color: "#000000",
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="file-document"
              color={"#000000"}
              size={60}
            />
          ),
        }}
      />
      <Tab.Screen
        name="mapa"
        component={Main}
        options={{
          headerShown: false,
          tabBarLabel: " ",
          tabBarLabelStyle: {
            color: "#000000",
          },
          tabBarIcon: ({ focused }) => (
            <MapIcon
              focused={focused}
              source={require("../imgs/location.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="camera"
        component={Main}
        options={{
          headerShown: false,
          tabBarLabel: "Camera",
          tabBarLabelStyle: {
            color: "#000000",
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="camera" color={"#000000"} size={60} />
          ),
        }}
      />
      <Tab.Screen
        name="pesquisar"
        component={Main}
        options={{
          headerShown: false,
          tabBarLabel: "Pesquisar",
          tabBarLabelStyle: {
            color: "#000000",
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-search" size={60} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
