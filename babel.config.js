module.exports = function (api) {
  api.cache(true);
  // dependencies: {
  //   "react-native-sqlite-storage": {
  //     platforms: {
  //       android: {
  //         sourceDir:
  //           "../node_modules/react-native-sqlite-storage/platforms/android-native",
  //         packageImportPath: "import io.liteglue.SQLitePluginPackage;",
  //         packageInstance: "new SQLitePluginPackage()"
  //       }
  //     }
  //   }
  // }
  return {
    presets: ["babel-preset-expo"],
  };
};
