import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { selectUsername } from "../Redux/userData";

// Form Components
import LoginForm from "../Components/LoginForm";
import RegisterForm from "../Components/RegisterForm";

const SignInScreen = () => {
  const [show, setShow] = useState(false);

  const username = useSelector(selectUsername);

  useEffect(() => {
    // Check to see if there is an existing username.
    // if it exist, it shows loginScreen and if it doesn't exist
    // it shows the registerScreen with the use of the show State.
    if (username) {
      setShow(true);
    }
    return () => {
      username = false;
    };
  }, []);

  return (
    <View>
      {show ? (
        <LoginForm setShow={setShow} />
      ) : (
        <RegisterForm setShow={setShow} />
      )}
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});
