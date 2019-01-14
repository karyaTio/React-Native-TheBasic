import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Greeting extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.names}>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  names: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30
  }
});
