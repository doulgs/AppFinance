import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import Home from "../screens/Home";
import { Tela1, Tela2, Tela3, Tela4 } from "../utils/MockScreens";
import { IconTabRoute } from "../components/IconTabRoute";
import { useTheme } from "styled-components/native";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabRoutes() {
  const { COLORS } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0,
          position: "absolute",
          height: 60,
          borderTopWidth: 0,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        },
        tabBarActiveTintColor: COLORS.PURPLE,
        tabBarInactiveTintColor: COLORS.GRAY1,
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <IconTabRoute
                iconName="home"
                color={color}
                size={size}
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Tela2"
        component={Tela2}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <IconTabRoute
                iconName="pulse"
                color={color}
                size={size}
                focused={focused}
              />
            );
          },
        }}
      />
      {/* <Tab.Screen name="HomeTab" component={Home} /> */}
      <Tab.Screen
        name="Tela3"
        component={Tela3}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <IconTabRoute
                iconName="quote"
                color={color}
                size={size}
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Tela4"
        component={Tela4}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <IconTabRoute
                iconName="person"
                color={color}
                size={size}
                focused={focused}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="DrawerHome"
      screenOptions={({ navigation }) => ({
        headerTitleAlign: "center",
        headerLeftContainerStyle: { paddingLeft: 20 },
        headerRightContainerStyle: { paddingRight: 20 },
        headerStyle: {
          backgroundColor: "transparent",
          elevation: 0,
        },
        headerLeft: (props) => {
          return (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons name="md-menu-outline" size={27} color="black" />
            </TouchableOpacity>
          );
        },
        headerRight: (props) => {
          return (
            <Ionicons name="notifications-outline" size={25} color="black" />
          );
        },
      })}
    >
      <Drawer.Screen
        name="DrawerHome"
        component={TabRoutes}
        options={{ headerTitle: "Inicio" }}
      />
    </Drawer.Navigator>
  );
}

function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="StackHome" component={DrawerRoutes} />
    </Stack.Navigator>
  );
}

export default AppRoutes;
