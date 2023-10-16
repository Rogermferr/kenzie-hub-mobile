import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        title: "Login",
        headerStyle: {
          backgroundColor: "#ff577f",
        },
        headerTintColor: "#fdfdfd",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 24,
        },
        headerShown: true,
      }}
    />
    <Stack.Screen
      name="Register"
      component={Register}
      options={{
        title: "Register",
        headerStyle: {
          backgroundColor: "#ff577f",
        },
        headerTintColor: "#fdfdfd",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 24,
        },
        headerShown: true,
      }}
    />
  </Stack.Navigator>
);

const RestrictedArea = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        title: "Kenzie Hub",
        headerStyle: {
          backgroundColor: "#ff577f",
        },
        headerTintColor: "#fdfdfd",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 24,
        },
        headerShown: true,
      }}
    />
  </Stack.Navigator>
);

const Routes = () => {
  const user = useSelector((state: any) => state.user);

  return (
    <NavigationContainer>
      {user ? <RestrictedArea /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
