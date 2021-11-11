import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import {
  Provider as PaperProvider,
  Colors,
  IconButton,
} from "react-native-paper";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

// State Management
import { Provider } from "react-redux";
import { store } from "./Redux/store";

// Screens Import
import HomeScreen from "./Screens/HomeScreen";
import AboutScreen from "./Screens/AboutScreen";
import SignInScreen from "./Screens/SignInScreen";

const Stack = createNativeStackNavigator();
console.log("Something");

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <PaperProvider>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  headerShown: true,
                  // title: "Welcome",
                  headerTitleAlign: "center",
                  headerStyle: {
                    backgroundColor: "#f4511e",
                  },
                  headerTintColor: "#fff",
                  headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 30,
                  },
                }}
              />
              <Stack.Screen
                name="About"
                component={AboutScreen}
                options={{
                  headerShown: true,
                  title: "Whoami",
                  headerStyle: {
                    backgroundColor: "#f4511e",
                  },
                  headerTintColor: "#fff",
                  headerTitleStyle: {
                    fontWeight: "bold",
                  },
                }}
              />
              <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{
                  headerShown: true,
                  title: "Sign In",
                  headerStyle: {
                    backgroundColor: "#f4511e",
                  },
                  headerTintColor: "#fff",
                  headerTitleStyle: {
                    fontWeight: "bold",
                  },
                }}
              />
            </Stack.Navigator>
          </PaperProvider>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
