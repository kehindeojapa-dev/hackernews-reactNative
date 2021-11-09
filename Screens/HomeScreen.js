import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>I am the HomeScreen</Text>
      <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
        blanditiis recusandae nisi amet laudantium molestias, harum cumque!
        Expedita, officia beatae doloribus at ipsum maxime blanditiis nemo
        molestias corporis tenetur quaerat provident rerum totam quae eligendi.
        Eos facilis veniam unde!z
      </Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
