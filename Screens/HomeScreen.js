import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from "react-native-paper";
import tw from "tailwind-react-native-classnames";
import HackerNews from "../Components/Hackernews";
import * as SQLite from "expo-sqlite";
import { useSelector, useDispatch } from "react-redux";
import { selectUsername, setUsername } from "../Redux/userData";

const db = SQLite.openDatabase("db.userDB");
const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const username = useSelector(selectUsername);
  console.log(username);

  const greeting = (username) => {
    const myDate = new Date();
    const hrs = myDate.getHours();

    let greet;

    if (hrs < 12) greet = "Good Morning";
    else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
    else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";
    if (username) {
      return `${greet}, ${username}`;
    } else {
      return `${greet}, Guest`;
    }
  };
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql("SELECT Name FROM User", [], (tx, result) => {
        if (result.rows.length === 1) {
          const name = result.rows.item(0).Name;
          dispatch(setUsername(name));
        }
      });
    });
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: greeting(username),
      // title: "Welcome Home",
      headerRight: () => (
        <IconButton
          icon="account-circle"
          size={25}
          color="#fff"
          onPress={() => navigation.push("About")}
        />
      ),
      headerLeft: () => (
        <IconButton
          icon="login"
          size={20}
          color="#fff"
          onPress={() => navigation.push("SignIn")}
        />
      ),
    });
  }, [navigation, username]);
  return <HackerNews />;
};

export default HomeScreen;

const styles = StyleSheet.create({});
