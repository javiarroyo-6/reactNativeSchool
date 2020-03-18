import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackScreens from "../navigation/AuthStack";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AuthStackScreens />
    </NavigationContainer>
  );
};

export default AppNavigator;
