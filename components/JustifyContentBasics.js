import React, { Component } from "react";
import { View } from "react-native";

export default class JustifyContentBasics extends Component {
  render() {
    return (
      // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <View
          style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
        />
        <View style={{ width: 50, height: 50, backgroundColor: "skyblue" }} />
        <View style={{ width: 50, height: 50, backgroundColor: "steelblue" }} />
      </View>
    );
  }
}

// Available options are flex-start, center, flex-end, space-around, space-between and space-evenly.
