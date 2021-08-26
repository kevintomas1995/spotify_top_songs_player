"use strict";

import React, { Component } from "react";
import { Text, View } from "react-native";
import { defaultsStyles } from "./Styles";

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={defaultsStyles.noMoreCardsText}>No more cards</Text>
      </View>
    );
  }
}

class ActionView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text
        style={[
          defaultsStyles.action,
          { borderColor: this.props.color, color: this.props.color },
          this.props.style
        ]}
      >
        {this.props.text}
      </Text>
    );
  }
}

export default {
  NoMoreCards,
  ActionView,
};
