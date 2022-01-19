import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Login";
import Signup from "./Signup";

const RootStackScreen = createStackNavigator();

const RootStack = ({ navigation }) => (
  <RootStackScreen.Navigator headerMode="none">
    <RootStackScreen.Screen name="Login" component={Login} />
    <RootStackScreen.Screen name="Signup" component={Signup} />
  </RootStackScreen.Navigator>
);

export default RootStack;
