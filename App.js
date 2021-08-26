import React from "react";
import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import tokenReducer from "./store/reducers/token";
import songReducer from "./store/reducers/topSongs";
import { Settings } from "react-native";

const rootReducer = combineReducers({
  token: tokenReducer,
  topSongs: songReducer,
});

const store = createStore(rootReducer);

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "black" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
  backgroundColor: "yellow",
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={globalScreenOptions}>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeScreen}
          />
         
         
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({

});
