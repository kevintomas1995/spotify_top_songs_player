import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import CustomHeader from "../components/CustomHeader";
import Player from "../components/Player";
import MainSwiper from "../components/MainSwiper";

const HomeScreen = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  console.log("index", index);
  const onSwiped = () => {
    if (index === 19) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }

    //console.log("index", index);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <StatusBar style="dark" />
        <CustomHeader />

        <Player index={index} />
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            marginTop: "2%",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Top {index + 1} Song</Text>
        </View>

        <MainSwiper index={index} onSwiped={onSwiped} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
