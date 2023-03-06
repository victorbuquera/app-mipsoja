import React from "react";
import { StyleSheet } from "react-native-web";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "../screens/AppStack/main";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MapIcon from "../components/icon/map"
const Tab = createBottomTabNavigator();

export default function AppStack() {
  return (
    <Tab.Navigator
      initialRouteName="mapa"
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          backgroundColor:'#FFB534',
        }
      }}
    >
      <Tab.Screen
        name="fazendas"
        component={Main}
        options={{
          tabBarLabel: "Fazendas",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="barn"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Relatorios"
        component={Main}
        options={{
          tabBarLabel: "Fazendas",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="file-document"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="mapa"
        component={Main}
        options={{
          tabBarIcon: ({focused}) => (
            <MapIcon
              focused={focused}
              source={require("../imgs/location.png")}
            />
          ),
        }
      }
      />
      <Tab.Screen
        name="camera"
        component={Main}
        options={{
          tabBarLabel: "Camera",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="camera" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="pesquisar"
        component={Main}
        options={{
          tabBarLabel: "Pesquisar",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-search"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

