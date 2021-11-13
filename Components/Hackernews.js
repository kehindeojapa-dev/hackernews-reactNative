import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import tw from "tailwind-react-native-classnames";

import { getStories } from "../Utils/apis";

const Hackernews = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    setLoading(true);
    getStories()
      .then((stories) => {
        setStories(stories);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  } else if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator animating={true} size={"large"} color="#f4511e" />
      </View>
    );
  } else {
    return (
      <FlatList
        data={stories}
        keyExtractor={(item) => item.time}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    );
  }
};

export default Hackernews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
