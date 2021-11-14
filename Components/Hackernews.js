import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ActivityIndicator, Surface } from "react-native-paper";
import tw from "tailwind-react-native-classnames";

import { getStories } from "../Utils/apis";
import Story from "./Story";

const Hackernews = () => {
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getInitialStories();
  }, []);

  const getInitialStories = () => {
    setLoading(true);
    getStories(0, 20)
      .then((stories) => {
        setStories(stories);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const getMoreStories = () => {
    if (stories.length <= 500) {
      setLoadingMore(true);
      getStories(stories.length, stories.length + 5)
        .then((newStories) => {
          setTimeout(() => {
            setStories(stories.concat(newStories));
          }, 2500);
        })
        .catch((error) => {
          setError(error);
        });
    }
  };

  const loadingMoreSpinner = () => {
    if (!loadingMore) return null;

    return (
      <View style={styles.container}>
        <ActivityIndicator animating size={20} color="#f4511e" />
      </View>
    );
  };

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
        style={tw`mb-3`}
        data={stories}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <Story story={item} />}
        onEndReached={getMoreStories}
        onEndReachedThreshold={1}
        ListFooterComponent={loadingMoreSpinner}
        initialNumToRender={20}
        onRefresh={getInitialStories}
        refreshing={false}
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
    paddingTop: 2,
    paddingBottom: 2,
  },
});
