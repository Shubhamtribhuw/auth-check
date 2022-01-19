import React from "react";

// import Login from "./screens/Login";
// import Signup from "./screens/Signup";
//import Home from "./screens/Home";
import MainStack from "./screens/MainStack";
import RootStack from "./screens/RootStack";
// import SearchScreen from "./screens/SearchScreen";
// import ProfileScreen from "./screens/ProfileScreen";

//import MainStack from "./screens/MainStack";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";

// //import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import IonicIcon from "react-native-vector-icons/Ionicons";

const AppStack = createStackNavigator();

const App = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ header: () => null }}>
        <AppStack.Screen name="RootStack" component={RootStack} />
        <AppStack.Screen name="MainStack" component={MainStack} />
      </AppStack.Navigator>
    </NavigationContainer>
  </SafeAreaView>
);

export default App;
