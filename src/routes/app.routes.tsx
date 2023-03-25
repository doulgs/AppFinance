import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Graphic } from "../screens/Graphic";
import { Notifications } from "../screens/Notifications";
import { Setting } from "../screens/Setting";

import {
  HomeIcon,
  HomeFillIcon,
  GraphicIcon,
  GraphicFillIcon,
  NotifiIcon,
  NotifiFillIcon,
  SettingsIcon,
  SettingsFillIcon,
} from "../utils/IconsSvg";
import { useTheme } from "styled-components/native";
import { Login } from "../screens/Auth/Login/Login";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AppRoutes() {
  const { COLORS } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.WHITE,
        tabBarInactiveTintColor: COLORS.GRAY4,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: COLORS.PURPLEDARK3,

          position: "absolute",
          borderTopWidth: 0,
          height: 78,
          width: 327,
          bottom: 32,
          left: 32,
          borderRadius: 32,
          elevation: 0,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return focused ? (
              <HomeFillIcon fill={color} width={size} height={size} />
            ) : (
              <HomeIcon fill={color} width={size} height={size} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Graphic"
        component={Graphic}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return focused ? (
              <GraphicFillIcon fill={color} width={size} height={size} />
            ) : (
              <GraphicIcon fill={color} width={size} height={size} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return focused ? (
              <NotifiFillIcon fill={color} width={size} height={size} />
            ) : (
              <NotifiIcon fill={color} width={size} height={size} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return focused ? (
              <SettingsFillIcon fill={color} width={size} height={size} />
            ) : (
              <SettingsIcon fill={color} width={size} height={size} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default AppRoutes;
