import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { ActivityIndicator } from "react-native-paper";

const WebScreen = ({ route }) => {
  const { url } = route.params;

  const displaySpinner = () => {
    return (
      <View style={styles.container}>
        <ActivityIndicator animating={true} size={"large"} color="#f4511e" />
      </View>
    );
  };

  return (
    <WebView
      startInLoadingState={true}
      source={{ uri: url }}
      renderLoading={() => displaySpinner()}
    />
  );
};

export default WebScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
