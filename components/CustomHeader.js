import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";


const CustomHeader = (props) => {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={props.onSelectHome}>
          <Text style={{ fontSize: 30, fontWeight: "600"}}>
            your top songs
          </Text>
        </TouchableOpacity>
      </View>
    );
  }


export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: "6%",
    paddingVertical: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
