"use strict";

import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  action: {
    borderColor: "green",
    borderWidth: 2,
    position: "absolute",
    bottom: 20,
    padding: 20,
    borderRadius: 5,
    left: 0,
  },
});

export const defaultsStyles = StyleSheet.create({
  noMoreCardsText: {
    fontSize: 22,
  },
  action: {
    fontSize: 16,
    color: "green",
  },
});
