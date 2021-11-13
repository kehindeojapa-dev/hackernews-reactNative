import React, { createRef, useState, useEffect } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HelperText, TextInput, Button } from "react-native-paper";
import tw from "tailwind-react-native-classnames";
import * as SQLite from "expo-sqlite";
import { useDispatch } from "react-redux";
import { setUsername } from "../Redux/userData";

const db = SQLite.openDatabase("db.userDB");

const RegisterForm = ({ setShow }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // State for username and password
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // State for the eye icon and showing password
  const [showPassword, setShowPassword] = useState(false);

  // State for handling inputs validation
  const [nameValid, setNameValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  // State for enabling/disabling the registerBtn depending on the inputs values
  const [registerBtn, setRegisterBtn] = useState(true);

  // State for displaying signin status
  const [registerStatus, setRegisterStatus] = useState(false);

  // State for tabindexing inputs field
  let nameInputRef = createRef();
  let passwordInputRef = createRef();

  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS " +
          "User " +
          "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Password TEXT);"
      );
    });
  };

  const registerUser = () => {
    if (password.length >= 5 && name.length > 0) {
      createTable();
      // Check for length
      db.transaction((tx) => {
        tx.executeSql("SELECT * FROM User", [], (tx, results) => {
          if (results.rows.length === 1) {
            tx.executeSql(
              "UPDATE User SET Name=?, Password=?",
              [name.toLowerCase(), password],
              (tx, result) => {
                if (result) {
                  dispatch(setUsername(name));
                  setRegisterStatus(true);
                  setTimeout(() => {
                    setRegisterStatus(false);
                    navigation.navigate("Home");
                  }, 500);
                }
              }
            );
          } else if (results.row.length === 0) {
            tx.executeSql(
              "INSERT INTO User (Name, Password) VALUES(?,?)",
              [name, password],
              (tx, result) => {
                if (result) {
                  setRegisterStatus(true);
                  dispatch(setUsername(name));
                  setTimeout(() => {
                    setRegisterStatus(false);
                    navigation.navigate("Home");
                  }, 500);
                }
              }
            );
          }
        });
      });
      // dispatch(setUsername());
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
          // Checker for input validation, activates the helper text if there is an error
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
          // Checker for input validation, activates the helper text if there is an error
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
      {/* Helper Text activated when registerStatus get a true value from the database query */}
      <HelperText type="info" visible={registerStatus}>
        Registration Successful
      </HelperText>
      <View style={styles.row}>
        <Text style={tw`text-right text-base`}>
          Registered already, go to // onPress function updates the parent
          component show state
          <Text
            style={tw`text-2xl text-red-400`}
            // onPress function updates the parent component show state
            onPress={() => setShow(true)}
          >
            Login
          </Text>
        </Text>
      </View>
    </ScrollView>
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
