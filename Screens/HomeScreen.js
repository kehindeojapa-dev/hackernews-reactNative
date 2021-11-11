import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from "react-native-paper";
import tw from "tailwind-react-native-classnames";

const HomeScreen = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Welcome Home",
      headerRight: () => (
        <IconButton
          icon="account-circle"
          size={25}
          color="#fff"
          onPress={() => navigation.push("About")}
          // color="red"
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
  }, [navigation]);
  return (
    <ScrollView>
      <Text style={tw`text-center text-3xl mt-5`}>HackerNews</Text>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
