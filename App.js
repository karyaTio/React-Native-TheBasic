import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Greeting from "./components/Greeting";
import Blink from "./components/Blink";
import FixedDimensionsBasics from "./components/FixedDimensionsBasics";
import FlexDimensionsBasics from "./components/FlexDimensionsBasics";
import FlexDirectionBasics from "./components/FlexDirectionBasics";
import JustifyContentBasics from "./components/JustifyContentBasics";
import AlignItemsBasics from "./components/AlignItemsBasics";

export default class App extends React.Component {
  render() {
    let pic = {
      uri:
        "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
    };
    return <AlignItemsBasics />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
