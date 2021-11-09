import React from "react";
import { View, Text, Image } from "react-native";
import tw from "tailwind-react-native-classnames";

const Tools = [
  {
    name: "HTML",
    logoURL: "https://img.icons8.com/color/96/000000/html-5--v1.png",
  },
  {
    name: "CSS",
    logoURL: "https://img.icons8.com/dusk/128/000000/css3.png",
  },
  {
    name: "JS",
    logoURL: "https://img.icons8.com/color/128/000000/javascript.png",
  },
  {
    name: "REACT",
    logoURL: "https://img.icons8.com/color/50/000000/react-native.png",
  },
  {
    name: "REACT-NATIVE",
    logoURL: "https://img.icons8.com/nolan/64/react-native.png",
  },
  {
    name: "NODE",
    logoURL: "https://img.icons8.com/color/96/000000/nodejs.png",
  },
  {
    name: "EXPRESS",
    logoURL:
      "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  },
  {
    name: "MONGODB",
    logoURL: "https://img.icons8.com/color/96/000000/mongodb.png",
  },
];

const FavTools = () => (
  <View style={tw`flex-row flex-wrap justify-center`}>
    {Tools.map((tool) => (
      <View style={tw`m-2`} key={tool.name}>
        <Image
          source={{ uri: tool.logoURL }}
          style={{ width: 90, height: 90 }}
        />
        <Text style={tw`text-center`}>{tool.name}</Text>
      </View>
    ))}
  </View>
);

//www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg

export default FavTools;
