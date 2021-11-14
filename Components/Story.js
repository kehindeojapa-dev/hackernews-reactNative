import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-paper";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

const Story = ({ story: { time, title, url, by, kids } }) => {
  const navigation = useNavigation();

  const realTime = new Date(time * 1000).toLocaleDateString("en-UK", {
    hour: "numeric",
    minute: "numeric",
  });

  const openURL = () => {
    navigation.navigate("Web", { url });
  };

  return (
    <View style={tw`w-80 ml-auto mr-auto mt-2`}>
      <Text
        style={tw`text-red-400 text-base font-bold underline`}
        onPress={openURL}
      >
        {title}
      </Text>
      <Text style={tw`mb-2`}>
        by <Text style={tw`text-red-300 text-base`}>{by}</Text> | {realTime} |{" "}
        <Text style={tw`text-red-300 text-base`}>{kids?.length}</Text> comments
      </Text>
      <Divider />
    </View>
  );
};

export default Story;
