import React from "react";
import { StyleSheet, Text, View, Flatlist, ScrollView } from "react-native";
import tw from "tailwind-react-native-classnames";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar } from "react-native-paper";
import FavTools from "../Components/FavTools";

const AboutScreen = () => {
  return (
    <ScrollView style={tw`bg-gray-50`}>
      {/* Avatar */}
      <View style={tw`ml-auto mr-auto mt-4`}>
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
          Hi, am Kenny. I build things that live up in the ☁. Coding is an
          hobby, and also what i do for a living.
        </Text>
        <Text style={tw`text-justify text-xl mt-2`}>
          Started coding for the first time around 2018, due to several
          challenges(aka school wahala, interest conflicts), i stopped. During
          the 2020 saga, i picked it up for real this time and i have not looked
          back since.
        </Text>
        <Text style={tw`text-justify text-xl font-bold`}>
          Currently aspiring to be a full-stack(web & mobile) developer. I hope
          to have fun and enjoy all aspect of these journey.
        </Text>
      </View>

      <View style={tw`w-80 ml-auto mr-auto mt-5 mb-4`}>
        {/* Tech Stacks */}
        <Text style={tw`text-center text-3xl font-bold`}>Tools</Text>
        <Text style={tw`text-justify text-xl`}>
          If you ever find me in the battlefield, these are the weapons you will
          likely find me wielding.
        </Text>
        <FavTools />
        {/* Hobbies */}
        <Text style={tw`text-left text-2xl font-bold mt-3`}>
          Hobbies: 🎤🎧📖🎮🤔
        </Text>

        {/* Fun Fact */}
        <Text style={tw`text-left text-2xl font-bold mt-3`}>
          Fun Fact:{" "}
          <Text style={tw`text-xl font-normal`}>
            Listening to music while coding makes me 🤗😊😁
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({});
