import React from "react";
import { StyleSheet, Text, View, Flatlist, ScrollView } from "react-native";
import tw from "tailwind-react-native-classnames";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar } from "react-native-paper";
import FavTools from "../Components/FavTools";

const AboutScreen = () => {
  return (
    <SafeAreaView style={tw`bg-red-100 h-full`}>
      <ScrollView>
        <Text style={tw`ml-auto mr-auto p-2 text-4xl font-bold`}>About Me</Text>
        {/* Avatar */}
        <View style={tw`ml-auto mr-auto mt-3`}>
          <Avatar.Image
            size={150}
            source={{
              uri:
                "https://gravatar.com/avatar/6fed85dcd25e77192426f78a5b9ad231?s=400&d=identicon&r=x",
            }}
          />
        </View>
        {/* Bio */}
        <View style={tw`w-80 ml-auto mr-auto mt-4`}>
          <Text style={tw`text-justify text-xl`}>
            Hi, am Kehinde. I code things that live up in the cloud. Coding is
            an hobby, and also what i do for a living.
          </Text>
          <Text style={tw`text-justify text-xl font-bold`}>
            Currently aspiring to be a full-stack(web & mobile) developer. I
            hope to have fun and enjoy all aspect of these journey.
          </Text>
        </View>

        {/* Tech Stacks */}
        <View style={tw`w-80 ml-auto mr-auto mt-5`}>
          <Text style={tw`text-center text-3xl font-bold`}>Tools</Text>
          <Text style={tw`text-justify text-xl`}>
            If you ever find me in the battlefield, these are the weapons you
            will likely find me wielding.
          </Text>
          <FavTools />
        </View>
      </ScrollView>

      {/* Worldview */}
      {/* Fun Fact */}
    </SafeAreaView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({});
