import { styles, theme } from "@/style";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ChevronLeftIcon, HeartIcon } from "react-native-heroicons/outline";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Person = () => {
  const insets = useSafeAreaInsets();
  const [favorite, setFavorite] = useState(false);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900"
    >
      <View
        style={{ flex: 1, marginTop: insets.top + 15 }}
        className="z-20 w-full flex-row justify-between items-center px-4"
      >
        <TouchableOpacity
          style={styles.background}
          className="rounded-xl p-1"
          onPress={() => {
            router.back();
          }}
        >
          <ChevronLeftIcon
            size={28}
            strokeWidth={2.5}
            color="white"
          ></ChevronLeftIcon>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFavorite(!favorite)}
          className="rounded-xl p-1"
        >
          <HeartIcon
            size={28}
            fill={!favorite ? "white" : theme.background}
          ></HeartIcon>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Person;
