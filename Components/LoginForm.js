import React, { useState } from "react";
import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>Login Form</Text>
    </View>
  );
};

export default LoginForm;
