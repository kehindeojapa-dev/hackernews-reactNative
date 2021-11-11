import React, { createRef, useState, useEffect } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { HelperText, TextInput, Button } from "react-native-paper";
import tw from "tailwind-react-native-classnames";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [nameValid, setNameValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const [registerBtn, setRegisterBtn] = useState(true);

  let nameInputRef = createRef();
  let passwordInputRef = createRef();

  const registerUser = () => {
    if (password.length >= 5 && name.length > 0) {
      alert(name);
    }
  };

  // To disable/enable register button when certain criteria are met
  useEffect(() => {
    if (name.length > 0 && password.length >= 5) {
      setRegisterBtn(false);
    } else {
      setRegisterBtn(true);
    }
  }, [name, password]);

  return (
    <ScrollView
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps={"always"}
      removeClippedSubviews={false}
      style={tw`mt-8`}
    >
      <View style={styles.row}>
        <TextInput
          mode="outlined"
          label={"Name"}
          placeholder="Enter username here"
          left={<TextInput.Icon name={"account"} color="#999" />}
          onSubmitEditing={() => passwordInputRef.current?.focus()}
          ref={nameInputRef}
          returnKeyType={"next"}
          value={name}
          onChangeText={(text) => setName(text)}
          onBlur={() => setNameValid(name.length > 0)}
          activeOutlineColor="#f4511e"
        />
        <HelperText type="error" visible={!nameValid}>
          Name field is empty!
        </HelperText>
      </View>

      <View style={styles.row}>
        <TextInput
          mode="outlined"
          label={"Password"}
          placeholder="At least 5 characters"
          right={
            <TextInput.Icon
              color="#999"
              name={showPassword ? "eye-off" : "eye"}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
          secureTextEntry={!showPassword}
          ref={passwordInputRef}
          returnKeyType={"next"}
          value={password}
          onChangeText={(text) => setPassword(text)}
          onBlur={() => setPasswordValid(password.length >= 5)}
          activeOutlineColor="#f4511e"
        />
        <HelperText type="error" visible={!passwordValid}>
          Password must have atleast 5 characters!
        </HelperText>
      </View>
      <Button
        disabled={registerBtn}
        mode={"contained"}
        onPress={() => registerUser()}
        style={tw`w-80 p-2 ml-auto mr-auto`}
        color="#f4511e"
      >
        Register
      </Button>
    </ScrollView>
    // </TextInputContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  row: {
    margin: 8,
    marginTop: 0,
  },
});

export default RegisterForm;
