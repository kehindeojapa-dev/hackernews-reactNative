import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

// Form Components
import LoginForm from "../Components/LoginForm";
import RegisterForm from "../Components/RegisterForm";

const SignInScreen = () => {
  return (
    <View>
      {/* <LoginForm /> */}
      <RegisterForm />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});
